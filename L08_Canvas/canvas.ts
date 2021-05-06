namespace FirstCanvas {
    document.addEventListener("DOMContentLoaded", handleLoad);
    let crc: CanvasRenderingContext2D;

    function handleLoad(): void {
        console.log("I am working");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc = <CanvasRenderingContext2D>canvas.getContext("2d");

        fillCanvas("#aaa");
    }//close HandleLoad

    function fillCanvas(_color: string): void {
        crc.fillStyle = _color;
        crc.fillRect(0, 0, crc.canvas.width, crc.canvas.height);
    }
}//close Namespace