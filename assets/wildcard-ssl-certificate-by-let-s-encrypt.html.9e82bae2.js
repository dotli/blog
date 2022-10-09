const e=JSON.parse(`{"key":"v-f6bf91f0","path":"/posts/2022/wildcard-ssl-certificate-by-let-s-encrypt.html","title":"\u4F7F\u7528 Docker + Let's Encrypt \u7533\u8BF7\u6CDB\u57DF\u540D\u8BC1\u4E66","lang":"zh-CN","frontmatter":{"title":"\u4F7F\u7528 Docker + Let's Encrypt \u7533\u8BF7\u6CDB\u57DF\u540D\u8BC1\u4E66","icon":"devops","date":"2022-10-07T00:00:00.000Z","category":["\u8FD0\u7EF4"],"tag":["DevOps"],"summary":"\u4F7F\u7528 Docker + Let's Encrypt \u7533\u8BF7\u6CDB\u57DF\u540D\u8BC1\u4E66 \u4E3A\u4E86\u5728\u6211\u4EEC\u7684\u7F51\u7AD9\u4E0A\u542F\u7528 HTTPS\uFF0C\u6211\u4EEC\u9700\u8981\u4ECE\u8BC1\u4E66\u9881\u53D1\u673A\u6784\uFF08CA\uFF09\u7533\u8BF7 SSL \u8BC1\u4E66\u3002 Let's Encrypt \u662F\u4E00\u4E2A\u8BC1\u4E66\u9881\u53D1\u673A\u6784\uFF0C\u5411 \u7533\u8BF7\u8BC1\u662F\u514D\u8D39\u7684\u3002 \u652F\u6301\u6CDB\u57DF\u540D\u8BC1\u4E66\uFF0C\u4E0D\u9700\u8981\u4E3A\u6BCF\u4E2A\u5B50\u57DF\u540D\u5355\u72EC\u7533\u8BF7\u8BC1\u4E66\u3002 \u76EE\u524D\u5E38\u7528\u7684 \u8BC1\u4E66\u751F\u6210\u5DE5\u5177\u6709 certbot\u3001acme.sh\u3001acme-tiny\u3002 \u63D0","head":[["meta",{"property":"og:url","content":"https://blog.dotli.cn/posts/2022/wildcard-ssl-certificate-by-let-s-encrypt.html"}],["meta",{"property":"og:site_name","content":"Dotli"}],["meta",{"property":"og:title","content":"\u4F7F\u7528 Docker + Let's Encrypt \u7533\u8BF7\u6CDB\u57DF\u540D\u8BC1\u4E66"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T14:41:49.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"DevOps"}],["meta",{"property":"article:published_time","content":"2022-10-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-08T14:41:49.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u62C9\u53D6 Docker \u955C\u50CF","slug":"_1-\u62C9\u53D6-docker-\u955C\u50CF","link":"#_1-\u62C9\u53D6-docker-\u955C\u50CF","children":[]},{"level":2,"title":"2. \u51C6\u5907 acme.sh \u8FD0\u884C\u73AF\u5883","slug":"_2-\u51C6\u5907-acme-sh-\u8FD0\u884C\u73AF\u5883","link":"#_2-\u51C6\u5907-acme-sh-\u8FD0\u884C\u73AF\u5883","children":[{"level":3,"title":"\u4F5C\u4E3A\u53EF\u6267\u884C\u6587\u4EF6\u8FD0\u884C","slug":"\u4F5C\u4E3A\u53EF\u6267\u884C\u6587\u4EF6\u8FD0\u884C","link":"#\u4F5C\u4E3A\u53EF\u6267\u884C\u6587\u4EF6\u8FD0\u884C","children":[]},{"level":3,"title":"\u4F5C\u4E3A\u5B88\u62A4\u7A0B\u5E8F\u8FD0\u884C","slug":"\u4F5C\u4E3A\u5B88\u62A4\u7A0B\u5E8F\u8FD0\u884C","link":"#\u4F5C\u4E3A\u5B88\u62A4\u7A0B\u5E8F\u8FD0\u884C","children":[]}]},{"level":2,"title":"3. \u7533\u8BF7\u8BC1\u4E66","slug":"_3-\u7533\u8BF7\u8BC1\u4E66","link":"#_3-\u7533\u8BF7\u8BC1\u4E66","children":[{"level":3,"title":"step1 \u8FDB\u5165\u5BB9\u5668","slug":"step1-\u8FDB\u5165\u5BB9\u5668","link":"#step1-\u8FDB\u5165\u5BB9\u5668","children":[]},{"level":3,"title":"step2 \u7533\u8BF7\u8BC1\u4E66","slug":"step2-\u7533\u8BF7\u8BC1\u4E66","link":"#step2-\u7533\u8BF7\u8BC1\u4E66","children":[]}]},{"level":2,"title":"4. \u53C2\u8003\u8D44\u6599","slug":"_4-\u53C2\u8003\u8D44\u6599","link":"#_4-\u53C2\u8003\u8D44\u6599","children":[]}],"git":{"createdTime":1665240109000,"updatedTime":1665240109000,"contributors":[{"name":"\u674E\u6B23","email":"lixin@lejian.com","commits":1}]},"readingTime":{"minutes":3.82,"words":1145},"filePathRelative":"posts/2022/wildcard-ssl-certificate-by-let-s-encrypt.md","localizedDate":"2022\u5E7410\u67087\u65E5"}`);export{e as data};