const path = require('path')
const webpack = require('webpack')
const pathResolve = (file = '') => path.resolve(__dirname,file) 
module.exports = {
    entry : pathResolve('./core/app.ts'),
    output : {
        path:pathResolve('./build/'),
        filename : 'bundle.js'
    },
    devtool: 'source-map',
    module : {
        rules: [
            {
                test : /\.ts$/,
                use : 'ts-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
              {
                test: /\.(png|jpe?g|gif|jpg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    },
   
    
    resolve : {
        extensions : ['.ts','.js'],
        alias :
            {
                'css' : pathResolve('src/css'),
                '@' : pathResolve(''),
                'src' : pathResolve('src'),
            }
    
    },
}