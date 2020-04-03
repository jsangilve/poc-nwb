const tailwindcss = require("tailwindcss");
module.exports = {
  type: "react-app",
  webpack: {
    // rules: {
    //   postcss: {
    //     plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")]
    //   }
    // }
    extra: {
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              // 'style-loader',
              // 'css-loader',
              // ...
              {
                loader: "postcss-loader",
                options: {
                  ident: "postcss",
                  plugins: [
                    require("tailwindcss"),
                    require("autoprefixer")
                  ]
                }
              }
            ]
          }
        ]
      }
    }
  }
};
