---
title: "NGNIX - Directives (Upsteam, Location, Return)"
date: 2020-04-22
categories:
  - NGINX
---

### The upstream directive
The upstream directive defines groups of servers that can be referenced by the `proxy_pass, fastcgi_pass, uwsgi_pass, scgi_pass, memcached_pass`, and `grpc_pass` directives:

```
   upstream testdomainapp  {
   server app1.testdomain.local:8085;
   server app2.testdomain.local:8086 backup;
   server app3.testdomain.local:8087 backup;
}
```

By default, requests are distributed between the servers using a weighted round-robin balancing method.

### The location directive
The location directive sets configuration depending on a request URI:

```
location / {
        try_files $uri $uri/ =404;
}
```

```
location ~ /\.ht {
        deny all;
}
```

A location can either be defined by a prefix string, or by a regular expression.

### The return directive
The return directive stops processing and returns the specified code to a client:

```
location /downloads {
        rewrite ^(/downloads)/(.*)$ http://downloads.testdomain.local:9084/$2 permanent;
        return 403;
}
```
