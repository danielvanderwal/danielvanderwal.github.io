---
title: "IO Redirection"
date: 2020-05-26
categories:
  - Linux
tags:
  - linux pipes redirection input output stdin stout stderr
---

## IO Redirection


- stdin - keyboard
- stout - screen
- stderr - error outputs


### Output redirection

```bash
  ls -al > listing
  echo "This is a test" >> /var/log/messages
  ```

### Input redirection

```bash
  sort < listing
  sort < listing > sorted_list
  ```

### Pipes

```bash
  ls -l | less # only outputs one screen at a time

  du | sort -nr

  ls -l | wc -l

  tar -tzvf tarfile/tgz | less
```

### Error redirection

```bash
  myscript.sh 2> errors # redirects stderr rather than stdout

  myscript.sh > allout.txt 2>&1 # redirects stdout and stderr to file
```
