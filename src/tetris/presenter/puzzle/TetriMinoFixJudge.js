class TetriMinoFixJudge
{
    #toleranceCount; // number: 着地した後に操作を受け付ける回数.
    #toleranceTime;  // number: 着地した後無操作状態を許容する時間(ms).
    #isHardDrop;     // bool:   ハードドロップしたかどうか.
    #isSoftFix;      // bool:   着地後にソフトドロップしたかどうか.
    #maximumY;       // number: Y の最大値(最低地上高).
    #operationCount; // number: 操作回数.
    #lastUpdateTime; // number: 最後に操作した時間(ms).


    constructor(toleranceCount, toleranceTime)
    {
        this.#toleranceCount = toleranceCount;
        this.#toleranceTime  = toleranceTime;
        this.#isHardDrop     = false;
        this.#isSoftFix      = false;
        this.#maximumY       = 0;
        this.#operationCount = 0;
        this.#lastUpdateTime = 0;
    }


    // 判定をリセットする.
    Reset()
    {
        this.#isHardDrop     = false;
        this.#isSoftFix      = false;
        this.#maximumY       = 0;
        this.#operationCount = 0;
        this.#lastUpdateTime = 0;
    }


    // 固定すべきか判定する.
    IsFixed()
    {
        const time = GameTimer.GetTime() - this.#lastUpdateTime;
        if (this.#toleranceCount <= this.#operationCount) return true;
        if (this.#toleranceTime < time) return true;
        if (this.#isHardDrop) return true;
        if (this.#isSoftFix) return true;
        return false;
    }


    // 何かしら操作を行った時.
    SomeOperation()
    {
        this.#operationCount += 1;
        this.#lastUpdateTime = GameTimer.GetTime();
    }


    // 最低地上高を更新.
    UpdateY(y)
    {
        if (this.#maximumY < y)
        {
            this.#maximumY = y;
            this.#operationCount = 0;
            this.#lastUpdateTime = GameTimer.GetTime();
        }
    }


    HardDrop()
    {
        this.#isHardDrop = true;
    }


    // 地面に着いているときにソフトドロップしたとき、強制fixする.
    SoftFix()
    {
        this.#isSoftFix = true;
    }
}