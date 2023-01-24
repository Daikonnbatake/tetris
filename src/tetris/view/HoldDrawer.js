class HoldDrawer
{
    #tetriMinoDrawer;
    #position;

    constructor(x, y, blockWidth, blockHeight, image)
    {
        this.#position = new Point(x, y);
        this.#tetriMinoDrawer =
        new TetriMinoDrawer(blockWidth, blockHeight, image);
    }

    Draw(tetriMino)
    {
        if (tetriMino == null) return;

        const x = this.#position.GetX();
        const y = this.#position.GetY();
        this.#tetriMinoDrawer.Draw(x, y, tetriMino);
    }
}