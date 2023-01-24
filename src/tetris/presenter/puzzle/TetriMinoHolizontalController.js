/***********************************************************************
 *
 *   テトリミノの左右移動の制御をするクラス.
 *
***********************************************************************/

class TetriMinoHolizontalController
{
    #das;         // DelayerAutoShift: DAS の状態を管理するインスタンス.
    #arr;         // AutoRepeatRate:   ARR の状態を管理するインスタンス.
    #puzzle;      // Puzzle:           制御対象.
    #isPushLeft;  // bool:             左キーが押されているならtrue.
    #isPushRight; // bool:             右キーが押されているならtrue.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   Puzzle puzzle:    制御対象.
    *   number dasDelay:  DAS のディレイ(ms).
    *   number arrDelay:  ARR のディレイ(ms).
    *
    +-----------------------------------------------------------------*/
    constructor(puzzle, dasDelay, arrDelay)
    {
        this.#puzzle      = puzzle;
        this.#das         = new DelayerAutoShift(dasDelay);
        this.#arr         = new AutoRepeatRate(arrDelay);
        this.#isPushLeft  = false;
        this.#isPushRight = false;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 左移動のキーが押された瞬間.
    *
    +-----------------------------------------------------------------*/
    PushLeft()
    {
        if (this.#isPushRight)
        {
            this.#das.OnPull();
            this.#isPushRight = false;
        }

        this.#das.OnPush();
        this.#puzzle.MoveLeft();
        this.#isPushLeft = true;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 左移動のキーが長押しされている間.
    *
    +-----------------------------------------------------------------*/
    HoldLeft()
    {
        if (this.#isPushRight) return false;

        const das    = this.#das.Enable();
        const arr    = this.#arr.Enable();
        const result = das && arr;
        if (result) this.#puzzle.MoveLeft();
        return result;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 左移動のキーが離された瞬間.
    *
    +-----------------------------------------------------------------*/
    PullLeft()
    {
        this.#isPushLeft = false;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 右移動のキーが押された瞬間.
    *
    +-----------------------------------------------------------------*/
    PushRight()
    {
        if (this.#isPushLeft)
        {
            this.#das.OnPull();
            this.#isPushLeft = false;
        }

        this.#das.OnPush();
        this.#puzzle.MoveRight();
        this.#isPushRight = true;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 右移動のキーが長押しされている間.
    *
    +-----------------------------------------------------------------*/
    HoldRight()
    {
        if (this.#isPushLeft) return false;

        const das    = this.#das.Enable();
        const arr    = this.#arr.Enable();
        const result = das && arr;
        if (result) this.#puzzle.MoveRight();
        return result;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 右移動のキーが離された瞬間.
    *
    +-----------------------------------------------------------------*/
    PullRight()
    {
        this.#isPushRight = false;
    }
}