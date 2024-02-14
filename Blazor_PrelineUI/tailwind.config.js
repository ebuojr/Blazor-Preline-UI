/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './**/*.html',
        './**/*.razor',
        './**/*.js',
        // Include the Preline UI components in the content configuration
        'node_modules/preline/dist/*.js'
    ],
    darkMode: 'class',
    plugins: [
        require('@tailwindcss/forms'),
        require('preline/plugin')
    ],
};