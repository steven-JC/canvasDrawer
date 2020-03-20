export default class ImageTextDrawer {
    public main: ICanvas

    private options: ImageTextDrawerOptions = {
        width: 100,
        height: 100
    }
    constructor(options: ImageTextDrawerOptions) {
        Object.assign(this.options, options)
        this.options.width = 2 * this.options.width
        this.options.height = 2 * this.options.height
        this.main = this.mkCanvas(this.options.width, this.options.height)
    }
    public async drawImage(url: string, style: ImageStyle) {
        console.log(url)
        const image = await this.loadImageByUrl(url)
        this.main.context.drawImage(
            image,
            0,
            0,
            image.width,
            image.height,
            style.left * 2,
            style.top * 2,
            style.width * 2,
            style.height * 2
        )
    }
    public async drawText(text: string, style: TextStyle) {
        console.log(text, style)
        const ctx = this.main.context
        ctx.font = style.font
        ctx.textAlign = style.textAlign || 'left'
        ctx.textBaseline = style.baseLine || 'bottom'
        ctx.fillStyle = style.color || '#333333'
        this.main.context.fillText(
            this.getTextByMaxWidth(text, style.font, style.maxWidth * 2),
            style.left * 2,
            style.top * 2
        )
    }
    public async toBase64(canvas?: HTMLCanvasElement) {
        return (canvas || this.main.canvas).toDataURL('image/jpeg')
    }

    protected mkCanvas(width, height): ICanvas {
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const context = canvas.getContext('2d')
        return {
            canvas,
            context
        }
    }

    protected getTextWidth(text) {
        return this.main.context.measureText(text).width
    }

    protected getTextByMaxWidth(text: string, font: string, maxWidth: number) {
        let target = text
        const ctx = this.main.context
        ctx.font = font
        while (this.getTextWidth(target) > maxWidth) {
            target = target.substr(0, target.length - 1)
        }
        return target + (target.length < text.length ? '...' : '')
    }

    protected loadImageByUrl(url): Promise<HTMLImageElement> {
        const image: HTMLImageElement = new Image()
        image.crossOrigin = ''
        image.src = url
        return new Promise((resolve, reject) => {
            image.onload = function() {
                resolve(image)
            }
        })
    }
}

declare interface ImageTextDrawerOptions {
    width: number
    height: number
}

declare interface TextStyle {
    font: string
    color?: string
    textAlign?: 'left' | 'right' | 'center'
    left: number
    top: number
    maxWidth?: number
    baseLine?: 'top' | 'bottom' | 'middle'
}

declare interface ImageStyle {
    width: number
    height: number
    left: number
    top: number
}

declare interface ICanvas {
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
}
