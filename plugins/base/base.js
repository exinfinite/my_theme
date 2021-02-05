const plugin = require('tailwindcss/plugin');
module.exports = plugin(function ({ addBase, theme }) {
    addBase({
        'html, body': { fontFamily: `"Helvetica", "Arial", "Microsoft YaHei", "Microsoft JhengHei", "PMingLiU", "monospace", "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", "sans-serif"` }
    })
});
