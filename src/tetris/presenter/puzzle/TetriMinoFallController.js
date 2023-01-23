/***********************************************************************
 *
 *   テトリミノの落下を制御するクラス.
 *
***********************************************************************/

class TetriMinoFallController
{
    #puzzle;        // Puzzle: 制御対象.
    #fallDelay;     // number: 自由落下のディレイ(ms).
    #lastFallTime;  // number: 最後に落下した時間(ms).
    #isSoftDrop;    // bool:   ソフトドロップ入力がされたら true.
    #isHardDrop;    // bool:   ハードドロップ入力がされたら true.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   Puzzle puzzle:    制御対象.
    *   number fallDelay: 自由落下のディレイ(ms).
    *
    +-----------------------------------------------------------------*/
    constructor(puzzle, fallDelay)
    {
        this.#lastFallTime = GameTimer.GetTime();
        this.#fallDelay    = fallDelay;
        this.#puzzle       = puzzle;
        this.#isSoftDrop   = false;
        this.#isHardDrop   = false;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 落下処理の更新.
    *
    +-----------------------------------------------------------------*/
    Update()
    {
        const now  = GameTimer.GetTime();
        const deff = now - this.#lastFallTime;

        if (this.#isHardDrop)
        {
            for (let i=0; i<20; i++) this.#puzzle.Fall();
            this.#isHardDrop   = false;
            this.#lastFallTime = now;
            return;
        }

        if (this.#isSoftDrop && (this.#fallDelay / 20) <= deff)
        {
            this.#puzzle.Fall();
            this.#isSoftDrop   = false;
            this.#lastFallTime = now;
            return;
        }

        if (this.#fallDelay <= deff)
        {
            this.#puzzle.Fall();
            this.#lastFallTime = now;
            return;
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: ソフトドロップ入力.
    *
    +-----------------------------------------------------------------*/
    SoftDrop()
    {
        this.#isSoftDrop = true;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: ハードドロップ入力.
    *
    +-----------------------------------------------------------------*/
    HardDrop()
    {
        this.#isHardDrop = true;
    }
}