This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5500](http://localhost:5500) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:5500/api/hello](http://localhost:5500/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Folder Usage Guide

* All page will be in `pages` folder
* Each page will have it's content stored in a folder named `modules`, So 1 file of page will have 1 file of module
* Each module will have many components, stored in folder named `components`
* Components in the `components` will be split into global components and module components
  * Global components will be used in many modules _(like buttons, inputs, etc)_
  * Module component will be used in 1 module, Folder name will match/follow pages name

