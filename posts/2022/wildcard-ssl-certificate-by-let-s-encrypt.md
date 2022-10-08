---
title: 使用 Docker + Let's Encrypt 申请泛域名证书
icon: devops
date: 2022-10-07
category:
  - 运维
tag:
  - DevOps
---

# 使用 Docker + Let's Encrypt 申请泛域名证书

为了在我们的网站上启用 HTTPS，我们需要从证书颁发机构（CA）申请 SSL 证书。 [Let's Encrypt](https://letsencrypt.org/zh-cn/) 是一个证书颁发机构，向  ```Let's Encrypt``` 申请证是免费的。```Let's Encrypt``` 支持泛域名证书，不需要为每个子域名单独申请证书。

目前常用的 ```Let's Encrypt``` 证书生成工具有 [certbot](https://certbot.eff.org/)、[acme.sh](https://github.com/acmesh-official/acme.sh)、[acme-tiny](https://github.com/diafygi/acme-tiny)。

::: tip 提示

为了方便使用，请先行准备 Docker 环境。下面以域名 [dotli.cn](https://dotli.cn:4430) 为例使用 ```acme.sh``` 申请泛域名证书。

:::

## 1. 拉取 Docker 镜像

```bash
docker pull neilpang/acme.sh
```

## 2. 准备 acme.sh 运行环境

启动容器可以作为可执行文件运行或作为守护程序运行

### 作为可执行文件运行

```bash
docker run --rm -it  \
  -v /mnt/d/ssl/letsencrypt:/acme.sh  \
  --net=host \
  neilpang/acme.sh --issue -d dotli.cn --standalone
```

您可以使用 ```acem.sh``` 支持的任何命令，其他示例：

```bash
#revoke a cert
docker run --rm -it  \
  -v /mnt/d/ssl/letsencrypt:/acme.sh  \
  --net=host \
  neilpang/acme.sh --revoke -d dotli.cn
```

```bash
#use dns mode
docker run --rm -it  \
  -v /mnt/d/ssl/letsencrypt:/acme.sh  \
  neilpang/acme.sh --issue --dns -d dotli.cn
```

```bash
#run cron job
docker run --rm -it  \
  -v /mnt/d/ssl/letsencrypt:/acme.sh  \
  --net=host \
  neilpang/acme.sh --cron
```

您也可以直接运行 ```neilpang/acme.sh``` 镜像，就像它是真正的 ```shell``` 脚本一样。

### 作为守护程序运行

作为守护进程运行 ```acme.sh```，以便它可以处理自动续订任务。

```bash
docker run --rm -itd  \
  -v /mnt/d/ssl/letsencrypt:/acme.sh  \
  --net=host \
  --name=acme.sh \
  neilpang/acme.sh daemon
```

成功运行容器后，您就可以通过 ```docker exec``` 来执行任意 ```acme.sh``` 命令了。

## 3. 申请证书

```acme.sh``` 实现了 acme 协议支持的所有验证协议。一般有两种方式验证: ```http``` 和 ```dns``` 验证。

我们这里通过手动配置 ```dns``` 来验证。

### step1 进入容器

作为守护程序运行容器：

```bash
docker run --rm -itd  \
  -v /mnt/d/ssl/letsencrypt:/acme.sh  \
  --net=host \
  --name=acme.sh \
  neilpang/acme.sh daemon
```

进入容器：

```bash
docker exec -it acme.sh /bin/sh
```

### step2 申请证书

::: tip 提示

```acme.sh``` 从 ```v3``` 版本开始，默认证书服务器（CA）由 ```Let's Encrypt``` 改为了 ```Zerossl```。

:::

我们这里手动切换默认证书服务器（CA）为 ```Let's Encrypt```:

```bash
acme.sh --set-default-ca --server letsencrypt
```

通过 ```-d``` 参数来指定我们的域名，```--dns``` 表示手动模式或 dns api。省略参数时默认为手动模式。

```bash
acme.sh --issue --dns \
  -d dotli.cn \
  -d *.dotli.cn \
  --yes-I-know-dns-manual-mode-enough-go-ahead-please
```

运行成功后，会提示您需要手动增加名称为 ```_acme-challenge``` 的 TXT 记录值。

```bash
[Fri Oct  7 13:16:48 UTC 2022] Add the following TXT record:
[Fri Oct  7 13:16:48 UTC 2022] Domain: '_acme-challenge.dotli.cn'
[Fri Oct  7 13:16:48 UTC 2022] TXT value: 'y5y-tNuhYLSlnSO_YPTmJTvhSXEasol5CAjATrvCqag'
[Fri Oct  7 13:16:48 UTC 2022] Please be aware that you prepend _acme-challenge. before your domain
[Fri Oct  7 13:16:48 UTC 2022] so the resulting subdomain will be: _acme-challenge.dotli.cn

[Fri Oct  7 13:16:48 UTC 2022] Add the following TXT record:
[Fri Oct  7 13:16:48 UTC 2022] Domain: '_acme-challenge.dotli.cn'
[Fri Oct  7 13:16:48 UTC 2022] TXT value: '3U76ji4ldL-aAORMUM3kJM4cGKn4G0zAAei21oRfBiY'
[Fri Oct  7 13:16:48 UTC 2022] Please be aware that you prepend _acme-challenge. before your domain
[Fri Oct  7 13:16:48 UTC 2022] so the resulting subdomain will be: _acme-challenge.dotli.cn

[Fri Oct  7 13:16:48 UTC 2022] Please add the TXT records to the domains, and re-run with --renew.

[Fri Oct  7 13:16:48 UTC 2022] Please add '--debug' or '--log' to check more details.

[Fri Oct  7 13:16:48 UTC 2022] See: https://github.com/acmesh-official/acme.sh/wiki/How-to-debug-acme.sh
```

根据提示手动在 DNS 服务器上配置完成 TXT 记录。

配置完成后，通过指定 ```--renew``` 参数重新执行命令：

```bash
acme.sh --renew \
  -d dotli.cn \
  -d *.dotli.cn \
  --yes-I-know-dns-manual-mode-enough-go-ahead-please
```

等待一会，看到下面的输出表示申请成功了：

```bash
[Fri Oct  7 13:19:09 UTC 2022] Cert success.

[Fri Oct  7 13:19:09 UTC 2022] Your cert is in: /acme.sh/dotli.cn/dotli.cn.cer
[Fri Oct  7 13:19:09 UTC 2022] Your cert key is in: /acme.sh/dotli.cn/dotli.cn.key
[Fri Oct  7 13:19:09 UTC 2022] The intermediate CA cert is in: /acme.sh/dotli.cn/ca.cer
[Fri Oct  7 13:19:09 UTC 2022] And the full chain certs is there: /acme.sh/dotli.cn/fullchain.cer
```

下面您就可以使用申请好的证书了

```bash
/ # ls /acme.sh/dotli.cn -l
total 24
-rwxrwxrwx 1 1000 1000 3751 Oct  7 13:19 ca.cer
-rwxrwxrwx 1 1000 1000 1842 Oct  7 13:19 dotli.cn.cer
-rwxrwxrwx 1 1000 1000  617 Oct  7 13:19 dotli.cn.conf
-rwxrwxrwx 1 1000 1000  956 Oct  7 13:18 dotli.cn.csr
-rwxrwxrwx 1 1000 1000  158 Oct  7 13:18 dotli.cn.csr.conf
-rwxrwxrwx 1 1000 1000 1679 Oct  7 13:16 dotli.cn.key
-rwxrwxrwx 1 1000 1000 5593 Oct  7 13:19 fullchain.cer
```

## 4. 参考资料

- [Let's Encrypt](https://letsencrypt.org/zh-cn/)
- [acme.sh](https://github.com/acmesh-official/acme.sh)
- [acme.sh 💕 docker](https://github.com/acmesh-official/acme.sh/wiki/Run-acme.sh-in-docker)
- [acme.sh DNS manual mode](https://github.com/acmesh-official/acme.sh/wiki/DNS-manual-mode)
