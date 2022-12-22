/***********************************************************************
 *
 * 　スプライトを表すクラス.
 *
***********************************************************************/

class Sprite
{
    #bitmap;     // Image:      生の画像.
    #tileSize;   // Size:       マップチップのサイズ.
    #tileOffset; // Point:      マップチップ採取時のオフセット.
    #transform;  // Transform:  2次元の変形.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   string  imagePath:   画像のパス.
    *   Size    tileSize:    マップチップのサイズ.
    *   Point   tileOffset:  マップチップ採取時のオフセット.
    *
    +-----------------------------------------------------------------*/
    constructor(imagePath, tileSize, tileOffset)
    {
        this.#tileSize   = tileSize;
        this.#tileOffset = tileOffset;
        this.#transform  = Transform.Default();
        this.#Load(imagePath);
    }

    async #Load(imagePath)
    {
        this.#bitmap = new Image();

        let promise  = new Promise(resolve =>
        {
            this.#bitmap.onload = ()=> { resolve(this.#bitmap); }
            this.#bitmap.src = imagePath;
        });

        await promise;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: この画像を描画する.
    *
    * 引数:
    *   CanvasRenderingContext2D renderTarget: 描画対象.
    *
    +-----------------------------------------------------------------*/
    Draw(renderTarget)
    {
        renderTarget.drawImage(this.#bitmap, 0, 0);
    }
}