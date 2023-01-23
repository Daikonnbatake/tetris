/***********************************************************************
 *
 *   パズル本体を制御するクラス.
 *
***********************************************************************/

class Puzzle
{
    #field;          // Field:                 フィールド.
    #fieldCollision; // Collision:             衝突判定のキャッシュ.
    #tetriMino;      // ControllableTetriMino: 操作可能なテトリミノ.
    #tetriMinoFixed; // bool:                  テトリミノの固定状況.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   number fieldWidth:  フィールドの横幅.
    *   number fieldHeight: フィールドの高さ.
    *
    +-----------------------------------------------------------------*/
    constructor(fieldWidth, fieldHeight)
    {
        this.#field = new Field(fieldWidth, fieldHeight);
        this.#fieldCollision = this.#field.GetCollision();
        this.#tetriMinoFixed = false;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 新しいテトリミノをフィールド上に出現させる.
    *
    * 引数:
    *   ControllableTetriMino controllableTetriMino: テトリミノ.
    *
    +-----------------------------------------------------------------*/
    NewTetriMino(controllableTetriMino)
    {
        this.#tetriMino = controllableTetriMino;
        this.#tetriMinoFixed = false;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノを左に1マス移動させる.
    *
    +-----------------------------------------------------------------*/
    MoveLeft()
    {
        if (this.#tetriMinoFixed) return;

        this.#field.ClearMutable();
        this.#tetriMino.MoveLeft(this.#fieldCollision);

        const points = this.#tetriMino.GetPoints();

        for (const point of points)
        {
            const x = point.GetX();
            const y = point.GetY();
            const b = this.#tetriMino.GetBlock();
            this.#field.DrawMutable(x, y, b);
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノを右に1マス移動させる.
    *
    +-----------------------------------------------------------------*/
    MoveRight()
    {
        if (this.#tetriMinoFixed) return;

        this.#field.ClearMutable();
        this.#tetriMino.MoveRight(this.#fieldCollision);

        const points = this.#tetriMino.GetPoints();

        for (const point of points)
        {
            const x = point.GetX();
            const y = point.GetY();
            const b = this.#tetriMino.GetBlock();
            this.#field.DrawMutable(x, y, b);
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノを90度左に回転させる.
    *
    +-----------------------------------------------------------------*/
    TurnLeft()
    {
        if (this.#tetriMinoFixed) return;

        this.#field.ClearMutable();
        this.#tetriMino.TurnLeft(this.#fieldCollision);

        const points = this.#tetriMino.GetPoints();

        for (const point of points)
        {
            const x = point.GetX();
            const y = point.GetY();
            const b = this.#tetriMino.GetBlock();
            this.#field.DrawMutable(x, y, b);
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノを90度右に回転させる.
    *
    +-----------------------------------------------------------------*/
    TurnRight()
    {
        if (this.#tetriMinoFixed) return;

        this.#field.ClearMutable();
        this.#tetriMino.TurnRight(this.#fieldCollision);

        const points = this.#tetriMino.GetPoints();

        for (const point of points)
        {
            const x = point.GetX();
            const y = point.GetY();
            const b = this.#tetriMino.GetBlock();
            this.#field.DrawMutable(x, y, b);
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノを1マス落下させる.
    *
    +-----------------------------------------------------------------*/
    Fall()
    {
        if (this.#tetriMinoFixed) return;

        this.#field.ClearMutable();
        this.#tetriMino.Fall(this.#fieldCollision);

        const points = this.#tetriMino.GetPoints();

        for (const point of points)
        {
            const x = point.GetX();
            const y = point.GetY();
            const b = this.#tetriMino.GetBlock();
            this.#field.DrawMutable(x, y, b);
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノを90度左に回転させる.
    *
    +-----------------------------------------------------------------*/
    FixTetriMino()
    {
        if (this.#tetriMinoFixed) return;
        this.#field.FlushMutable();
        this.#field.DeleteLines();
        this.#fieldCollision = this.#field.GetCollision();
        this.#tetriMinoFixed = true;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: フィールドの状態を取得する(重いので脳死で呼ばないこと).
    *
    * 戻り値:
    *   Array<Array<Block>>: 移動可能ブロックを含むフィールドの全体像.
    *
    +-----------------------------------------------------------------*/
    GetField()
    {
        return this.#field.GetField();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 操作中のテトリミノの中心座標を取得する(フィールド上の中心位置).
    *
    * 戻り値:
    *   Point: 操作中のテトリミノの中心座標.
    *
    +-----------------------------------------------------------------*/
    GetTetriMinoPosition()
    {
        return this.#tetriMino.GetPosition();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 操作中のテトリミノが接地しているなら true を返す.
    *
    * 戻り値:
    *   bool: 操作中のテトリミノが接地しているなら true.
    *
    +-----------------------------------------------------------------*/
    IsGround()
    {
        return this.#tetriMino.IsGround(this.#fieldCollision);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 操作中のテトリミノが固定済みなら true を返す.
    *
    * 戻り値:
    *   bool: 操作中のテトリミノが固定済みなら true.
    *
    +-----------------------------------------------------------------*/
    IsFixed()
    {
        return this.#tetriMinoFixed;
    }
}