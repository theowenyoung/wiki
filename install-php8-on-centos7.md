---
title: Install PHP 8.0 On CentOS 7 / RHEL 7
tags:
  - Setup
  - PHP
  - CentOS
---

```bash

yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm

yum install -y https://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum install -y --enablerepo=remi-php80 php php-cli
php -v
```
