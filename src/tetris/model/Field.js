/***********************************************************************
 *
 * 　フィールドを表すクラス.
 *
***********************************************************************/

class Field
{
    #mutables;     // Array<MutableBlock>: 移動可能ブロックの配列.
    #blockLines;   // Array<BlockLines>:   確定済みブロックの配列.
    #deleted;      // Array<number>:       前回削除された行のリスト.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    +-----------------------------------------------------------------*/
    constructor(width, height)
    {
        this.#mutables   = new Array();
        this.#blockLines = new Array();
        this.#deleted    = new Array();

        for (let y=0; y<height; y++)
        {
            this.#blockLines.push(new BlockLine(width));
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 移動可能ブロックを描画する.
    *
    * 引数:
    *   number x:     X座標.
    *   number y:     Y座標.
    *   Block  block: 描画するブロック.
    *
    +-----------------------------------------------------------------*/
    DrawMutable(x, y, block)
    {
        const width  = this.#blockLines[0].GetLine().length;
        const height = this.#blockLines.length;
        const checkX = (0 <= x) && (x < width);
        const checkY = (0 <= y) && (y < height);

        if (checkX && checkY)
        {
            this.#mutables.push(new MutableBlock(x, y, block));
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 移動可能ブロックを全削除.
    *
    +-----------------------------------------------------------------*/
    ClearMutable()
    {
        this.#mutables = new Array();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 現在描画されている移動可能ブロックをフィールドに書き込む.
    *
    +-----------------------------------------------------------------*/
    FlushMutable()
    {
        for (const block of this.#mutables)
        {
            let x = block.GetPosition().GetX();
            let y = block.GetPosition().GetY();
            this.#blockLines[y].Flush(x, block.GetBlock());
        }
        this.#mutables = new Array();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 揃った行を削除する.
    *
    +-----------------------------------------------------------------*/
    DeleteLines()
    {
        const width  = this.#blockLines[0].GetLine().length;
        const height = this.#blockLines.length;

        // 削除する行をメモ.
        this.#deleted = new Array();
        for (let y = height-1; 0 <= y; y--)
        {
            if (this.#blockLines[y].IsComplete())
            {
                this.#deleted.push(y);
            }
        }

        // 行を削除
        for (const index of this.#deleted)
        {
            this.#blockLines.splice(index, 1);
            this.#blockLines.push(new BlockLine(width));
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: フィールドの状態を取得する(重いので脳死で呼ばないこと).
    *
    * 戻り値:
    *   Array<Array<Block>>: フィールド.
    *
    +-----------------------------------------------------------------*/
    GetField()
    {
        let result = new Array();

        /*- note ------------------------------------------------------+
        * JS の仕様上、愚直にオブジェクトを返してしまうと参照渡し状態に
        * なってしまい、戻り値をいじられると変な挙動をするのでゴリ押しで
        * ディープコピーしてます.
        +-------------------------------------------------------------*/
        for (const line of this.#blockLines)
        {
            let resultLine = new Array();
            result.push(resultLine);

            for (const block of line.GetLine())
            {
                const type     = block.GetType();
                const isHidden = block.IsHidden();
                const deepCopy = new Block(type, isHidden);
                resultLine.push(deepCopy);
            }
        }

        // 移動可能ブロックを戻り値に合成する.
        for (const mutable of this.#mutables)
        {
            const block  = mutable.GetBlock();
            const posX   = mutable.GetPosition().GetX();
            const posY   = mutable.GetPosition().GetY();
            result[posY][posX] = block;
        }

        return result;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 前回の操作によって削除された行を取得する.
    *
    * 戻り値:
    *   Array<number>: 削除された行の行数.
    *
    +-----------------------------------------------------------------*/
    GetDeletedLines()
    {
        return this.#deleted;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 衝突判定を取得する.
    *
    * 戻り値:
    *   Collision: フィールドの衝突判定.
    *
    +-----------------------------------------------------------------*/
    GetCollision()
    {
        let result = new Collision();
        let x = 0;
        let y = 0;

        for (let line of this.#blockLines)
        {
            for (let block of line.GetLine())
            {
                if (!(block.IsHidden())) result.Add(x, y);
                x += 1;
            }
            x = 0;
            y += 1;
        }

        return result;
    }
}