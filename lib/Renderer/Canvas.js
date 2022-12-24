/***********************************************************************
 *
 * 　描画領域を管理するクラス.
 *
***********************************************************************/

class Canvas
{
    static #canvas; // Canvas: 生の HTML canvas.


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
        return this.#canvas.getContext('2d');
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
        this.#canvas = document.getElementById('canvas');
        canvas.setAttribute('width', canvasWidth);
        canvas.setAttribute('height', canvasHeight);
    }
}