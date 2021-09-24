---
title: Ruby Setup for MacOS
tags:
  - Setup
  - Ruby
---

## Install

```bash
brew install rbenv
rbenv init

# add eval "$(rbenv init -)" to ~/.zshrc
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 2.7.4
rbenv global 2.7.4
gem install bundler --no-document
```
