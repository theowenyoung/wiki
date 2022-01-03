---
title:
tags:
  -
---

## See who connect with Me

<https://www.linuxshelltips.com/find-ip-addresses-are-connected-to-linux/>

```bash
ss -tun state connected
```

## Sort by ip connect with 443

```bash
netstat -tn 2>/dev/null | grep -E '\s[0-9.]+:443\s' | awk '{print $5}' | cut -d : -f 1 | sort | uniq -c | sort -nr
```

## Ban

<https://docs.rackspace.com/support/how-to/block-an-ip-address-on-a-Linux-server/>

```bash
sudo systemctl status firewalld
sudo firewall-cmd --permanent --add-rich-rule="rule family='ipv4' source address='202.61.254.136' reject"
sudo firewall-cmd --reload
sudo firewall-cmd --list-all
```

## Kill tcp

```bash
tcpkill host <ip>
```
