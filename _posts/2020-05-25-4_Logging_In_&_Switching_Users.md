---
title: "Logging In and Switching Users"
date: 2020-05-25
categories:
  - Linux
tags:
  - linux user login
---

## Logging In and Switching Users

#### su command
switch user command

Sign in as root
> su -

Sign in as user
> su - clouduser

Must include the dash to inherit $PATH of user


#### Interactive and login shells
- .bash_profile: login shell, executed to configure things before the initial command prompt.

- .bashrc: interactive shell, is the place to put stuff that applies only to bash itself, such as alias and function definitions, shell options, and prompt settings.
