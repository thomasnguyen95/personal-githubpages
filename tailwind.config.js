module.exports = {
    mode: 'jit',
    content: [
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.html',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {},
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
    ],
}