https://gist.github.com/rajatk16/6b5fbe709c13dc9968cdd77d97212a15

- Sử dụng nodemon để thực thi script bằng babel-node
- babel-node sử dụng config từ file `/babel.config.js` hoặc `/babel.config.json`


# Project Setup

Create a directory and run the following command.

```sh
npm init 
```

For this tutorial, I will be adding an index.js file to the `src` folder, and this will be our entry point. 
Our file directory should look like this.

```
your-project-folder/
|--src/
  |--index.js
|--package.json
```

# Install Packages

## Nodemon
Nodemon is a tool that helps develop Js/Nodejs based applications by automatically restarting the node application when file changes detected.

```sh
npm install nodemon --save-dev
```

## Babel

Babel is a tool that is used to convert ECMAScript 2015+ code into a backward compatible version of JavaScript 
so that older browsers and environment will be able to understand your code.

Run the following command to install babel:

```sh
npm install @babel/core @babel/cli @babel/preset-env @babel/node @babel/runtime --save-dev
```

Next, we need to tell babel how to transpile our files by creating a `.babelrc` file in the root directory 
and adding the following code to it.

```js
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

If you want to set up a custom alias for directories, specific files, or even other npm modules. Let's take a look to this handy [plugin](https://github.com/tleunen/babel-plugin-module-resolver)

## ESLint + Airbnb + Prettier

These tools will be identifying, reporting and formatting on patterns found in ECMAScript/JavaScript code, 
with the goal of making the code more consistent and avoiding bugs.

Run the following command to install:

```sh
npm install eslint \
            eslint-config-airbnb-base \
            eslint-config-prettier \
            eslint-plugin-import \
            eslint-plugin-prettier \
            prettier --save-dev
```

### Prettier Configuration

Create the file named `.prettierrc` in the root directory and adding the following code to it.

```js
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true
}
```

If you'd like a JSON schema to validate your configuration, one is available here: [http://json.schemastore.org/prettierrc](http://json.schemastore.org/prettierrc).

### Eslint Configuration

Create the file named `.eslintrc.json` in the root directory and add the following code to it.

```sh
{
  "extends": ["airbnb-base", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }  
}
```

## Scripts

Open up `package.json` then add the following code to the scripts section

```js
{
  ...
  "scripts": {
    "build": "babel ./src --out-dir ./build",
    "start": "nodemon --exec babel-node src/index.js",
    "lint": "eslint ."
  },
  ...
}
```

## Integrated with VSCode

Install [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extensions

Configure VS Code

```js
{
  ..
  "editor.formatOnSave": true,
  ..
}
```

.babelrc
```
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

.eslintignore
```
/node_modules/**
/build
```

.eslintrc.json
```
{
  "extends": ["airbnb-base", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

.prettierrc
```
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true
}
```

package.json
```
{
  "name": "your-project",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "scripts": {
    "start": "nodemon --exec babel-node src/index.js",
    "build": "babel ./src --out-dir ./build",
    "lint": "eslint ."
  },
  "dependencies": {},
  "devDependencies": {
    "@babel/cli": "7.4.3",
    "@babel/core": "7.4.3",
    "@babel/node": "7.2.2",
    "@babel/preset-env": "7.4.3",
    "@babel/runtime": "^7.4.3",
    "babel-eslint": "^10.0.1",
    "babel-plugin-module-resolver": "^3.2.0",
    "eslint": "^5.16.0",
    "eslint-config-airbnb-base": "^13.1.0",
    "eslint-config-prettier": "^4.1.0",
    "eslint-plugin-import": "^2.17.2",
    "eslint-plugin-prettier": "^3.0.1",
    "nodemon": "1.18.4",
    "prettier": "^1.17.0"
  },
  "keywords": []
}
```

// https://raulmelo.dev/blog/module-resolution-or-import-alias-the-final-guide
