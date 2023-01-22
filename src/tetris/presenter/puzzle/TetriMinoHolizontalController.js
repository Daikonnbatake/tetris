class TetriMinoHolizontalController
{
    #das;
    #arr;
    #puzzle;
    #isPushLeft;
    #isPushRight;

    constructor(puzzle, dasDelay, arrDelay)
    {
        this.#puzzle      = puzzle;
        this.#das         = new DelayerAutoShift(dasDelay);
        this.#arr         = new AutoRepeatRate(arrDelay);
        this.#isPushLeft  = false;
        this.#isPushRight = false;
    }


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


    HoldLeft()
    {
        if (this.#isPushRight) return false;

        const das    = this.#das.Enable();
        const arr    = this.#arr.Enable();
        const result = das && arr;
        if (result) this.#puzzle.MoveLeft();
        return result;
    }


    PullLeft()
    {
        this.#isPushLeft = false;
    }



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


    HoldRight()
    {
        if (this.#isPushLeft) return false;

        const das    = this.#das.Enable();
        const arr    = this.#arr.Enable();
        const result = das && arr;
        if (result) this.#puzzle.MoveRight();
        return result;
    }


    PullRight()
    {
        this.#isPushRight = false;
    }
}