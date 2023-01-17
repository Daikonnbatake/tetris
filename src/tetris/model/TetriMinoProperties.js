/***********************************************************************
 *
 * 　テトリミノを生成するための申込用紙の役割を果たすクラス.
 *
***********************************************************************/

class TetriMinoProperties
{
    #name;
    #block;
    #origin;
    #points;

    constructor(name, block, origin, points)
    {
        this.#name = name;
        this.#block = block;
        this.#origin = origin;
        this.#points = points;
    }

    GetName()   { return this.#name; }
    GetBlock()  { return this.#block; }
    GetOrigin() { return this.#origin; }
    GetPoints() { return this.#points; }
}