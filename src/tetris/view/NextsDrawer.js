/***********************************************************************
 *
 *   NEXT を描画するクラス.
 *
***********************************************************************/

class NextsDrawer
{
    #positions;       // Array<Point>:    テトリミノの描画位置の一覧.
    #tetriMinoDrawer; // TetriMinoDrawer: テトリミノを描画するクラス.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   number blockWidth:  ブロック1マスの横幅.
    *   number blockHeight: ブロック1マスの高さ.
    *   string image:       ブロックの画像のパスまたはエイリアス.
    *
    +-----------------------------------------------------------------*/
    constructor(blockWidth, blockHeight, image)
    {
        this.#positions = new Array(6);
        this.#tetriMinoDrawer =
        new TetriMinoDrawer(blockWidth, blockHeight, image);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノの描画位置を設定する.
    *
    * 引数:
    *   Point next1: 1つめの next の描画位置.
    *   Point next2: 2つめの next の描画位置.
    *   Point next3: 3つめの next の描画位置.
    *   Point next4: 4つめの next の描画位置.
    *   Point next5: 5つめの next の描画位置.
    *   Point next6: 6つめの next の描画位置.
    *
    +-----------------------------------------------------------------*/
    SetPositions(next1, next2, next3, next4, next5, next6)
    {
        this.#positions[0] = next1;
        this.#positions[1] = next2;
        this.#positions[2] = next3;
        this.#positions[3] = next4;
        this.#positions[4] = next5;
        this.#positions[5] = next6;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: Next を描画する.
    *
    * 引数:
    *   TetriMino next1: 1つめの next (任意).
    *   TetriMino next2: 2つめの next (任意).
    *   TetriMino next3: 3つめの next (任意).
    *   TetriMino next4: 4つめの next (任意).
    *   TetriMino next5: 5つめの next (任意).
    *   TetriMino next6: 6つめの next (任意).
    *
    +-----------------------------------------------------------------*/
    Draw(next1 = null, next2 = null, next3 = null, next4 = null,
         next5 = null, next6 = null)
    {
        let posX, posY;

        if (next1 == null) return;
        posX = this.#positions[0].GetX();
        posY = this.#positions[0].GetY();
        this.#tetriMinoDrawer.Draw(posX, posY, next1);

        if (next2 == null) return;
        posX = this.#positions[1].GetX();
        posY = this.#positions[1].GetY();
        this.#tetriMinoDrawer.Draw(posX, posY, next2);

        if (next3 == null) return;
        posX = this.#positions[2].GetX();
        posY = this.#positions[2].GetY();
        this.#tetriMinoDrawer.Draw(posX, posY, next3);

        if (next4 == null) return;
        posX = this.#positions[3].GetX();
        posY = this.#positions[3].GetY();
        this.#tetriMinoDrawer.Draw(posX, posY, next4);

        if (next5 == null) return;
        posX = this.#positions[4].GetX();
        posY = this.#positions[4].GetY();
        this.#tetriMinoDrawer.Draw(posX, posY, next5);

        if (next6 == null) return;
        posX = this.#positions[5].GetX();
        posY = this.#positions[5].GetY();
        this.#tetriMinoDrawer.Draw(posX, posY, next6);
    }
}