# canvas-drawer

### TypeScript Definition File is included.

`yarn add canvas-drawer`

```typeScript

import Drawer from 'canvas-drawer'

const dr = new Drawer({ width: 285, height: 422 })
dr.drawText('会计师的立方空间是考虑到福晶科技是否将克里斯多夫框架', {
    font: '34px Arial',
    top: 100,
    left: 40,
    color: '#999999',
    maxWidth: 200
})

dr.drawText('2222222', {
    font: '34px Arial',
    top: 130,
    left: 100,
    textAlign: 'right',
    color: '#999999',
    maxWidth: 200
})

dr.drawText('3333333', {
    font: '34px Arial',
    top: 130,
    left: 100,
    textAlign: 'left',
    color: '#999999',
    maxWidth: 200
})

dr.drawImage(
    'https://file.t8tcdn.com/d/flash/2020/03/11/17/20200311171816235041583920479442-512-l-1-1.jpg',
    {
        width: 200,
        height: 200,
        left: 20,
        top: 200
    }
)

dr.main.canvas.style.width = '285px'
dr.main.canvas.style.height = '422px'
document.body.append(dr.main.canvas)

dr.toBase64().then((data) => {
    console.log(data)
})



```
