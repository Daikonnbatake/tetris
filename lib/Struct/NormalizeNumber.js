/***********************************************************************
 *
 * 　0~1 で標準化した数値を表す構造体.
 *
***********************************************************************/

class NormalizeNumber
{
    #num; // number: (0 ≦ #num ≦ 1) を満たす数値.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   number   number:  初期値(任意).
    *
    +-----------------------------------------------------------------*/
    constructor(number = 0)
    {
        this.#num = Math.max(0, Math.min(1, number));
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 数値を取得する.
    *
    * 戻り値:
    *   number: (0 ≦ N ≦ 1) を満たす数値 N.
    *
    +-----------------------------------------------------------------*/
    GetNumber()
    {
        return this.#num;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 数値を設定する.
    *
    * 引数:
    *   number  number:  数値.
    *
    +-----------------------------------------------------------------*/
    SetNumber(number)
    {
        this.#num = Math.max(0, Math.min(1, number));
    }
}