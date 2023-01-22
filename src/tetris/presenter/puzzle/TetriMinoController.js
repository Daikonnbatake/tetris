class TetriMinoController
{
    #puzzle;
    #fallController;
    #holizontalController;
    #fixJudge;


    constructor(puzzle, fallController, holizontalController, fixJudge)
    {
        this.#puzzle               = puzzle;
        this.#fallController       = fallController;
        this.#holizontalController = holizontalController;
        this.#fixJudge             = fixJudge;

    }


    Reset()
    {
        this.#fixJudge.Reset();
    }


    Update()
    {
        this.#fallController.Update();
        const nowY = this.#puzzle.GetTetriMinoPosition().GetY();
        this.#fixJudge.UpdateY(nowY);
    }


    IsFixed()
    {
        const isGround = this.#puzzle.IsGround();
        const isFixed  = this.#fixJudge.IsFixed();
        return isGround && isFixed;
    }


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


    HardDropButton(keyState)
    {
        if (keyState === KeyState.Push())
        {
            this.#fallController.HardDrop();
            this.#fixJudge.HardDrop();
            return;
        }
    }


    SoftDropButton(keyState)
    {
        if (keyState === KeyState.Hold())
        {
            this.#fallController.SoftDrop();
            return;
        }
    }


    TurnLeftButton(keyState)
    {
        if (keyState === KeyState.Push())
        {
            this.#puzzle.TurnLeft();
            this.#fixJudge.SomeOperation();
            return;
        }
    }


    TurnRightButton(keyState)
    {
        if (keyState === KeyState.Push())
        {
            this.#puzzle.TurnRight();
            this.#fixJudge.SomeOperation();
            return;
        }
    }
}