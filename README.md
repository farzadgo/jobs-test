## Jobs test page

Sample webpage with two routes developed with React and [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Main route/page (*Cloud Jobs*) fetches the data from a [fake server](https://github.com/farzadgo/fake-server) database using [JSON Server](https://github.com/typicode/json-server) package, deployed on Heroku with [this](https://fago-fake-server-app.herokuapp.com/jobs) API endpoint.

Second route/page (*Self Jobs*) is for uploading custom data with the same database structure. It uses [Dexie.js](https://dexie.org/) as a simple wrapper for IndexedDB. This page is applying [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) model partially, making it possible to Create, Read, and Delete the uploaded persistent storage.