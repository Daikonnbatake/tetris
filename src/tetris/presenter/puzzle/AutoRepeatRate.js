/***********************************************************************
 *
 *   左右キー長押し時の自動連打のディレイ(ARR)を管理するクラス.
 *   DelayerAutoShift クラスとセットで使う.
 *
 *   参考: https://nestetrisjp.github.io/das-introduction/
 *
***********************************************************************/

class AutoRepeatRate
{
    #rate;        // number: 連打の間隔(ms).
    #updateTime;  // number: 最後に自動連打が発動した時間(ms).


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   number repeatRateMilliSecond: 連打の間隔(ms).
    *
    +-----------------------------------------------------------------*/
    constructor(repeatRateMilliSecond)
    {
        this.#rate = repeatRateMilliSecond;
        this.#updateTime = 0;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このメソッドが呼ばれた際に次の連打が打てるなら true を返す.
    *
    * 戻り値:
    *   bool: 次の連打が打てるなら true.
    *
    +-----------------------------------------------------------------*/
    Enable()
    {
        const nowTime     = GameTimer.GetTime();
        const elapsedTime = nowTime - this.#updateTime;
        const result      = this.#rate <= elapsedTime;

        if (result) this.#updateTime  = nowTime;
        return result;
    }
}