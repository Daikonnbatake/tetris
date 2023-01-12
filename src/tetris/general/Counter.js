/***********************************************************************
 *
 * 　汎用的な数量カウンター.
 *
***********************************************************************/

class Counter
{
    #counter;


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    +-----------------------------------------------------------------*/
    constructor()
    {
        this.#counter = 0;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: カウントアップする.
    *
    +-----------------------------------------------------------------*/
    CountUp()
    {
        this.#counter += 1;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: カウンターをリセット.
    *
    +-----------------------------------------------------------------*/
    Reset()
    {
        this.#counter = 0;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 現在の値を取得する.
    * 
    * 戻り値:
    *   number: 現在の値.
    *
    +-----------------------------------------------------------------*/
    GetValue()
    {
        return this.#counter;
    }
}