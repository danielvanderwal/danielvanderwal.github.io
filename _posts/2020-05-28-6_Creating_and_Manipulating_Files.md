---
title: "Creating and Manipulating files"
date: 2020-05-28
categories:
  - Linux
---

# Creating and Manipulating files

### Ways to modify files:

1. touch: creates a zero byte files
1. cp: copies one file to another
1. mv: moves a file from one location to another, even across file systems. Also how to change the name of a file.
1. rm: removes the inode-filename link. The data still exists on the disk drive, however.

### Manipulating Files

Examples:
 - Vim, Nano, ed, or Emacs

### Finding files

The ***find*** command can search a directory for matching criteria.

Example:
```bash
find . -name *.txt
find /etc -name httpd.conf
```
Will find all files with names that end with .txt and output their full path to stdout.

### Common 'Find' Flags

- **type**
  - f = regular files
  ```bash
  find . -type f -name httpd.conf
  ```
  - d = directory
  ```bash
  find . -type d -name html
  ```
  - I = symbolic link
  ```bash
  find . -type l -name redhat-release
  ```
- **user**
  - File is owned by user (username or UID)

### 'Locate' command
Relies on a database in /etc/cron.daily/mlocate. Update by running 'updatedb'.

```bash
locate httpd.conf
```
### Reading Text files

- **cat**
  - This reads the file and outputs all of it to stdout
- **less** and **more**
  - Also known as "pagers" these commands will output the contents of a file to the screen, but allow you to navigate through the file as well.
- **head** and **tail**
  - These commands let you look at the lines starting at the top or bottom of the file, respectively.
  ```bash
  head -n 100 messages
  tail -n 10 messages
  ```
### Text Manipulation

- **sort**
  - Sorts
