/***********************************************************************
 *
 *   移動できるブロックの情報を保持するためのクラス.
 *
***********************************************************************/

class MutableBlock
{
    #position; // Point: 座標.
    #block;    // Block: ブロック.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   number x:     ブロックの x 座標.
    *   number y:     ブロックの y 座標.
    *   Block  block: ブロック.
    *
    +-----------------------------------------------------------------*/
    constructor(x, y, block)
    {
        this.#position = new Point(x, y);
        this.#block    = block;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 座標を取得.
    *
    * 戻り値:
    *   Point: 座標.
    *
    +-----------------------------------------------------------------*/
    GetPosition()
    {
        return this.#position;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: ブロックを取得する.
    *
    * 戻り値:
    *  Block: ブロック
    *
    +-----------------------------------------------------------------*/
    GetBlock()
    {
        return this.#block;
    }
}