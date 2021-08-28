---
tags:
  - CSS
---

# Smart word break in CSS

> From [Smarter word break in CSS? - Stack Overflow](https://stackoverflow.com/a/48830291)

```css
body {
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}
```
