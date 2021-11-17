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
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```

## Clean all

```bash
docker system prune --volumes
docker image prune -a
```
