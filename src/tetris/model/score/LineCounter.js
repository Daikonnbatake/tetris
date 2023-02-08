class LineCounter
{
    #deletedLines;

    constructor()
    {
        this.#deletedLines = new Counter();
    }


    Count(deletedLineCount)
    {
        this.#deletedLines.CountUp(deletedLineCount);
    }


    GetDeletedLineCount()
    {
        return this.#deletedLines.GetValue();
    }
}