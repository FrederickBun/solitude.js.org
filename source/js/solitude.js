const powers = [
    {
        name: 'Sh1n3zZ',
        link: 'https://akihitomi.com/',
        avatar: 'https://s3.qjqq.cn/47/662f17f73353c.webp!color',
        desc: '一个小小秘密基地ヾ(^▽^*)))'
    },
    {
        name: '青秸气球',
        link: 'https://blog.qjqq.cn',
        avatar: 'https://s3.qjqq.cn/47/660a82a602ef7.webp!color',
        desc: '一个喜欢折腾的前端开发者'
    },
    {
        name: '虎了吧唧',
        link: 'https://blog.hulebaji.me',
        avatar: 'https://s3.qjqq.cn/47/660a829094fa7.webp!color',
        desc: '研墨成浆，提笔思量'
    },
    {
        name: 'btwoa',
        link: 'https://blog.btwoa.com/',
        avatar: 'https://s3.qjqq.cn/47/660a820d2c30a.webp!color',
        desc: '一个技术宅。'
    },
    {
        name: 'Coutrue',
        link: 'https://www.coutures.top/',
        avatar: 'https://s3.qjqq.cn/47/662f107412c8f.webp!color',
        desc: '不忘初心，方得始终'
    },
    {
        name: '理随',
        link: 'https://blog.lisui.top/',
        avatar: 'https://s3.qjqq.cn/47/660a831f37c53.webp!color',
        desc: '生而无畏，站至终章。'
    }
]

function randomAfadian() {
    let items = document.querySelector('.power-item-body')
    items && (items.innerHTML = powers.map(power => `<div class="power-item-link"><a href="${power.link}" target="_blank" title="${power.name}">${power.name}</a></div>`).join(''))
    const img = document.querySelector('#power-star-image')
    const title = document.querySelector('#power-star-title')
    const desc = document.querySelector('#power-star-desc')
    const link = document.querySelector('#power-star')
    if (img) {
        random = powers[Math.floor(Math.random() * powers.length)]
        img.style.backgroundImage = `url(${random.avatar})`
        title.textContent = random.name
        desc.textContent = random.desc
        link.href = random.link
    }
}

document.addEventListener('DOMContentLoaded', randomAfadian)
document.addEventListener('pjax:complete', randomAfadian)
