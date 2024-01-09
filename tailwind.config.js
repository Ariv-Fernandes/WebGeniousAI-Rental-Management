// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [        "./node_modules/flowbite/**/*.js"
// ],
//   theme: {
//     extend: {},
//   },
//   plugins: [        require('flowbite/plugin')
// ],
// }

/** @type {import('tailwindcss').Config} */
export const content = ["./node_modules/flowbite/**/*.js"];
export const theme = {
  extend: { },
};
export const plugins = [require('flowbite/plugin')];
