---
title: Docker Common Commands
tags:
  - Docker
  - Tips
---

## docker compose exec bin

```bash
docker-compose exec service-name /bin/sh
```

## Stop All contains and remove

```bash
sudo docker stop $(sudo docker ps -a -q)
sudo docker rm $(sudo docker ps -a -q)
```

## Clean all

```bash
sudo docker system prune --volumes
sudo docker image prune -a
```
