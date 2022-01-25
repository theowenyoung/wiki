---
title: Postgresql Tips
tags:
  - Postgresql
  - Tips
---

## 0. Enter psql

```bash
psql
```

## Show all databases

```bash
\l
```

## Enter Database

```bash
\c database_name
```

## Show all Tables

```bash
\d
```

## Show Table structure

```bash
\d table_name
```

## Pretty print table

```bash
\x on
```

## Alter table

See <https://www.postgresql.org/docs/current/sql-altertable.html>

## Upsert

See <https://stackoverflow.com/questions/61494958/postgres-on-conflict-do-update-only-non-null-values-in-python>

## Export Schema

```bash
 pg_dump database_name -s --no-owner > schema.sql
```

## Export Only data

```bash
 pg_dump database_name -a --no-owner > data.sql
```

## Delete or Drop or Remove Database

```bash
psql
drop database database_name;
```

## Create Database

```bash
psql
CREATE DATABASE name;
```

## Import Database

```bash
psql database_name < data.sql
```
