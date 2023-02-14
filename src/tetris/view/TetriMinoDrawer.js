/***********************************************************************
 *
 *   テトリミノを描画するクラス.
 *
***********************************************************************/

class TetriMinoDrawer
{
    #blockDrawer; // BlockDrawer: ブロックを描画するクラス.
    #blockSize;   // Size:        ブロックの大きさ.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   number blockWidth:  ブロック1つの横幅.
    *   number blockHeight: ブロック1つの高さ.
    *   string image:       ブロックの画像のパスまたはエイリアス.
    *
    +-----------------------------------------------------------------*/
    constructor(blockWidth, blockHeight, image)
    {
        this.#blockDrawer = new BlockDrawer(blockWidth, blockHeight, image);
        this.#blockSize   = new Size(blockWidth, blockHeight);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノを描画する.
    *
    * 引数:
    *   number    x:         描画する位置のX座標.
    *   number    y:         描画する位置のY座標.
    *   TetriMino tetriMino: 描画するテトリミノ.
    *
    +-----------------------------------------------------------------*/
    Draw(x, y, tetriMino)
    {
        const points      = tetriMino.GetPoints();
        const block       = tetriMino.GetBlock().GetType();
        const tileWidth   = this.#blockSize.GetWidth();
        const tileHeight  = this.#blockSize.GetHeight();

        // 中心を計算する.
        let top     = 0;
        let bottom  = 0;
        let left    = 0;
        let right   = 0;
        let centerX = 0;
        let centerY = 0;
        for (const point of points)
        {
            top    = Math.min(top, point.GetY());
            bottom = Math.max(bottom, point.GetY());
            left   = Math.max(left, point.GetX());
            right  = Math.min(right, point.GetX());
        }
        centerX = (left - right) / 2 + 0.5;
        centerY = (bottom - top) / 2 + 0.5;

        // 描画
        for (const point of points)
        {
            const offsetX = x - (centerX * tileWidth);
            const offsetY = y - (centerY * tileHeight);
            const posX    = point.GetX();
            const posY    = point.GetY();

            this.#blockDrawer.Draw(block, posX, posY, offsetX, offsetY);
        }
    }
}