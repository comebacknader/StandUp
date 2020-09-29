module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ["./src"],
        alias: {
          assets: './assets',
          images: './images',
          components: './components',
          screens: './screens',
        },
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
