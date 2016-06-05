module.exports = {
  entry: './client/index.jsx',
  output: {
    path: 'client/dist',
    publicPath: 'client/dist',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    port: 1337,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
