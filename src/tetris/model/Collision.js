/***********************************************************************
 *
 * 　当たり判定を行うクラス.
 *
***********************************************************************/

class Collision
{
    #points; // Array<block>: 当たり判定を取るための座標の配列.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    +-----------------------------------------------------------------*/
    constructor()
    {
        this.#points = [];
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 当たり判定を行う座標を追加する.
    *
    * 引数:
    *   number x: X座標.
    *   number y: Y座標.
    *
    +-----------------------------------------------------------------*/
    Add(x, y)
    {
        this.#points.push(new Point(x, y));
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 当たり判定をリセットする.
    *
    +-----------------------------------------------------------------*/
    Clear()
    {
        this.#points = [];
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 重なり判定を行う.
    *
    * 引数:
    *   Collision collision: 判定対象.
    *
    +-----------------------------------------------------------------*/
    IsOverlap(collision)
    {
        for (const point of collision.#points)
        {
            const result = this.#points.find(value =>
            {
                const x = point.GetX() === value.GetX();
                const y = point.GetY() === value.GetY();
                return x && y;
            });

            if (result) return true;
        }
        return false;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 接地判定を行う.
    *
    * 引数:
    *   Collision collision: 判定対象.
    *
    +-----------------------------------------------------------------*/
    IsGround(collision)
    {
        for (const point of collision.#points)
        {
            const result = this.#points.find(value =>
            {
                const x = point.GetX() === value.GetX();
                const y = point.GetY() === value.GetY() - 1;
                return x && y;
            });

            if (result) return true;
        }

        return false;
    }
}