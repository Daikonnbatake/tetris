/***********************************************************************
 *
 * 　2次元の変形を表す構造体.
 *
***********************************************************************/

class Transform
{
    #position; // Point: 座標.
    #angle;    // Angle: 回転.
    #scale;    // Scale: 拡大率.
    #pivot;    // Pivot: 中心点.
    #flipX;    // bool:  水平反転.
    #flipY;    // bool:  垂直反転.


    constructor(position, angle, scale, pivot)
    {
        this.#position = position;
        this.#angle    = angle;
        this.#scale    = scale;
        this.#pivot    = pivot;
        this.#flipX    = false;
        this.#flipY    = false;
    }


    static Default()
    {
        return new Transform(
            new Point(0, 0),
            new Angle(0),
            new Scale(1, 1),
            new Pivot(0, 0)
        );
    }


    GetPosition()
    {
        return this.#position;
    }


    GetAngle()
    {
        return this.#angle;
    }


    GetScale()
    {
        return this.#scale;
    }


    GetPivot()
    {
        return this.#pivot;
    }


    SetPosition(x, y)
    {
        this.#position.SetX(x);
        this.#position.SetY(y);
    }


    SetAngle(degree)
    {
        this.#angle.SetDegree(degree);
    }


    SetScale(x, y)
    {
        this.#scale.SetX(x);
        this.#scale.SetY(y);
    }


    SetPivot(x, y)
    {
        this.#pivot.SetX(x);
        this.#pivot.SetY(y);
    }
}