---
tags:
  - Rust
  - Debian
  - Setup
---

# Rust Environment Setup for Debian

[Official Site](https://www.rust-lang.org/learn/get-started)

## Rust 镜像设置

<https://rsproxy.cn/>

Add this to `~/.bashrc`

```bash
export RUSTUP_DIST_SERVER="https://rsproxy.cn"
export RUSTUP_UPDATE_ROOT="https://rsproxy.cn/rustup"
```

Install rustup `curl --proto '=https' --tlsv1.2 -sSf https://rsproxy.cn/rustup-init.sh | sh`

`~/.cargo/config`:

```bash
[source.crates-io]
replace-with = 'rsproxy'

[source.rsproxy]
registry = "https://rsproxy.cn/crates.io-index"

[registries.rsproxy]
index = "https://rsproxy.cn/crates.io-index"

[net]
git-fetch-with-cli = true
```

## Install

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
