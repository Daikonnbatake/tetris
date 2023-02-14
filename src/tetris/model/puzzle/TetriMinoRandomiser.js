/***********************************************************************
 *
 *   テトリミノの抽選を行うクラス.
 *
***********************************************************************/

class TetriMinoRandomiser
{
    #minos; // Array<string>: テトリミノの種類.
    #queue; // Array<string>: テトリミノの出現順.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   Array<string> minos: 抽選するテトリミノの名前の一覧.
    *
    +-----------------------------------------------------------------*/
    constructor(minos)
    {
        this.#minos = minos;
        this.#queue = new Array();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 次のテトリミノを取得する.
    *
    * 戻り値:
    *   string: 次のテトリミノの名前.
    *
    +-----------------------------------------------------------------*/
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


    /*-----------------------------------------------------------------+
    *
    * 説明: Next の配列を取得する.
    *
    * 戻り値:
    *   Array<string>: Next の配列.
    *
    +-----------------------------------------------------------------*/
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