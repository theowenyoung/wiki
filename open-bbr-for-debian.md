---
tags:
  - Debian
  - Server
  - BBR
  - Proxies
---

# Open BBR for Debian

## Steps

1. Open the following configuration file to enable enable TCP BBR.

```bash
vi /etc/sysctl.conf
```

2. At the end of the config file, add the following lines.

```bash
net.core.default_qdisc=fq
net.ipv4.tcp_congestion_control=bbr
```

3. reload

```bash
sysctl -p
```

Now, Verify if BBR is enabled in your system,

```bash
sysctl net.ipv4.tcp_congestion_control
```

Output:

```bash
root@vps:~# sysctl net.ipv4.tcp_congestion_control
net.ipv4.tcp_congestion_control = bbr
```
