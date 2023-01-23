/***********************************************************************
 *
 *   テトリミノの向きを制御するクラス.
 *
***********************************************************************/

class TetriMinoAngle
{
    #angle; // number: 角度(-2 ≦ angle < 2).


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    +-----------------------------------------------------------------*/
    constructor()
    {
        this.#angle = 0;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 左に 90 度回転する.
    *
    +-----------------------------------------------------------------*/
    TurnLeft()
    {
        this.#angle = ((this.#angle + 2 + 3) % 4) - 2;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 右に 90 度回転する.
    *
    +-----------------------------------------------------------------*/
    TurnRight()
    {
        this.#angle = ((this.#angle + 2 + 1) % 4) - 2;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 座標の配列と原点を与えて回転後の座標配列を求める.
    *
    * 戻り値:
    *   Array<Point>: 回転後の座標の配列.
    *
    +-----------------------------------------------------------------*/
    ApplyTurnEffect(points, origin)
    {
        /*- note ------------------------------------------------------+
        * 中心点を指定して座標を回転させる式(アフィン変換).
        *
        * X = (x cosΘ) - (y sinΘ) + (Cx - (Cx cosΘ) + (Cy sinΘ))
        * Y = (x sinΘ) + (y cosΘ) + (Cy - (Cx sinΘ) - (Cy cosΘ))
        +-------------------------------------------------------------*/

        let result   = [];
        let originX  = origin.GetX();
        let originY  = origin.GetY();
        let quarter  = Math.PI / 2;
        let sin      = Math.round(Math.sin(this.#angle * quarter));
        let cos      = Math.round(Math.cos(this.#angle * quarter));
        let paddingX = (originX - (originX * cos)) + (originY * sin);
        let paddingY = (originY - (originX * sin)) - (originY * cos);

        for (const point of points)
        {
            let targetX = point.GetX();
            let targetY = point.GetY();
            let calcX   = (targetX * cos) - (targetY * sin) + paddingX;
            let calcY   = (targetX * sin) + (targetY * cos) + paddingY;

            result.push(new Point(calcX, calcY));
        }

        return result;
    }
}