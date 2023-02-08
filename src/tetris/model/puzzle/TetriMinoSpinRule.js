class TetriMinoSpinRule
{
    #minAroundCount;
    #maxSRSCount;
    #arounds;

    constructor(points, aroundMin, maxSRSCount)
    {
        this.#minAroundCount = aroundMin;
        this.#maxSRSCount    = maxSRSCount;
        this.#arounds        = points;
    }


    // ミノの状況を元にスピン判定を行う.
    Check(points, srsCount, lastAction)
    {
        if (lastAction === PuzzleActionState.Move()) return false;
        if (this.#maxSRSCount < srsCount) return false;

        let count = 0;

        for (const point of points)
        {
            const result = this.#arounds.find(value =>
            {
                const x = point.GetX() === value.GetX();
                const y = point.GetY() === value.GetY();
                return x && y;
            });

            if (result) count += 1;
        }

        if (this.#minAroundCount <= count) return true;
        return false;
    }
}