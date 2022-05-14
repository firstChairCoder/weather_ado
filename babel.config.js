module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.android.js',
            '.ios.js'
          ],
          root: ['./'],
          alias: {
            '@assets': './assets',
            '@components': './src/components',
            '@utils': './src/utils',
            '@env': './src/env',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@navigation': './src/navigation',
            '@redux': './src/redux',
            '@context': './src/context'
          },
        },
      ]
    ]
  };
};
