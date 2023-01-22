class NineSliceIndex
{
    #width;
    #height;

    constructor(width, height)
    {
        this.#width  = width  - 1;
        this.#height = height - 1;
    }

    GetIndex(x, y)
    {
        if (y === 0)
        {
            if (x === 0) return 0;
            if (x === this.#width) return 2;
            return 1;
        }

        if (y === this.#height)
        {
            if (x === 0) return 6;
            if (x === this.#width) return 8;
            return 7;
        }

        if (x === 0) return 3;
        if (x === this.#width) return 5;
        return 4;
    }
}