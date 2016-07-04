var path = require('path');
var webpack = require('webpack');
//单独打包css文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var common ={
	css:'css/common.min.css',
	js:'js/common.min.js'
}
module.exports = {
 //入口文件
  entry: {
  	app:'./static/src/main.js',
  	vendor:['vue']
  },
  //输出
  output: {
    path: path.resolve(__dirname, './static/dist'),
    publicPath: '/static/dist/',
    filename: 'build.min.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    //不检测直接打包
    noParse: [/vue\.min/],

    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'

      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
     },
     {
         test:/\.less$/,
         loader:'style!less!css',
         exclude: /node_modules/
     },
     {
         test:/\.css$/,
         loader:ExtractTextPlugin.extract("style-loader", "css-loader")
     }
    //   {
    //     test: /\.json$/,
    //     loader: 'json'
    //   },
    //   {
    //     test: /\.html$/,
    //     loader: 'vue-html'
    //   },
    //   {
    //     test: /\.(png|jpg|gif|svg)$/,
    //     loader: 'url',
    //     query: {
    //       limit: 10000,
    //       name: '[name].[ext]?[hash]'
    //     }
    //   }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  resolve:{
       //extensions:["",".vue",".js",".css"],
       alias:{
    		vue:'vue/dist/vue.min.js',
    		'vue-router':'vue-router/dist/vue-router.min.js'
       }
  },
  devtool: '#eval-source-map',
  plugins:[
  	new ExtractTextPlugin(common.css),
  	 //公用js文件
    new webpack.optimize.CommonsChunkPlugin('vendor', common.js),
    //全局变量
    new webpack.ProvidePlugin({
        Vue: 'vue'
    }),
  ]
}

if (process.env.NODE_ENV === 'production') {
 //module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    //压缩
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),





    new webpack.optimize.OccurenceOrderPlugin()

  ])
}
