# prefetch-setup

This project is an attempt to understand setup prefetch on different setup of projects

```
Cache prefetching is a technique used by computer processors to boost execution performance by fetching instructions or data from their original storage in slower memory to a faster local memory before it is actually needed (hence the term 'prefetch').
Most modern computer processors have fast and local cache memory in which prefetched data is held until it is required.
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

#### Waterfall for the app

<img width="1163" alt="Screenshot 2021-03-22 at 2 21 12 AM" src="https://user-images.githubusercontent.com/19567362/111920785-f2f8ba80-8ab6-11eb-9d1e-a7a75020c982.png">


#### How Prefetching looks like

Here the about page is loaded faster than the rest of the app, eeven though
the network speed is throttled, as it is being served from prefetch cache.

![Screen-Recording-2021-03-22-at-2](https://user-images.githubusercontent.com/19567362/111920793-f9873200-8ab6-11eb-8b58-ff8ff835dfa6.gif)
