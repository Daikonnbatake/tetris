/***********************************************************************
 *
 *   2次元の中心を表す構造体.
 *
***********************************************************************/

class Pivot
{
    #x; // NormalizeNumber: (0 ≦ X ≦ 1)を満たす座標X.
    #y; // NormalizeNumber: (0 ≦ Y ≦ 1)を満たす座標Y.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   number x: X座標の初期値(任意).
    *   number y: Y座標初期値(任意).
    *
    +-----------------------------------------------------------------*/
    constructor(x, y)
    {
        this.#x = new NormalizeNumber(x);
        this.#y = new NormalizeNumber(y);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 全てのフィールドが 0 の Pivot 構造体を取得する.
    *
    * 戻り値:
    *   Pivot: 全フィールドが 0 の Pivot 構造体.
    *
    +-----------------------------------------------------------------*/
    static Default()
    {
        return new Pivot(0.5, 0.5);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 標準化済みX座標を取得する.
    *
    * 戻り値:
    *   number: 標準化済みX座標.
    +-----------------------------------------------------------------*/
    GetX()
    {
        return this.#x.GetNumber();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 標準化済みY座標を取得する.
    *
    * 戻り値:
    *   number: 標準化済みY座標.
    *
    +-----------------------------------------------------------------*/
    GetY()
    {
        return this.#y.GetNumber();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: X座標を設定する.
    *
    * 引数:
    *   number x: X座標の値.
    *
    +-----------------------------------------------------------------*/
    SetX(x)
    {
        this.#x.SetNumber(x);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: Y座標を設定する.
    *
    * 引数:
    *   number y: Y座標の値.
    *
    +-----------------------------------------------------------------*/
    SetY(y)
    {
        this.#y.SetNumber(y);
    }
}