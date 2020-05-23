---
title: "NGNIX - Load Balancing"
date: 2020-04-22
categories:
  - notes
tags:
  - nginx
---

## NGINX - Load Balancing - An Introduction
#### Lesson Objectives
- Explore load balancing using the:
  - upstream directive
  - location directive
  - server directive

#### The upstream directive
The upstream directive defines groups of servers that can be referenced by the `proxy_pass`, `fastcgi_pass`, `uwsgi_pass`, `scgi_pass`, `memcached_pass`, and `grpc_pass` directives:

```
upstream testdomainapp  {
   server app1.testdomain.local:8085;
   server app2.testdomain.local:8086 backup;
   server app3.testdomain.local:8087 backup;
}
```

By default, requests are distributed between the servers using a weighted round-robin balancing method.

#### The location directive

The `location` directive is the other part of the equation that enables the `upstream` directive:

```
location /app {
        proxy_pass http://testdomainapp/;
}
```

In this example, we are using the `/app` location to front-end the `testdomainapp` server group, defined in the `upstream` directive.

#### The server directive

The `server` directive defines an individual server that is part of the `upstream` group:

```
upstream testdomainapp  {
   server app1.testdomain.local:8085 weight=3;
   server app2.testdomain.local:8086;
   server app3.testdomain.local:8087 backup;
}
```

There are may options available to define how each server is handled in the group. Server parameters available in the non-commercial NGINX offering include:

- weight=<number> - Sets the weight of the server, default=1
- max_conns=<number> - Limits active connections, default=0
- max_fails=<number> - Maximum unsuccessful connections, default=1
- fail_timeout=<time> - Sets fail timeout, default=10 seconds
- backup - Marks the server as a backup server
- down - Marks the server as a unavailable
