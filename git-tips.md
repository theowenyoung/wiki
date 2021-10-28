---
title: 收集常用Git技巧
language: zh
tags:
  - Git
  - Tips
  - 中文
---

## 回答合集

- [Finding the date/time a file was first added to a Git repository - Stack Overflow](https://stackoverflow.com/questions/2390199/finding-the-date-time-a-file-was-first-added-to-a-git-repository/25633731) - 获取首次提交时间

## 合并上游的时候不弹出确认框

```bash
git pull upstream main --commit --no-edit
```

## 对所有采用上游的更新

```bash
git checkout --theirs .
```

## 首次更新子 repo

```bash
git submodule update --init --recursive
```

Later

```bash
git submodule update --recursive
```
