/***********************************************************************
 *
 *   ホールド中のテトリミノを描画するクラス.
 *
***********************************************************************/

class HoldDrawer
{
    #tetriMinoDrawer; // TetriMinoDrawer: テトリミノを描画するクラス.
    #position;        // Point:           描画位置.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   number x:           テトリミノを描画する位置のX座標.
    *   number y:           テトリミノを描画する位置のY座標.
    *   number blockWidth:  ブロック1マスの横幅.
    *   number blockHeight: ブロック1マスの高さ.
    *   string image:       ブロックの画像のパスまたはエイリアス.
    *
    +-----------------------------------------------------------------*/
    constructor(x, y, blockWidth, blockHeight, image)
    {
        this.#position = new Point(x, y);
        this.#tetriMinoDrawer =
        new TetriMinoDrawer(blockWidth, blockHeight, image);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: ホールド中のテトリミノを描画する.
    *
    * 引数:
    *   TetriMino tetriMino: 描画するテトリミノ.
    *
    +-----------------------------------------------------------------*/
    Draw(tetriMino)
    {
        if (tetriMino == null) return;

        const x = this.#position.GetX();
        const y = this.#position.GetY();
        this.#tetriMinoDrawer.Draw(x, y, tetriMino);
    }
}