---
tags:
  - Tips
  - Linux
  - Commands
  - Bash
---

# Linux Common Commands

## View current system info

```bash
lsb_release -a
```

Output:

```bash
Distributor ID:	Debian
Description:	Debian GNU/Linux 10 (buster)
Release:	10
Codename:	buster
```

## View all users

```bash
cat /etc/passwd | grep -v nologin|grep -v halt|grep -v shutdown|awk -F":" '{ print $1"|"$3"|"$4 }'|more
```

## Get Publish IP

```bash
hostname -I
```

## Change user group

```bash
usermod -g groupname username
```

## Get user group

```bash
id -g -n
```

## Remove apt ppa

```bash
sudo add-apt-repository --remove ppa:qbittorrent-team/qbittorrent-stable
```

## Get current shell

```bash
echo "$SHELL"
```

## Get current cpu arch

```bash
arch
```

or

```bash
dpkg --print-architecture
```

## Unzip tar.gz

```bash
tar -xf x.tar.gz
```

See also [here](https://linuxize.com/post/how-to-extract-unzip-tar-gz-file/)

Tar to specific directory

```bash
tar -xf x.tar.gz -C ./xxx
```

## Stdout to File

```bash
command &> file
```

Overwrite:

```bash
command >| file.txt 2>&1
```

## Download/Upload file by SSH SCP

Download to local:

```bash
scp root@ip:/path ~/Downloads
```

## Remove node_modules

```bash
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
```

## Remove target

```bash
find . -name 'target' -type d -prune -exec rm -rf '{}' +
```

## Find and replace string

```bash
sed -i 's/old-text/new-text/g' input.txt
```

## Soft Link

```bash
ln -s source_file target_file
```

## Create User

```bash
useradd -m USERNAME
```

> Note: with home directory

## Get all shells

```bash
cat /etc/shells
```

## Last n lines in file

```bash
tail -3 file.txt
```

## Linux find a biggest directory in ./

```bash
sudo du -a ./ 2>/dev/null | sort -n -r | head -n 20
```

## Linux find a biggest file in ./

```bash
find ./ -type f -printf '%s %p\n' | sort -nr | head -10
```
