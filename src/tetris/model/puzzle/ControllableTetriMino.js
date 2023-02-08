/***********************************************************************
 *
 * 　制御可能なテトリミノを表すクラス.
 *
***********************************************************************/

class ControllableTetriMino
{
    #tetriMino;  // RotatableTetriMino: 回転可能なテトリミノ.
    #position;   // Point:              このテトリミノの位置.
    #isGround;   // bool:               地面についているなら true.
    #lastAction; // 'move' | 'rotate':  最後に行った有効なアクション.
    #srsCount;   // number:             前回の回転で行われた SRS の回数.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   TetriMino     tetriMino:     テトリミノの形状.
    *   SRSTransition srsTransition: テトリミノのSRSズラし設定.
    *
    +-----------------------------------------------------------------*/
    constructor(tetriMino, srsTransition)
    {
        this.#tetriMino = new RotatableTetriMino(tetriMino, srsTransition);
        this.#position  = new Point(4, 0);
        this.#isGround  = false;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノを左に1マス移動させる.
    *
    * 引数:
    *   Collision fieldCollision: フィールドの衝突判定.
    *
    +-----------------------------------------------------------------*/
    MoveLeft(fieldCollision)
    {
        const points    = this.#tetriMino.GetPoints();
        const origin    = this.#tetriMino.GetOrigin();
        const pos       = this.#position;
        const collision = new Collision();

        for (const point of points)
        {
            const x = point.GetX() + pos.GetX() - origin.GetX() - 1;
            const y = point.GetY() + pos.GetY() - origin.GetY() ;
            collision.Add(x, y);
        }

        if (!fieldCollision.IsOverlap(collision))
        {
            this.#lastAction = PuzzleActionState.Move();
            this.#position.SetX(pos.GetX() - 1);
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノを右に1マス移動させる.
    *
    * 引数:
    *   Collision fieldCollision: フィールドの衝突判定.
    *
    +-----------------------------------------------------------------*/
    MoveRight(fieldCollision)
    {
        const points    = this.#tetriMino.GetPoints();
        const origin    = this.#tetriMino.GetOrigin();
        const pos       = this.#position;
        const collision = new Collision();

        for (const point of points)
        {
            const x = point.GetX() + pos.GetX() - origin.GetX() + 1;
            const y = point.GetY() + pos.GetY() - origin.GetY();
            collision.Add(x, y);
        }

        if (!fieldCollision.IsOverlap(collision))
        {
            this.#lastAction = PuzzleActionState.Move();
            this.#position.SetX(pos.GetX() + 1);
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノを左に90度回転させる.
    *
    * 引数:
    *   Collision fieldCollision: フィールドの衝突判定.
    *
    +-----------------------------------------------------------------*/
    TurnLeft(fieldCollision)
    {
        this.#tetriMino.TurnLeft();
        this.#tetriMino.ResetPadding();
        this.#srsCount = 0;

        const pos       = this.#position;
        const origin    = this.#tetriMino.GetOrigin();
        const collision = new Collision();
        let   isEnd     = false;

        while (!isEnd)
        {
            const points = this.#tetriMino.GetPoints();
            collision.Clear();

            for (const point of points)
            {
                const x = point.GetX() + pos.GetX() - origin.GetX();
                const y = point.GetY() + pos.GetY() - origin.GetY();
                collision.Add(x, y);
            }

            if (!fieldCollision.IsOverlap(collision))
            {
                const srsX = this.#tetriMino.GetPadding().GetX();
                const srsY = this.#tetriMino.GetPadding().GetY();
                this.#position.SetX(pos.GetX() + srsX);
                this.#position.SetY(pos.GetY() + srsY);
                this.#tetriMino.ResetPadding();
                this.#lastAction = PuzzleActionState.Rotate();
                return;
            }

            this.#srsCount += 1;
            this.#tetriMino.NextPadding();
            isEnd = this.#tetriMino.IsEnd();
        }

        this.#tetriMino.TurnRight();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノを右に90度回転させる.
    *
    * 引数:
    *   Collision fieldCollision: フィールドの衝突判定.
    *
    +-----------------------------------------------------------------*/
    TurnRight(fieldCollision)
    {
        this.#tetriMino.TurnRight();
        this.#tetriMino.ResetPadding();
        this.#srsCount = 0;

        const pos       = this.#position;
        const origin    = this.#tetriMino.GetOrigin();
        const collision = new Collision();
        let   isEnd     = false;

        while (!isEnd)
        {
            const points = this.#tetriMino.GetPoints();
            collision.Clear();

            for (const point of points)
            {
                const x = point.GetX() + pos.GetX() - origin.GetX();
                const y = point.GetY() + pos.GetY() - origin.GetY();
                collision.Add(x, y);
            }

            if (!fieldCollision.IsOverlap(collision))
            {
                const srsX = this.#tetriMino.GetPadding().GetX();
                const srsY = this.#tetriMino.GetPadding().GetY();
                this.#position.SetX(pos.GetX() + srsX);
                this.#position.SetY(pos.GetY() + srsY);
                this.#tetriMino.ResetPadding();
                this.#lastAction = PuzzleActionState.Rotate();
                return;
            }

            this.#srsCount += 1;
            this.#tetriMino.NextPadding();
            isEnd = this.#tetriMino.IsEnd();
        }

        this.#tetriMino.TurnLeft();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノを1マス落下させる.
    *
    * 引数:
    *   Collision fieldCollision: フィールドの衝突判定.
    *
    +-----------------------------------------------------------------*/
    Fall(fieldCollision)
    {
        const points    = this.#tetriMino.GetPoints();
        const pos       = this.#position;
        const origin    = this.#tetriMino.GetOrigin();
        const collision = new Collision();

        for (const point of points)
        {
            const x = point.GetX() + pos.GetX() - origin.GetX();
            const y = point.GetY() + pos.GetY() - origin.GetY() + 1;
            collision.Add(x, y);
        }

        if (!fieldCollision.IsOverlap(collision))
        {
            this.#lastAction = PuzzleActionState.Move();
            this.#position.SetY(pos.GetY() + 1);
        }

        this.#isGround = fieldCollision.IsGround(collision);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノを構成するブロックを取得する.
    *
    * 戻り値:
    *   Block: このテトリミノを構成するブロック.
    *
    +-----------------------------------------------------------------*/
    GetBlock()
    {
        return this.#tetriMino.GetBlock();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノのフィールド上での形状を表す座標の配列を取得する.
    *
    * 戻り値:
    *   Array<Point>: このテトリミノの形状.
    *
    +-----------------------------------------------------------------*/
    GetPoints()
    {
        let   result = new Array();
        const points = this.#tetriMino.GetPoints();
        const pos    = this.#position;
        const origin = this.#tetriMino.GetOrigin();

        for (const point of points)
        {
            const x = point.GetX() + pos.GetX() - origin.GetX();
            const y = point.GetY() + pos.GetY() - origin.GetY();
            result.push(new Point(x, y));
        }

        return result;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノの中心座標を取得する(フィールド上の中心位置).
    *
    * 戻り値:
    *   Point: このテトリミノの中心座標.
    *
    +-----------------------------------------------------------------*/
    GetPosition()
    {
        const posX    = this.#position.GetX();
        const posY    = this.#position.GetY();
        const originX = this.#tetriMino.GetOrigin().GetX();
        const originY = this.#tetriMino.GetOrigin().GetY();
        const result = new Point(posX - originX, posY - originY);
        return result;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このテトリミノが接地しているなら true を返す.
    *
    * 戻り値:
    *   bool: このテトリミノが接地しているなら true.
    *
    +-----------------------------------------------------------------*/
    IsGround(fieldCollision)
    {
        let result = new Collision();
        const points = this.#tetriMino.GetPoints();
        const origin = this.#tetriMino.GetOrigin();
        const pos    = this.#position;

        for (const point of points)
        {
            const x = point.GetX() + pos.GetX() - origin.GetX();
            const y = point.GetY() + pos.GetY() - origin.GetY();
            result.Add(x, y);
        }

        return fieldCollision.IsGround(result);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このテトリミノが既定の位置に出現できない場合1段上に移動させる.
    *
    * 引数:
    *   Collision fieldCollision: フィールドの衝突判定.
    *
    * 戻り値:
    *   bool: 一段上に移動した場合 true を返す.
    *
    +-----------------------------------------------------------------*/
    SpawnCorrection(fieldCollision)
    {
        const points    = this.#tetriMino.GetPoints();
        const origin    = this.#tetriMino.GetOrigin();
        const pos       = this.#position;
        const collision = new Collision();

        for (const point of points)
        {
            const x = point.GetX() + pos.GetX() - origin.GetX();
            const y = point.GetY() + pos.GetY() - origin.GetY() ;
            collision.Add(x, y);
        }

        if (fieldCollision.IsOverlap(collision))
        {
            this.#position.SetY(-1);
            return true;
        }

        return false;
    }


    GetLastAction()
    {
        return this.#lastAction;
    }


    GetSRSCount()
    {
        if (this.#lastAction === PuzzleActionState.Move()) return 0;
        return this.#srsCount;
    }


    // 自身に隣接しているブロックの座標の一覧を取得する.
    GetAroundCollisions(fieldCollision)
    {
        let result   = new Set();
        const points = this.#tetriMino.GetPoints();
        const origin = this.#tetriMino.GetOrigin();
        const pos    = this.#position;

        for (const point of points)
        {
            const x = point.GetX() + pos.GetX() - origin.GetX();
            const y = point.GetY() + pos.GetY() - origin.GetY();
            const rawX = point.GetX() - origin.GetX();
            const rawY = point.GetY() - origin.GetY();
            let   n = new Collision();
            let   e = new Collision();
            let   s = new Collision();
            let   w = new Collision();
            n.Add(x, y-1);
            e.Add(x+1, y);
            s.Add(x, y+1);
            w.Add(x-1, y);

            if (fieldCollision.IsOverlap(n))
                result.add(new Point(rawX, rawY - 1));

            if (fieldCollision.IsOverlap(e))
                result.add(new Point(rawX + 1, rawY));

            if (fieldCollision.IsOverlap(s))
                result.add(new Point(rawX, rawY + 1));

            if (fieldCollision.IsOverlap(w))
                result.add(new Point(rawX - 1, rawY));
        }
        return Array.from(result);
    }
}