---
tags:
  - Medias
  - Rclone
  - Setup
  - Files
---

# Rclone Setup

## Install

```bash
curl https://rclone.org/install.sh | sudo bash
```

Also see [here](https://rclone.org/drive/)

## Transfer

```bash
cat ~/.config/rclone
```

Copy that to another machine.

## Web UI

```bash
rclone rcd --rc-web-gui --rc-user=test --rc-pass=test --rc-web-gui-update --stats=24h --rc-enable-metrics --rc-web-gui-no-open-browser
```
