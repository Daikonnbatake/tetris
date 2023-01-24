class NextsDrawer
{
    #positions;
    #tetriMinoDrawer;

    constructor(blockWidth, blockHeight, image)
    {
        this.#positions = new Array(6);
        this.#tetriMinoDrawer =
        new TetriMinoDrawer(blockWidth, blockHeight, image);
    }

    SetPositions(next1, next2, next3, next4, next5, next6)
    {
        this.#positions[0] = next1;
        this.#positions[1] = next2;
        this.#positions[2] = next3;
        this.#positions[3] = next4;
        this.#positions[4] = next5;
        this.#positions[5] = next6;
    }


    Draw(next1 = null, next2 = null, next3 = null, next4 = null,
         next5 = null, next6 = null)
    {
        let posX, posY;

        if (next1 == null) return;
        posX = this.#positions[0].GetX();
        posY = this.#positions[0].GetY();
        this.#tetriMinoDrawer.Draw(posX, posY, next1);

        if (next2 == null) return;
        posX = this.#positions[1].GetX();
        posY = this.#positions[1].GetY();
        this.#tetriMinoDrawer.Draw(posX, posY, next2);

        if (next3 == null) return;
        posX = this.#positions[2].GetX();
        posY = this.#positions[2].GetY();
        this.#tetriMinoDrawer.Draw(posX, posY, next3);

        if (next4 == null) return;
        posX = this.#positions[3].GetX();
        posY = this.#positions[3].GetY();
        this.#tetriMinoDrawer.Draw(posX, posY, next4);

        if (next5 == null) return;
        posX = this.#positions[4].GetX();
        posY = this.#positions[4].GetY();
        this.#tetriMinoDrawer.Draw(posX, posY, next5);

        if (next6 == null) return;
        posX = this.#positions[5].GetX();
        posY = this.#positions[5].GetY();
        this.#tetriMinoDrawer.Draw(posX, posY, next6);
    }
}