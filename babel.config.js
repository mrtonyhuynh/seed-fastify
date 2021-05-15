/*
|--------------------------------------------------------------------------
| PREPARING
|--------------------------------------------------------------------------
|
| yarn add -D @babel/core @babel/cli @babel/node @babel/preset-env @babel/runtime
| # Babel Node CLI thay thế cho Node CLI
*/

module.exports = {
  presets: [
    [
      // https://babeljs.io/docs/en/babel-preset-env
      '@babel/preset-env',
      {
        // Nếu không có targets: sẽ chuyển toàn bộ source sang ES5
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins:[
    [
      "babel-plugin-module-resolver",
      {
        "root": [
          "./src"
        ],
        "alias": {
          // Add your aliases here
          "controllers": "./src/controllers",
          "routes": "./src/routes"
        }
      }
    ]
  ]
};
