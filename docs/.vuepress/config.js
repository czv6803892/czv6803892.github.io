/*
 * @Author: Billy-S
 * @Description: 
 * @Date: 2020-07-23 21:43:41
 * @LastEditTime: 2020-10-09 18:06:58
 */
const { description } = require('../../package')

module.exports = {
 
  title: "sxq's blog",
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '技术相关',
        link: '/guide/',
      },
      {
        text: '读书笔记',
        link: '/readingNotes/'
      },
      {
        text: '生活杂谈',
        link: '/talk/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/czv6803892/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '目录',
          collapsable: false,
          children: [
            '',
            'Notice7',
            'Notice8',
            'Notice9',
            'Notice10',
            'Storage',
          ]
        }
      ],
      '/readingNotes/':[
        {
          title: '目录',
          collapsable: false,
          children: [
            '',
            'richDad',
            'dogMoney',
            'dogMoney2',
            'codeComplete',
            'ecnomicMicro',
          ]
        }
      ],
      '/talk/':[
        {
          title: '目录',
          collapsable: false,
          children:[
            '',
            'BussinessFlow',
            'newCodeRecord',
            'Month8',
            'Month9',
          ]
        }
      ]
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
