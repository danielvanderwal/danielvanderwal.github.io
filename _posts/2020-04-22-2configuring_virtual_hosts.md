---
title: "NGNIX - Configuring Virtual Hosts"
date: 2020-04-22
categories:
  - notes
tags:
  - nginx
---

## NGINX - Configuring Virtual Hosts

#### Virtual host configuration file locations:
  - /etc/nginx/conf.d
  - /etc/nginx/sites-available
  - /etc/nginx/sites-enabled

> Virtual host configuration files are pulled into nginx.conf via include

#### Virtual Host Configuration Files:
Will have a *server* block, at a minimum:

- listen ``<port>``;
- root /some/location;
- server_name name(s);
- location ``<directory>``;

Contains a place to "isolate" configuration for a single virtual host:

- Enable/disable single virtual host
- Easier to troubleshoot
- Easier to recover from issue(s)

Troubleshooting Virtual Hosts:

Use ``nginx -t`` to validate server configuration every time!

Errors tell the source/nature of the issue:

- What the error is
- Which file the error is located in
- Line the error is on in that file

This is why we isolate virtual host configuration files!
