/***********************************************************************
 *
 * 　スプライトを表すクラス.
 *
***********************************************************************/

class Sprite
{
    #bitmap;     // Image:      生の画像.
    #split;      // bool:       分割済かどうか.
    #tileSize;   // Size:       マップチップのピクセル単位のサイズ.
    #tileCount;  // Size:       マップチップ単位の縦横のサイズ.
    #tileOffset; // Point:      マップチップ採取時のオフセット.
    #transform;  // Transform:  2次元の変形.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   Image   cachedImage:  キャッシュ済み画像.
    *
    +-----------------------------------------------------------------*/
    constructor(cachedImage)
    {
        this.#bitmap     = cachedImage;
        this.#split      = false;
        this.#tileSize   = Size.Default();
        this.#tileCount  = Size.Default();
        this.#tileOffset = Point.Default();
        this.#transform  = Transform.Default();
    }


    GetTransform()
    {
        return this.#transform;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 画像を分割する.
    *
    * 引数:
    *   Size   tileSize:    分割サイズ(1ピースのサイズ).
    *   Point  tileOffset:  分割を開始する位置のオフセット(任意).
    *
    +-----------------------------------------------------------------*/
    Split(tileSize, tileOffset = Point.Default())
    {
        let imageWidth  = this.#bitmap.width;
        let imageHeight = this.#bitmap.height;
        let cropWidth   = tileSize.GetWidth();
        let cropHeight  = tileSize.GetHeight();
        let cropOffsetX = tileOffset.GetX();
        let cropOffsetY = tileOffset.GetY();
        let tileCountX  = ToZero((imageWidth  - cropOffsetX) / cropWidth);
        let tileCountY  = ToZero((imageHeight - cropOffsetY) / cropHeight);

        this.#split      = true;
        this.#tileSize   = tileSize;
        this.#tileOffset = tileOffset;
        this.#tileCount  = new Size(
            Math.floor(tileCountX),
            Math.floor(tileCountY)
        );
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 画像の分割を解除する.
    *
    +-----------------------------------------------------------------*/
    Join()
    {
        this.#split = false;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: この画像を描画する.
    *
    * 引数:
    *   CanvasRenderingContext2D  renderTarget:  描画対象.
    *   number                    tileIndex:     マップチップ番号(任意).
    *
    +-----------------------------------------------------------------*/
    Draw(renderTarget, tileIndex = 0)
    {
        let position = this.#transform.GetPosition();
        let scale    = this.#transform.GetScale();
        let pivot    = this.#transform.GetPivot();

        // 画像の切り抜きサイズを取得
        let cropWidth  = this.#tileSize.GetWidth();
        let cropHeight = this.#tileSize.GetHeight();

        // 画像の切り抜き位置を計算
        let cropTileX = ToZero(tileIndex % this.#tileCount.GetWidth());
        let cropTileY = ToZero(tileIndex / this.#tileCount.GetWidth());
        let cropAbsX  = cropWidth  * cropTileX;
        let cropAbsY  = cropHeight * Math.floor(cropTileY);
        let cropPosX  = this.#tileOffset.GetX() + cropAbsX;
        let cropPosY  = this.#tileOffset.GetY() + cropAbsY;

        // 描画範囲を計算
        let drawWidth  = cropWidth  * scale.GetX();
        let drawHeight = cropHeight * scale.GetY();

        // 画像の中心を計算
        let originX = Math.floor(pivot.GetX() * drawWidth);
        let originY = Math.floor(pivot.GetY() * drawHeight);

        // 描画位置を計算
        let drawX = position.GetX() - originX;
        let drawY = position.GetY() - originY;

        renderTarget.drawImage(
            this.#bitmap,
            cropPosX,
            cropPosY,
            cropWidth,
            cropHeight,
            drawX,
            drawY,
            drawWidth,
            drawHeight
        );
    }
}