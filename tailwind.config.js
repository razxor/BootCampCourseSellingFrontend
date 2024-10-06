// tailwind.config.js
module.exports = {
  content: [
    './index.html',        // Include the index.html file
    './src/**/*.{js,jsx}', // Include all React component files
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')], // Add DaisyUI as a plugin
};
