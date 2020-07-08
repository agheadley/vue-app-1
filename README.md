# Mongo db app

*Cloned from https://github.com/agheadley/vue-parcel-electron-bp*

*agheadley@gmail.com*


## Creating

```
npm install --save-dev electron
npm install --save vue
npm install --save vue-router
npm install --save parcel-bundler

npm install --save mongodb  // mongo/atlas access - is it required?



```


## Running

*dev*
```
npm run dev       // localhost:1234
npm run electron  // main.js: win.loadURL('http://localhost:1234')

```

*build*
```
npm run build       // dist/index.html change css/js paths to './' instead of '/'
npm run electron  // main.js: win.loadFile('./dist/index.html')

```





