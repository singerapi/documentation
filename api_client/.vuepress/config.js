module.exports = {
    base: "/singerapi/",
    title: "I Am a Singer API",
    description: "This is a resource API demo site for Chinese TV Series I Am a Singer",
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        navbar: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Documentation', link: '/documentation/' },
            { text: 'About', link: '/about/' },
        ],
        sidebar: 'auto',
    },
}
