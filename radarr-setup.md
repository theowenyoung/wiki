---
tags:
  - Medias
  - Radarr
  - Setup
  - Self-Hosted
---

# Radarr Setup

[repo](https://github.com/Radarr/Radarr)

## Install

See also [here](https://wiki.servarr.com/radarr/installation#linux)

[Latest Release](https://github.com/Radarr/Radarr/releases)

### Systemd

```bash
cat << EOF | sudo tee /etc/systemd/system/radarr.service > /dev/null
[Unit]
Description=Radarr Daemon
After=syslog.target network.target
[Service]
User=green
Group=admin
Type=simple

ExecStart=/home/green/radarr/Radarr -nobrowser -data=/home/green/.config/radarr/
TimeoutStopSec=20
KillMode=process
Restart=always
[Install]
WantedBy=multi-user.target
EOF
```
