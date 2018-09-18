# react-typescript-app
React/Typescript starter app.

Steps taken to create this starter app:
1) Install typescript globally and link it `npm install -g typescript`, then `npm link typescritpt`
2) Create a directory for app, `md react-starter-app`
3) The `npm init` command creates the package.json file and the scripts section was updated:
   ```
   "scripts": {
      "start": "webpack"
   },
   ```
4) The tsconfig.json file contains the object below. Adding the jsx line, is similar to `tsc-jsx react` command  Webpack will be configured to handle include entry file. Use "es5" for target, if you need it to work in IE.
   ```json
   {
      "compilerOpions": {
         "target": "es6", 
         "jsx": "react",
         "module": "commonjs"
      },
      "exclude": [
         "node_modules"
      ]
   }
   ```
5) Install webpack and the ts-loader plugin, which is the typescript loader for webpack.
   `npm install webpack ts-loader`
6) The webpack.config.js code is explained very well on Ogundipe Samuel's <a href="https://blog.logrocket.com/how-why-a-guide-to-using-typescript-with-react-fffb76c61614">LogRocket</a> site. But as a overview, this file configures the entry file, what output path and filename should be used, extensions to look for and loaders to use for which file extensions (/\.tsx?$/ means all files that end with .ts or .tsx) 
   ```javascript
   var path = require("path");
   var config = {
     entry: ["./app.tsx"],
     output: {
       path: path.resolve(__dirname, "build"),
       filename: "bundle.js"
     },  
     resolve: {
       extensions: [".ts", ".tsx", ".js"]
     },

     module: {
       rules: [
          {
             test: /\.tsx?$/,
             loader: "ts-loader",
             exclude: /node_modules/
         }
       ]
     }     
   };
   
   module.exports = config;
   ```
  7) Install react and react-dom and type definitions for each library. The type definitions are used 
  ```
  npm install react react-dom @types/react @types/react-dom
  ```
  8) Entry .html and .tsx (index.html and app.tsx)
  9) Component files (HeaderComponent.tsx, BodyComponent.tsx, FooterComponent.tsx)
  10) Interface file (IFooter.ts)
  
  
