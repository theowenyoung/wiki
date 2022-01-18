---
title: Deno Tips
tags:
  - Deno
  - Tips
---

Curation of Deno Tips.

## Dirname

```ts
const __dirname = new URL(".", import.meta.url).pathname;
```
