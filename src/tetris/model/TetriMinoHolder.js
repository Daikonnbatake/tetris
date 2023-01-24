/***********************************************************************
 *
 *   テトリミノのホールドを行うクラス.
 *
***********************************************************************/

class TetriMinoHolder
{
    #tetriMinoName;
    #isSwappable;

    constructor()
    {
        this.#tetriMinoName = null;
        this.#isSwappable = true;
    }


    Hold(tetriMinoName)
    {
        this.#isSwappable = false;
        const result = this.#tetriMinoName;
        this.#tetriMinoName = tetriMinoName;
        return result;
    }


    IsSwappable()
    {
        return this.#isSwappable;
    }


    ResetSwappable()
    {
        this.#isSwappable = true;
    }


    GetHoldingMinoName()
    {
        return this.#tetriMinoName;
    }
}