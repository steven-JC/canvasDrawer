export default class ImageTextDrawer {
    main: ICanvas;
    private options;
    constructor(options: ImageTextDrawerOptions);
    drawImage(url: string, style: ImageStyle): Promise<void>;
    drawText(text: string, style: TextStyle): Promise<void>;
    toBase64(canvas?: HTMLCanvasElement): string;
    destroy(): void;
    protected mkCanvas(width: any, height: any): ICanvas;
    protected getTextWidth(text: any): number;
    protected getTextByMaxWidth(text: string, font: string, maxWidth: number): string;
    protected loadImageByUrl(url: any): Promise<HTMLImageElement>;
}
declare interface ImageTextDrawerOptions {
    width: number;
    height: number;
}
declare interface TextStyle {
    font: string;
    color?: string;
    textAlign?: 'left' | 'right' | 'center';
    left: number;
    top: number;
    maxWidth?: number;
    baseLine?: 'top' | 'bottom' | 'middle';
}
declare interface ImageStyle {
    width: number;
    height: number;
    left: number;
    top: number;
}
declare interface ICanvas {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
}
export {};
