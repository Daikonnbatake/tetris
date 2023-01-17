/***********************************************************************
 *
 * 　描画領域を管理するクラス.
 *
***********************************************************************/

class Canvas
{
    static #canvas;     // Canvas: 生の HTML canvas.
    static #backBuffer; // Canvas: 生の HTML canvas(バックバッファ).


    /*-----------------------------------------------------------------+
    *
    * 説明: Canvas のコンテキストを取得する.
    *
    * 戻り値:
    *   CanvasRrenderingContext2D:  Canvas のコンテキスト.
    *
    +-----------------------------------------------------------------*/
    static Context()
    {
        return this.#backBuffer.getContext('2d');
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: Canvas の初期化.
    *
    * 引数:
    *   number  canvasWidth:  描画領域の横幅.
    *   number  canvasHeight: 描画領域の高さ.
    *
    +-----------------------------------------------------------------*/
    static Start(canvasWidth, canvasHeight)
    {
        this.#canvas     = document.getElementById('canvas-a');
        this.#backBuffer = document.getElementById('canvas-b');
        this.#canvas.setAttribute('width', canvasWidth);
        this.#canvas.setAttribute('height', canvasHeight);
        this.#backBuffer.setAttribute('width', canvasWidth);
        this.#backBuffer.setAttribute('height', canvasHeight);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: Canvas に描画されている物をすべて消す.
    *
    +-----------------------------------------------------------------*/
    static Clear()
    {
        const ctx    = this.#backBuffer.getContext('2d');
        const width  = this.#backBuffer.width;
        const height = this.#backBuffer.height;
        ctx.clearRect(0, 0, width, height);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: バッファを反転する.
    *
    +-----------------------------------------------------------------*/
    static FlipBuffer()
    {
        const tmp = this.#backBuffer;
        this.#backBuffer = this.#canvas;
        this.#canvas = tmp;
        this.#backBuffer.style.display = 'none';
        this.#canvas.style.display = 'block';
    }
}