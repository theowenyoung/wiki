---
title: Bash Tips
tags:
  - Bash
  - Tips
---

Curating bash Tips

## Get bash script parent dir absolute path

```bash
workspace="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )/../" &> /dev/null && pwd )"
```

## Get bash script dir path

```bash
workspace="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
```
