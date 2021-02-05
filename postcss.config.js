module.exports = {
    plugins: [
        /* tailwindcss: {},
        autoprefixer: {}, */
        /* cssnano: require('cssnano')({
            preset: 'default',
        }), */
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        require('cssnano')({
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
            }],
        })
    ],
}