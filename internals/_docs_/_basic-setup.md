# BASIC SETUP

- nodemon để hotreload server với executer bằng babel-node
- babel-node thay thế cho node-cli
- eslint chạy độc lập riêng để check lỗi

## BASE

- `.editorconfig` Cấu hình setting chung cho IDE, Editor
- `.gitattributes` Mimetype mapping cho Git
- `.nvmrc` Cấu hình version NodeJS ưu tiên được cài qua Node Version Manager `nvm`

## PRETTIER: Format source code

- `.prettierignore`: định nghĩa những file không áp dụng format
- `.prettierrc`: cấu hình format

## STYLELINT: Kiểm tra cú pháp CSS

- `.stylelintrc`: LINTER cho file CSS

## ESLINTER: Kiểm tra lỗi cú pháp JS

- `.eslintrc.js` Cấu hình ESLint

## BABEL: Chuyển đổi mã

- `.babel.config.js` Cấu hình babel chính

```
yarn add -D @babel/core @babel/cli @babel/preset-env @babel/polyfill
```

- @babel/core - gói cơ bản cần thiết Babel.
- @babel/cli - giúp chạy babel bằng CLI
- @babel/node - thay thế cho Node CLI, để có thể kết hợp chung với babel (chỉ nên dùng lúc dev)
- @babel/preset-env - là package cần thiết, giúp chọn Javascript version tốt nhất mà không cần đi sâu vào chi tiết cú pháp nào cần chuyển đổi (and optionally, browser polyfills) tương ứng với mô trường.
- @babel/plugin-transform-runtime - giúp tái sử dụng các helper của babel để giúp code build ra ít hơn.

@babel/runtime - a package to be installed production dependency to avoid duplication across your compiled output.

## NODEMON

https://github.com/remy/nodemon

```
nodemon ./server.js localhost 8080
```
