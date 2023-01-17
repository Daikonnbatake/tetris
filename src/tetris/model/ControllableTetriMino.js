/***********************************************************************
 *
 * 　制御可能なテトリミノを表すクラス.
 *
***********************************************************************/

class ControllableTetriMino
{
    #tetriMino;
    #position;


    constructor(tetriMino, srsTransition)
    {
        this.#tetriMino = new RotatableTetriMino(tetriMino, srsTransition);
        this.#position  = new Point(4, 1);
    }


    MoveLeft(fieldCollision)
    {
        const points    = this.#tetriMino.GetPoints();
        const pos       = this.#position;
        const collision = new Collision();

        for (const point of points)
        {
            const x = point.GetX() + pos.GetX() - 1;
            const y = point.GetY() + pos.GetY();
            collision.Add(x, y);
        }

        if (!fieldCollision.IsOverlap(collision))
        {
            this.#position.SetX(pos.GetX() - 1);
        }
    }


    MoveRight(fieldCollision)
    {
        const points    = this.#tetriMino.GetPoints();
        const pos       = this.#position;
        const collision = new Collision();

        for (const point of points)
        {
            const x = point.GetX() + pos.GetX() + 1;
            const y = point.GetY() + pos.GetY();
            collision.Add(x, y);
        }

        if (!fieldCollision.IsOverlap(collision))
        {
            this.#position.SetX(pos.GetX() + 1);
        }
    }


    TurnLeft(fieldCollision)
    {
        this.#tetriMino.TurnLeft();
        this.#tetriMino.ResetPadding();

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
                this.#tetriMino.ResetPadding()
                return;
            }

            this.#tetriMino.NextPadding();
            isEnd = this.#tetriMino.IsEnd();
        }

        this.#tetriMino.TurnRight();
    }


    TurnRight(fieldCollision)
    {
        this.#tetriMino.TurnRight();
        this.#tetriMino.ResetPadding();

        const points    = this.#tetriMino.GetPoints();
        const pos       = this.#position;
        const collision = new Collision();

        while (!this.#tetriMino.IsEnd())
        {
            for (const point of points)
            {
                const x = point.GetX() + pos.GetX();
                const y = point.GetY() + pos.GetY();
                collision.Add(x, y);
            }

            if (!fieldCollision.IsOverlap(collision)) return;

            this.#tetriMino.NextPadding();
        }

        this.#tetriMino.TurnLeft();
    }


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
            this.#position.SetY(pos.GetY() + 1);
        }
    }


    GetBlock()
    {
        return this.#tetriMino.GetBlock();
    }


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
}