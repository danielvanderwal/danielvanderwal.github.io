---
title: "NGNIX - Blocking Access by IP with NGINX"
date: 2020-04-22
categories:
  - NGINX
---

- `allow` directive
- `deny` directive

### Restrict Access By IP Address
The `ngx_http_access_module` allows limiting access to certain client addresses. Rules are checked in order until the first match is found. The `allow` and `deny` directives can be used within the `http`, `server`, `location`, and `limit_except` directives:

```
location / {
    deny  192.168.1.1;
    allow 192.168.1.0/24;
    allow 10.1.1.0/16;
    allow 2001:0db8::/32;
    deny  all;
}
```
