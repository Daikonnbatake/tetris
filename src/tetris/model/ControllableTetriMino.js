/***********************************************************************
 *
 * 　制御可能なテトリミノを表すクラス.
 *
***********************************************************************/

class ControllableTetriMino
{
    #tetriMino;
    #position;
    #isGround;


    constructor(tetriMino, srsTransition)
    {
        this.#tetriMino = new RotatableTetriMino(tetriMino, srsTransition);
        this.#position  = new Point(4, -1);
        this.#isGround  = false;
    }


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
            this.#position.SetX(pos.GetX() - 1);
        }
    }


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
                this.#tetriMino.ResetPadding();
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
                return;
            }

            this.#tetriMino.NextPadding();
            isEnd = this.#tetriMino.IsEnd();
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

        this.#isGround = fieldCollision.IsGround(collision);
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
}