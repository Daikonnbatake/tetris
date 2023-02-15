/***********************************************************************
 *
 *   テトリミノを制御するクラス.
 *
***********************************************************************/

class TetriMinoController
{
    #puzzle;               // Puzzle:                        制御対象.
    #fallController;       // TetriMinoFallController:       落下制御.
    #holizontalController; // TetriMinoHolizontalController: 水平制御.
    #fixJudge;             // TetriMinoFixJudge:             固定判定.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   Puzzle puzzle:         制御対象.
    *   number fallSpeed:      ミノが1マス落下するのにかかる時間(ms).
    *   number dasDelay:       DAS のディレイ(ms).
    *   number arrDelay:       ARR のディレイ(ms).
    *   number toleranceCount: 接地後に許容する移動/回転の回数.
    *   number toleranceTime:  接地後に許容する無操作時間(ms).
    *
    +-----------------------------------------------------------------*/
    constructor(puzzle, fallSpeed, dasDelay, arrDelay,
        toleranceCount, toleranceTime)
    {
        this.#puzzle = puzzle;

        this.#fallController =
        new TetriMinoFallController(puzzle, fallSpeed);

        this.#holizontalController =
        new TetriMinoHolizontalController(puzzle, dasDelay, arrDelay);

        this.#fixJudge =
        new TetriMinoFixJudge(toleranceCount, toleranceTime);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノの縦移動と固定を更新する.
    *
    +-----------------------------------------------------------------*/
    Update()
    {
        if (this.#puzzle.IsFixed()) return;

        this.#fallController.Update();
        const nowY = this.#puzzle.GetTetriMinoPosition().GetY();

        this.#fixJudge.UpdateY(nowY);

        const isGround = this.#puzzle.IsGround();
        const isFixed  = this.#fixJudge.IsFixed();

        if (isGround && isFixed)
        {
            this.#puzzle.FixTetriMino();
            this.#fixJudge.Reset();
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノが固定済みなら true を返す.
    *
    * 戻り値:
    *   bool: テトリミノの固定状況.
    *
    +-----------------------------------------------------------------*/
    IsFixed()
    {
        return this.#puzzle.IsFixed();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 左移動キーの入力を受け取る.
    *
    * 引数:
    *   KeyState keyState: キー入力の状態.
    *
    +-----------------------------------------------------------------*/
    MoveLeftButton(keyState)
    {
        if (keyState === KeyState.Push())
        {
            this.#holizontalController.PushLeft();
            this.#fixJudge.SomeOperation();
            return;
        }

        if (keyState === KeyState.Hold())
        {
            const result = this.#holizontalController.HoldLeft();
            if (result) this.#fixJudge.SomeOperation();
            return;
        }

        if (keyState === KeyState.Pull())
        {
            this.#holizontalController.PullLeft();
            return;
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 右移動キーの入力を受け取る.
    *
    * 引数:
    *   KeyState keyState: キー入力の状態.
    *
    +-----------------------------------------------------------------*/
    MoveRightButton(keyState)
    {
        if (keyState === KeyState.Push())
        {
            this.#holizontalController.PushRight();
            this.#fixJudge.SomeOperation();
            return;
        }

        if (keyState === KeyState.Hold())
        {
            const result = this.#holizontalController.HoldRight();
            if (result) this.#fixJudge.SomeOperation();
            return;
        }

        if (keyState === KeyState.Pull())
        {
            this.#holizontalController.PullRight();
            return;
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: ハードドロップキーの入力を受け取る.
    *
    * 引数:
    *   KeyState keyState: キー入力の状態.
    *
    +-----------------------------------------------------------------*/
    HardDropButton(keyState)
    {
        if (keyState === KeyState.Push())
        {
            this.#fallController.HardDrop();
            this.#fixJudge.HardDrop();
            return;
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: ソフトドロップキーの入力を受け取る.
    *
    * 引数:
    *   KeyState keyState: キー入力の状態.
    *
    +-----------------------------------------------------------------*/
    SoftDropButton(keyState)
    {
        if (keyState === KeyState.Hold())
        {
            this.#fallController.SoftDrop();
            return;
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 左回転キーの入力を受け取る.
    *
    * 引数:
    *   KeyState keyState: キー入力の状態.
    *
    +-----------------------------------------------------------------*/
    TurnLeftButton(keyState)
    {
        if (keyState === KeyState.Push())
        {
            this.#puzzle.TurnLeft();
            this.#fixJudge.SomeOperation();
            return;
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 右回転キーの入力を受け取る.
    *
    * 引数:
    *   KeyState keyState: キー入力の状態.
    *
    +-----------------------------------------------------------------*/
    TurnRightButton(keyState)
    {
        if (keyState === KeyState.Push())
        {
            this.#puzzle.TurnRight();
            this.#fixJudge.SomeOperation();
            return;
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 自由落下のディレイを変更する.
    *
    * 引数:
    *   number fallDelay: 自由落下のディレイ(ms).
    *
    +-----------------------------------------------------------------*/
    ChangeFallDelay(fallDelay)
    {
        this.#fallController.ChangeFallDelay(fallDelay);
    }
}