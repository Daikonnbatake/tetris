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
    #flipX;    // bool:  水平反転.
    #flipY;    // bool:  垂直反転.


    constructor(position, angle, scale)
    {
        this.#position = position;
        this.#angle    = angle;
        this.#scale    = scale;
    }


    static Default()
    {
        return new Transform(
            new Point(0, 0),
            new Angle(0),
            new Scale(1, 1)
        );
    }
}