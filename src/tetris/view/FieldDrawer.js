/***********************************************************************
 *
 * 　フィールド描画するクラス.
 *
***********************************************************************/

class FieldDrawer
{
    #position;    // Point:       フィールドを描画する位置.
    #blockDrawer; // BlockDrawer: ブロック描画を行うクラス.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   number x:           フィールドを描画する位置のX座標.
    *   number y:           フィールドを描画する位置のY座標.
    *   number blockWidth:  ブロック1マスの横幅.
    *   number blockHeight: ブロック1マスの高さ.
    *   string image:       ブロックの画像のパスまたはエイリアス.
    *
    +-----------------------------------------------------------------*/
    constructor(x, y, blockWidth, blockHeight, image)
    {
        this.#position    = new Point(x, y);
        this.#blockDrawer = new BlockDrawer(
            blockWidth,
            blockHeight,
            image
        );
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: フィールドを描画する.
    *
    * 引数:
    *   Array<Array<Block>> field: フィールドの状態を表す二次元配列.
    *
    +-----------------------------------------------------------------*/
    Draw(field)
    {
        const width  = field[0].length;
        const height = field.length;

        for(let y=0; y<height; y++)
        {
            for(let x=-1; x<=width; x++)
            {
                if (x === -1 || x === width) continue;

                if (field[y][x].IsHidden())
                {
                    this.#blockDrawer.Draw(
                        9,
                        x, y,
                        this.#position.GetX(),
                        this.#position.GetY()
                    );
                    continue;
                };

                this.#blockDrawer.Draw(
                    field[y][x].GetType(),
                    x, y,
                    this.#position.GetX(),
                    this.#position.GetY()
                );
            }
        }
    }
}