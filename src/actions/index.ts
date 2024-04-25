// 获取导航数据
export async function getNavApi() {
  return [
    {
      id: 1,
      title: '热门推荐',
      icon: '/assets/icons/home.svg',
      children: [
        {
          id: 2,
          title: 'Nuxt',
          icon: '/assets/images/nuxt-icon.png',
          desc: 'Nuxt is an intuitive and extendable way to create type-safe, performant and production-grade full-stack web apps and websites with Vue 3.',
          href: 'https://www.baidu.com'
        },
        {
          id: 3,
          title: 'Prisma',
          icon: '/assets/images/prisma-icon.png',
          desc: 'Next-generation Node.js and TypeScript ORM',
          href: 'https://www.baidu.com'
        },
        {
          id: 4,
          title: 'Nextjs',
          icon: '/assets/images/nextjs-icon.png',
          desc: 'Next.js by Vercel is the full-stack React framework for the web',
          href: 'https://www.baidu.com'
        },
        {
          id: 5,
          title: 'Nest.js',
          icon: '/assets/images/nestjs-icon.svg',
          desc: 'NA progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
          href: 'https://www.baidu.com'
        },
        {
          id: 6,
          title: 'Koa',
          icon: '/assets/images/koa-logo.png',
          desc: 'Next generation web framework for node.js',
          href: 'https://www.baidu.com'
        },
        {
          id: 7,
          title: 'Express',
          icon: '/assets/images/expressjs_logo.png',
          desc: 'Fast, unopinionated, minimalist web framework for Node.js',
          href: 'https://www.baidu.com'
        }
      ]
    },
    {
      id: 8,
      title: '高清图库',
      icon: '/assets/icons/image.svg',
      children: [
        {
          id: 9,
          title: 'Type Challenge',
          icon: '/assets/images/type-challenge-icon.png',
          desc: 'This project is aimed at helping you better understand how the type system works, writing your own utilities, or just having fun with the challenges',
          href: 'https://www.baidu.com'
        },
        {
          id: 10,
          title: 'Vue.js Challenge',
          icon: '/assets/images/vuejs-challenge-icon.png',
          desc: 'Helping you better understand Vue.js, writing your own utilities, or just having fun with the challenges',
          href: 'https://www.baidu.com'
        },
        {
          id: 11,
          title: 'Code Top',
          icon: '/assets/images/leetcode-icon.png',
          desc: 'CodeTop用于汇总互联网大厂面试的高频考题🔥帮助面试者更有针对性地准备面试',
          href: 'https://www.baidu.com'
        },
        {
          id: 12,
          title: 'BigFrontEnd',
          icon: '/assets/images/pencil-icon.png',
          desc: 'BFE.dev is the platform to practice your Front-End development skills,prepare your Front-End job interview and communicate with developers around the globe, like LeetCode for Front-End.',
          href: 'https://www.baidu.com'
        }
      ]
    },
    {
      id: 13,
      title: '设计教程',
      icon: '/assets/icons/stars.svg',
      children: [
        {
          id: 14,
          title: 'UI Tips',
          icon: '/assets/images/uitips-icon.svg',
          desc: 'Learn how to design better user interfaces and make your users happier with these simple UI tips. All the tips are tested in real-life products',
          href: 'https://www.baidu.com'
        },
        {
          id: 15,
          title: 'Godly',
          icon: '/assets/images/godlywebsite-icon.png',
          desc: 'Godly is a curation of the best web design inspiration, every day. Browse the best e-commerce websites, portfolio websites, animation websites and more',
          href: 'https://www.baidu.com'
        },
        {
          id: 16,
          title: 'UI Notes',
          icon: '/assets/images/uinotes-icon.png',
          desc: '收集了国内109 个App 23208 张截图，用于探索UI 设计趋势、做竞品分析',
          href: 'https://www.baidu.com'
        },
        {
          id: 17,
          title: 'Iconfont',
          icon: '/assets/images/iconfont-icon.svg',
          desc: 'A professional and powerful icon library',
          href: 'https://www.baidu.com'
        },
        {
          id: 18,
          title: 'ReactIcons',
          icon: '/assets/images/react-icons.svg',
          desc: 'svg react icons of popular icon packs',
          href: 'https://www.baidu.com'
        },
        {
          id: 19,
          title: 'shadcn/ui',
          icon: '/assets/images/shadcnui-icon.png',
          desc: 'Re-usable components built using Radix UI and Tailwind CSS',
          href: 'https://www.baidu.com'
        },
        {
          id: 20,
          title: 'DaisyUI',
          icon: '/assets/images/daisyui-icon.png',
          desc: 'daisyUI adds component class names to Tailwind CSS so you can make beautiful websites faster than ever',
          href: 'https://www.baidu.com'
        },
        {
          id: 21,
          title: 'Iconify',
          icon: '/assets/images/iconify-icon.png',
          desc: 'All popular icon sets, one framework.  Over 150,000 open source vector icons',
          href: 'https://www.baidu.com'
        }
      ]
    },
    {
      id: 22,
      title: '设计教程22',
      icon: '/assets/icons/stars.svg',
      children: []
    },
    {
      id: 23,
      title: '设计教程23',
      icon: '/assets/icons/stars.svg',
      children: []
    },
    {
      id: 24,
      title: '设计教程24',
      icon: '/assets/icons/stars.svg',
      children: []
    },
    {
      id: 25,
      title: '设计教程25',
      icon: '/assets/icons/stars.svg',
      children: []
    },
    {
      id: 26,
      title: '设计教程26',
      icon: '/assets/icons/stars.svg',
      children: []
    }
  ]
}

