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
        if (this.#isPushRight) return;

        const das = this.#das.Enable();
        const arr = this.#arr.Enable();
        if (das && arr) this.#puzzle.MoveLeft();
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
        if (this.#isPushLeft) return;

        const das = this.#das.Enable();
        const arr = this.#arr.Enable();
        if (das && arr) this.#puzzle.MoveRight();
    }


    PullRight()
    {
        this.#isPushRight = false;
    }
}