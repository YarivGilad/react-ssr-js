const path = require('path');

module.exports = {
  mode:'production',
  stats: {
      colors: true
  },
  // devtool: 'source-map',
  entry: './src/views/client.render.jsx', 
  target: 'web',         
  output: {                 
    path: path.resolve(__dirname, 'dist'),          
    filename: 'app.bundle.js', 
  }, 
  module: {
    rules: [
      { 
        test:/\.(js|jsx)$/,
        exclude: /node_modules/ ,
        use: { loader: 'babel-loader'}
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};