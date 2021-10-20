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

## Clean all

```bash
docker system prune --volumes
docker image prune -a
```
