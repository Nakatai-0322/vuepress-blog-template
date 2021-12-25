const feed_options = {
    canonical_base: 'https://',
};

module.exports = {
    title: '',
    theme: '',

    // サイトの説明
    description: "",

    head: [
        ['link', { rel: 'icon', type: 'image/jpg', href: '' }],
        ['meta', { name: 'og:image', content: '' }],
        ['link', { href: '/css/style.css', rel: 'stylesheet'}]
    ],

    // 言語設定
    locales: {
        '/': {
            lang: 'ja-jp',
        },
    },
    plugins: {
        'vuepress-plugin-rss':{
                base_url: '/',
                site_url: 'https://',
                copyright: '&copy; ',
                filter: (frontmatter) => { return [true|false] },
                count: 20
            },
        "disqus": {
            "shortname":""
        },
        "vuepress-plugin-google-adsense":{
            adClient: "ca-pub-",
            adsTxt:true,
        },
        'sitemap': {
            hostname: 'https://',
            exclude: ["/404.html"],
            dateFormatter: val => {
                return new Date().toISOString()
            }
        },
        '@vuepress/google-analytics': {
            'ga': ' UA-'
        },
    },

    // Theme config
    themeConfig: {
        lang: 'ja-JP',

        // Personal infomation (delete the fields if you don't have / don't want to display)
        personalInfo: {
            nickname: '',
            description: '',
            location: '',
            organization: '',
            email: '',
            avatar: 'https://',
            sns: {
                twitter: {
                    account: '',
                    link: '',
                },
                github: {
                    account: "",
                    link: "",
                }
            },
        },

        // Header Config (Optional)
        header: {
            // ヘッダーの背景画像
            background: {
                url: "",
                useGeo: true,
            },

            showTitle: true,
        },

        footer: {
            poweredBy: true,
            poweredByTheme: true,
            custom: '<a href="https://>免責事項</a> | <a href="https://">プライバシーポリシー</a><br> <a href="https://github.com/">GitHubソース</a><br>&copy;  <br><a href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/CC-BY-SA_icon.svg" width="200"></a> ',
        },

        infoCard: {
            headerBackground: {
                //url: '',

                useGeo: true,
            },
        },

        lastUpdated: true,

        nav: [
            { text: 'ホーム', link: '/', exact: true },
            { text: '全記事リスト', link: '/posts/', exact: false },
        ],

        smoothScroll: true,

        zooming: {
        },

        pagination: {
            perPage: 5,
        },

        defaultPages: {
            home: true,
            posts: true,
        },
        comments: false,
    },
}
