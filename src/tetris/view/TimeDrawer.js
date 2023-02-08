class TimeDrawer
{
    #scoreDrawer;
    #size;

    constructor(tileWidth, tileHeight, image)
    {
        this.#scoreDrawer = new ScoreDrawer(tileWidth, tileHeight, image);
        this.#size = new Size(tileWidth, tileHeight);
    }


    Draw(x, y, millisec)
    {
        const min   = Math.floor(millisec / 60000);
        const sec   = Math.floor((millisec % 60000) / 1000);
        const csec  = Math.floor((millisec % 1000) / 10);
        const width = this.#size.GetWidth();

        this.#scoreDrawer.Draw(x, y, csec, 2);
        this.#scoreDrawer.Draw(x - width * 2.5, y, sec, 2);
        this.#scoreDrawer.Draw(x - width * 5, y, min);
    }
}