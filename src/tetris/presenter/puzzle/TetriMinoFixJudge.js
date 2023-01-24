/***********************************************************************
 *
 *   テトリミノの落下を制御するクラス.
 *
***********************************************************************/
class TetriMinoFixJudge
{
    #toleranceCount; // number: 着地した後に操作を受け付ける回数.
    #toleranceTime;  // number: 着地した後無操作状態を許容する時間(ms).
    #isHardDrop;     // bool:   ハードドロップしたかどうか.
    #maximumY;       // number: Y の最大値(最低地上高).
    #operationCount; // number: 操作回数.
    #lastUpdateTime; // number: 最後に操作した時間(ms).


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   number toleranceCount: 接地後に許容する移動/回転の回数.
    *   number toleranceTime:  接地後に許容する無操作時間(ms).
    *
    +-----------------------------------------------------------------*/
    constructor(toleranceCount, toleranceTime)
    {
        this.#toleranceCount = toleranceCount;
        this.#toleranceTime  = toleranceTime;
        this.#isHardDrop     = false;
        this.#maximumY       = 0;
        this.#operationCount = 0;
        this.#lastUpdateTime = 0;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 固定判定をリセットする.
    *
    +-----------------------------------------------------------------*/
    Reset()
    {
        this.#isHardDrop     = false;
        this.#maximumY       = 0;
        this.#operationCount = 0;
        this.#lastUpdateTime = 0;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 固定条件を満たすなら true を返す.
    *
    * 戻り値:
    *   bool: 固定条件を満たすなら true.
    *
    +-----------------------------------------------------------------*/
    IsFixed()
    {
        const time   = GameTimer.GetTime() - this.#lastUpdateTime;
        let   result = false;
        if (this.#toleranceCount <= this.#operationCount) result = true;
        if (this.#toleranceTime  <= time) result = true;
        if (this.#isHardDrop) result = true;
        return result;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノに対する操作をカウントする.
    *
    +-----------------------------------------------------------------*/
    SomeOperation()
    {
        this.#operationCount += 1;
        this.#lastUpdateTime = GameTimer.GetTime();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 最低地上高を更新する.
    *
    * 引数:
    *   number y: テトリミノのY座標.
    *
    +-----------------------------------------------------------------*/
    UpdateY(y)
    {
        if (this.#maximumY < y)
        {
            this.#maximumY = y;
            this.#operationCount = 0;
            this.#lastUpdateTime = GameTimer.GetTime();
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: ハードドロップによる固定.
    *
    +-----------------------------------------------------------------*/
    HardDrop()
    {
        this.#isHardDrop = true;
    }
}