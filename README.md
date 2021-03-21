# prefetch-setup

This project is an attempt to understand setup prefetch on different setup of projects

```
Cache prefetching is a technique used by computer processors to boost execution performance by fetching instructions or data from their original storage in slower memory to a faster local memory before it is actually needed (hence the term 'prefetch'). Most modern computer processors have fast and local cache memory in which prefetched data is held until it is required.
```

---

#### Setup no bundler project

> npm install

> npm run dev-1

This will run the no bundler project, this project is setup like an SPA,
when navigation is used, index.js manipulates the inner HTML to update the page contents

---

#### Setup webpack non react prefetch

[web.dev link](https://web.dev/link-prefetch/)

##### setup dev server

> npm install

> npm run dev-2

##### use custom express server

> npm install

> npm run build-2

> npx nodemon webpackjs/server/index.js
