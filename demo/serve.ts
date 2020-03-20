import Drawer from '../src'
// const Component: Comp = require('../dist/index')

const options = {
    title: '麒麟花园三期麒麟花园三期花园三期花园三期麒…',
    planStructure: '3室1厅',
    area: '100m²',
    style: '现代简约',
    goodsNum: '5件',
    valuation: '3000',
    preferentialPrice: '2000',
    image:
        'https://file.t8tcdn.com/d/flash/2020/03/11/17/20200311171816235041583920479442-512-l-1-1.jpg'
}

async function drawShareImage(options) {
    const line2 = `${options.planStructure} | ${options.area} | ${options.style}`
    const dr = new Drawer({ width: 285, height: 422 })
    await dr.drawText(options.title, {
        font: '34px Arial',
        top: 20,
        baseLine: 'top',
        left: 23,
        color: '#333333',
        maxWidth: 230
    })

    await dr.drawText(line2, {
        font: '26px Arial',
        top: 50,
        baseLine: 'top',
        left: 23,
        color: '#999999',
        maxWidth: 230
    })

    await dr.drawImage(options.image, {
        width: 241,
        height: 241,
        left: 20,
        top: 83
    })

    await dr.drawText('商品清单：', {
        font: '26px Arial',
        top: 363,
        baseLine: 'bottom',
        left: 23,
        color: '#333',
        maxWidth: 230
    })

    await dr.drawText('￥' + options.valuation, {
        font: '36px Arial',
        top: 363,
        baseLine: 'bottom',
        left: 80,
        color: '#333',
        maxWidth: 230
    })

    await dr.drawText(`${options.goodsNum}商品优惠价:￥${options.valuation}`, {
        font: '26px Arial',
        top: 390,
        baseLine: 'bottom',
        left: 23,
        color: '#333',
        maxWidth: 230
    })

    const res = dr.toBase64()
    ;(document.getElementById('img') as any).src = res

    return res
}

drawShareImage(options)
