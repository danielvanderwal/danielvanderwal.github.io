---
title: "NGINX - Configuring Custom Error Pages in NGINX"
date: 2020-04-22
categories:
  - NGINX
---

# Configuring Custom Error Pages in NGINX

### Why Custom Error Pages?
- Match "look and feel" of the site
- Provide customized information
- "Sanitize" server information
- "Catch all" for response codes that don't require a unique error page
- Configure "custom" action to one or more response codes

### Configure a Single Error:
Custom error pages are configured using the `error_page` directive:

error_page 404 /testdomain_404.html;
location = /testdomain_404.html {
        root /var/www/html;
        internal;
}

This does the same thing, but returns a `200 status (OK)` instead of `404`:

`
error_page 404 =200 /testdomain_404.html;
location = /testdomain_404.html {
        root /var/www/html;
        internal;
}`

### Map Multiple Errors to a Page
We can map more than one response code to a single page using the error_page directive, as shown here:

`
error_page 404 403 /testdomain_other_error.html;
        location = /testdomain_other_error.html {
                root /var/www/html;
                internal;
        }`
