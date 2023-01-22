class TetriMinoFallController
{
    #fallDelay;
    #lastFallTime;
    #puzzle;
    #isSoftDrop;
    #isHardDrop;

    constructor(puzzle, fallDelay)
    {
        this.#lastFallTime = GameTimer.GetTime();
        this.#fallDelay    = fallDelay;
        this.#puzzle       = puzzle;
        this.#isSoftDrop   = false;
        this.#isHardDrop   = false;
    }

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


    SoftDrop()
    {
        this.#isSoftDrop = true;
    }

    HardDrop()
    {
        this.#isHardDrop = true;
    }
}