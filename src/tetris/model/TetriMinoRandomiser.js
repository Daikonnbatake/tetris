
class TetriMinoRandomiser
{
    #minos; // Array<string>: テトリミノの種類.
    #queue; // Array<string>: テトリミノの出現順.


    constructor(minos)
    {
        this.#minos = minos;
        this.#queue = new Array();
    }


    GetNext()
    {
        const queueLength = this.#queue.length;
        const kindOfMino  = this.#minos.length;

        if (queueLength <= kindOfMino)
        {
            let minos = this.#minos.concat();
            while (0 < minos.length)
            {
                const index = Math.floor(Math.random() * minos.length);
                this.#queue.push(minos[index]);
                minos.splice(index, 1);
            }
        }

        const result = this.#queue[0];
        this.#queue.splice(0, 1);
        return result;
    }

    // Nextの配列を返す
    GetNexts()
    {
        const kindOfMino = this.#minos.length;
        let   result     = new Array();

        while (result.length < kindOfMino - 1)
        {
            result.push(this.#queue[result.length]);
        }

        return result;
    }
}