// 获取收买寄数据
export async function getTopNavApi() {
  return [
    {
      id: 'shou',
      type: '收',
      children: [
        {
          id: 'biying',
          title: '必应搜索',
          href: 'https://www.baidu.com',
          icon: ''
        },
        {
          id: 'douyin',
          title: '抖音',
          href: 'https://www.baidu.com',
          icon: ''
        },
        {
          id: 'jd',
          title: '京东',
          href: 'https://www.baidu.com',
          icon: ''
        },
        {
          id: 'aqy',
          title: '爱奇艺',
          href: 'https://www.baidu.com',
          icon: ''
        },
        {
          id: 'wph',
          title: '唯品会',
          href: 'https://www.baidu.com',
          icon: ''
        },
        {
          id: 'mhxy',
          title: '梦幻西游',
          href: 'https://www.baidu.com',
          icon: ''
        },
        {
          id: 'dixiacheng',
          title: '地下城',
          href: 'https://www.baidu.com',
          icon: ''
        },
        {
          id: 'yingxiong',
          title: '英雄联盟',
          href: 'https://www.baidu.com',
          icon: ''
        }
      ]
    },
    {
      id: 'mai',
      type: '买',
      children: [
        {
          id: 'xclx',
          title: '携程旅行',
          href: 'https://www.baidu.com',
          icon: ''
        },
        {
          id: 'tm',
          title: '天猫',
          href: 'https://www.baidu.com',
          icon: ''
        },
        {
          id: 'bosszp',
          title: 'boss直聘',
          href: 'https://www.baidu.com',
          icon: ''
        },
        {
          id: 'tbw',
          title: '淘宝网',
          href: 'https://www.baidu.com',
          icon: ''
        },
        {
          id: '9377yy',
          title: '9377页游',
          href: 'https://www.baidu.com',
          icon: ''
        },
        {
          id: 'txsp',
          title: '腾讯视频',
          href: 'https://www.baidu.com',
          icon: ''
        }
      ]
    },
    {
      id: 'ji',
      type: '寄',
      children: [
        {
          id: '58tc',
          title: '58同城',
          href: 'https://www.baidu.com',
          icon: ''
        },
        {
          id: '37yx',
          title: '37游戏',
          href: 'https://www.baidu.com',
          icon: ''
        },
        {
          id: '51yy',
          title: '51夜游',
          href: 'https://www.baidu.com',
          icon: ''
        },
        {
          id: 'atb',
          title: '爱淘宝',
          href: 'https://www.baidu.com',
          icon: ''
        },
        {
          id: 'tmcs',
          title: '天猫超市',
          href: 'https://www.baidu.com',
          icon: ''
        },
        {
          id: 'msnzg',
          title: 'MSN中国',
          href: 'https://www.baidu.com',
          icon: ''
        }
      ]
    }
  ]
}

// 获取新闻数据
export async function getNewsApi() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
  return [
    {
      id: '111',
      title: '神十八发射取得圆满成功神十八发射取得圆满成功神十八发射取得圆满成功'
    },
    {
      id: '222',
      title: '职高女孩逆袭成双一流大学研究生'
    },
    {
      id: '333',
      title: '解码首季经济成绩单'
    },
    {
      id: '444',
      title: '老人被宠物狗撕咬 手中握刀不舍得砍'
    },
    {
      id: '555',
      title: '居民家中储存10吨53度白酒被罚'
    },
    {
      id: '666',
      title: '孙子举报爷爷种罂粟？民警：虞美人'
    },
    {
      id: '777',
      title: '奶凶奶凶的交警姐姐找到了'
    },
    {
      id: '888',
      title: '深圳部分区域将取消限购不实'
    },
    {
      id: '999',
      title: '夫妻养2.8万只鸡 为省人工自己捡蛋',
    }
  ]
}
