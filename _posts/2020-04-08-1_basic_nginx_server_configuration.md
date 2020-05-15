---
title: "NGINX Basics"
date: 2020-04-08
categories:
  - blog
tags:
  - nginx
---

## Lesson Objectives:
- Explore the /etc/nginx directory
- Explore the nginx.conf file
- Learn how to check the NGINX configuration using nginx -t
- Learn how to reload the NGINX configuration

## The /etc/nginx directory:

#### Location for all configuration files:
- nginx.conf
  - Virtual host configuration files:
      - conf.d directory (RHEL)
      - sites-available directory (debian/ubuntu)
      - sites-enabled directory (debian/ubuntu)
  - Module configuration files:
    - conf.d directory
    - modules-available directory
    - modules-enabled directory

#### The nginx.conf file:

***Defines global configuration***

**Server process configuration:**
- User server runs as
- Location of PID file

**Performance:**
- worker_processes
- worker_connections

**Location(s) of module and virtual host configuration files (via include)**

#### How to check the NGINX configuration:

**Use *nginx -t* before every reload!**

**Reloading the NGINX Configuration:**

- Using systemctl:
  - **Reload** - Doesn't drop existing connections
  - **Restart** - Drops existing connections

- Using NGINX - nginx -s:
  - Validates the configuration before restarting

The safe bet is to execute **nginx -t** before a reload or restart!
