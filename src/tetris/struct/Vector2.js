/***********************************************************************
 *
 * 　2次元座標を表す構造体.
 *
***********************************************************************/

class Vector2
{
    #x;
    #y;

    constructor(x, y)
    {
        this.#x = Math.floor(x);
        this.#y = Math.floor(y);
    }

    GetX()
    {
        return this.#x;
    }

    GetY()
    {
        return this.#y;
    }

    SetX(x)
    {
        this.#x = Math.floor(x);
    }

    SetY(y)
    {
        this.#y = Math.floor(y);
    }
}