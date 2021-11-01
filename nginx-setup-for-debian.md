---
title: Nginx Setup for Debian
tags:
  - Nginx
  - Debian
  - Setup
---

Install latest stable nginx for debian

> Also see [here](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/)

```bash
sudo su
cat <<EOF >> /etc/apt/sources.list.d/nginx.list
deb http://nginx.org/packages/debian/ buster nginx
deb-src http://nginx.org/packages/debian/ buster nginx
EOF
exit
curl -L https://nginx.org/keys/nginx_signing.key | sudo apt-key add -
sudo apt update
sudo apt install nginx
```

## Install certbot

### Install snap

> https://snapcraft.io/docs/installing-snapd

```bash
sudo apt -y install snapd
sudo snap install core; sudo snap refresh core

```

> https://certbot.eff.org/lets-encrypt/debianbuster-nginx

```bash
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

### Optional

Generate a nginx conf online at [here](https://www.digitalocean.com/community/tools/nginx)

## Generate SSL

```bash
sudo certbot nginx
```
