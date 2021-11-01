---
title: Postgres Setup for Debian
tags:
  - Postgres
  - Debian
  - Setup
---

## Install

```bash
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get -y install postgresql
```

### Optional

Install postgis

```bash
sudo apt -y install postgis
```
