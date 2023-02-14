/***********************************************************************
 *
 *   テトリスのブロックを描画するクラス.
 *
***********************************************************************/

class BlockDrawer
{
    #sprite;      // Sprite: スプライト.
    #tileSize;    // Size:   ブロック1個のサイズ.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   number tileWidth:  ブロックの横幅.
    *   number tileHeight: ブロックの高さ.
    *   string image:      画像のパスまたはエイリアス.
    *
    +-----------------------------------------------------------------*/
    constructor(tileWidth, tileHeight, image)
    {
        this.#tileSize = new Size(tileWidth, tileHeight);
        this.#sprite   = new Sprite(image);
        this.#sprite.Split(this.#tileSize);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: ブロックを描画する.
    *
    * 引数:
    *   number tileIndex: ブロックの番号.
    *   number x:         描画する位置のX座標.
    *   number y:         描画する位置のY座標.
    *   number offsetX:   描画する位置のX方向のオフセット(任意).
    *   number offsetY:   描画する位置のY方向のオフセット(任意).
    *
    +-----------------------------------------------------------------*/
    Draw(tileIndex, x, y, offsetX = 0, offsetY = 0)
    {
        const drawX = (x * this.#tileSize.GetWidth())  + offsetX;
        const drawY = (y * this.#tileSize.GetHeight()) + offsetY;
        this.#sprite.GetTransform().SetPosition(drawX, drawY);
        this.#sprite.Draw(Canvas.Context(), tileIndex);
    }
}