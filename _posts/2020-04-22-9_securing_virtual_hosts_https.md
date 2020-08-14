---
title: "NGNIX - Securing Virtual Hosts - HTTPS"
date: 2020-04-22
categories:
  - NGINX
---

# NGINX - Securing Virtual Hosts - HTTPS

### SSL/TLS Configuration Examples

```
server {
    listen              443 ssl;
    server_name         www.example.com;
    ssl_certificate     www.example.com.crt;
    ssl_certificate_key www.example.com.key;
    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers         HIGH:!aNULL:!MD5;
    ...
}
```

There are many ways you can configure a server with `listen`: IPv4, IPv6, with or without IP address/port and UNIX sockets.

```
listen 127.0.0.1;
listen 8000;
listen *:8000;
listen localhost:8000;
listen [::]:8000;
listen unix:/var/run/nginx.sock;
```

### Verify the Self-Signed Certificate for the NGINX Server

Verify the X509 server certificate:

```
openssl verify -CAfile /etc/nginx/ssl/testdomain.local/ca-cert.pem /etc/nginx/ssl/testdomain.local/server-cert.pem
```

We should see the following: `server-cert.pem: OK`

### Configure the virtual host to use SSL/TLS

Change the `listen` line to `443 ssl` and add the `ssl_certificate` and `ssl_certificate_key` directives:

```
server {
        listen 443 ssl;
        root /var/www/html/testdomain.local;
        server_name testdomain.local www.testdomain.local;
        ssl_certificate /etc/nginx/ssl/testdomain.local/server-cert.pem;
        ssl_certificate_key /etc/nginx/ssl/testdomain.local/server-key.pem;
```
