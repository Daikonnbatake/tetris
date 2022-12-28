/***********************************************************************
 *
 * 　ブロックのかたまりを表す構造体.
 *
***********************************************************************/

class Chunk
{
    #struct;

    constructor(width, height)
    {
        this.#struct = [];

        for (let x = 0; x < width; x++)
        {
            for (let y = 0; y < height; y++)
            {
                this.#struct = Block.Air();
            }
        }
    }


    GetBlock(position)
    {
        return this.#struct[position.GetX()][position.GetY()];
    }


    SetBlock(position, block)
    {
        this.#struct[position.GetX()][position.GetY()] = block;
    }
}