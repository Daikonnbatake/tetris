/***********************************************************************
 *
 *   時間を計測するクラス.
 *
***********************************************************************/

class Stopwatch
{
    #start;  // number: スタート.
    #sum;    // number: 計った時間の総和.
    #active; // bool:   計測中ならtrue.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    +-----------------------------------------------------------------*/
    constructor()
    {
        this.#start  = Date.now();
        this.#sum    = 0;
        this.#active = false;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: リセット.
    *
    +-----------------------------------------------------------------*/
    Reset()
    {
        this.#start  = Date.now();
        this.#sum    = 0;
        this.#active = false;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: スタート.
    *
    +-----------------------------------------------------------------*/
    Start()
    {
        this.#start  = Date.now();
        this.#active = true;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: ストップ.
    *
    +-----------------------------------------------------------------*/
    Stop()
    {
        this.#active = false;
        this.#sum    = Date.now() - this.#start;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 計測時間を取得する.
    *
    * 戻り値:
    *   number: 計測時間(ミリ秒).
    *
    +-----------------------------------------------------------------*/
    GetMilliSec()
    {
        let result = this.#sum;
        if (this.#active) result += Date.now() - this.#start;
        return result;
    }
}