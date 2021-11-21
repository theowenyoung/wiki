---
title: 国内镜像资源汇总
tags:
  - Awesome
  - Mirrors
---

收集国内能用到的优秀镜像服务。

## Github

- [Fastgit](https://doc.fastgit.org/zh-cn/) - Github 国内镜像

- Download: `https://download.fastgit.org/org/repo/xxx`
- Clone `git clone https://github.com/org/repo`
- Clone with ssh `git clone git@ssh.fastgit.org:theowenyoung/gatsby-theme-primer-wiki.git`

## Rust

- [rsproxy cn](https://rsproxy.cn/) - rust 国内镜像

## Docker

- 阿里云公网: `https://registry.cn-hangzhou.aliyuncs.com`
- 腾讯云： `https://mirror.ccs.tencentyun.com`
  - [使用说明](https://cloud.tencent.com/document/product/1207/45596)

`sudo vim /etc/docker/daemon.json`

```json
{ "registry-mirrors": ["https://mirror.ccs.tencentyun.com"] }
```

```bash
sudo systemctl restart docker
```
