const plugin = require('tailwindcss/plugin');
module.exports = plugin(function ({ addComponents, prefix }) {
    const newBtn = {
        [`.h1 > ${prefix('.btn')}`]: {
            color: 'blue'
        }
    };
    addComponents(newBtn, {
        respectPrefix: false,
        respectImportant: false,
    });
});
