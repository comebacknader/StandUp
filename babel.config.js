module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
        },
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
