---
title: "Compressing and Decompressing Files"
date: 2020-05-27
categories:
  - Linux
tags:
  - linux compression decompression tar bzip2 zip archive
---

## Compressing and Decompressing Files

#### Creating archive
```bash
tar cvf example.tar /sourcedir
```

#### Extracting archive
```bash
tar xvf example.tar
```

#### Two main compression commands:
1. gzip
1. bzip2

- gzip example:

```bash
gzip bigfile.stuff
gzip -d bigfile.stuff.gz
```

- bzip2 example:

```bash
bzip2 bigfile.stuff
bzip2 -d bigfile.stuff.bz2
```

### Compress an archive

Tar does not compress by default

```bash
tar czvf home.tar.gz /home

or

tar cvjf home.tar.bz2 /home
```

Extracting:

```bash
tar xzvf home.tar.gz /home

or

tar xvjf home.tar.bz2 /home
```

### Zip Files

Used for files that need to be managed on both Windows and Linux servers.  Zip is similar to tar, but automatically try's to compress files.

Examples:
```bash
zip -r archivename /home
unzip archivename
```
