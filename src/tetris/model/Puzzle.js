/***********************************************************************
 *
 *  パズル本体を制御するクラス.
 *
***********************************************************************/

class Puzzle
{
    #field;
    #fieldCollision;
    #tetriMino;
    #tetriMinoFixed;

    constructor(fieldWidth, fieldHeight)
    {
        this.#field = new Field(fieldWidth, fieldHeight);
        this.#fieldCollision = this.#field.GetCollision();
        this.#tetriMinoFixed = false;
    }


    NewTetriMino(controllableTetriMino)
    {
        this.#tetriMino = controllableTetriMino;
        this.#tetriMinoFixed = false;
    }


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


    FixTetriMino()
    {
        if (this.#tetriMinoFixed) return;
        this.#field.FlushMutable();
        this.#field.DeleteLines();
        this.#fieldCollision = this.#field.GetCollision();
        this.#tetriMinoFixed = true;
    }


    GetField()
    {
        return this.#field.GetField();
    }


    IsGround()
    {
        return this.#tetriMino.IsGround(this.#fieldCollision);
    }
}