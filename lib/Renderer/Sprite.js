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
    *   Image   cachedImage:  キャッシュ済み画像.
    *   Size    tileSize:     マップチップのサイズ.
    *   Point   tileOffset:   マップチップ採取時のオフセット.
    *
    +-----------------------------------------------------------------*/
    constructor(cachedImage, tileSize, tileOffset)
    {
        this.#bitmap     = cachedImage;
        this.#tileSize   = tileSize;
        this.#tileOffset = tileOffset;
        this.#transform  = Transform.Default();
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