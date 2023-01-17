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


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   Point  position:  横幅.
    *   Angle  angle:     高さ.
    *   Scale  scale:     拡大率.
    *   Pivot  pivot:     中心点.
    *
    +-----------------------------------------------------------------*/
    constructor(position, angle, scale, pivot)
    {
        this.#position = position;
        this.#angle    = angle;
        this.#scale    = scale;
        this.#pivot    = pivot;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 全てのフィールドが初期値の Transform 構造体を取得する.
    *
    * 戻り値:
    *   Transform: 全フィールドが初期値の Transform 構造体.
    *
    +-----------------------------------------------------------------*/
    static Default()
    {
        return new Transform(
            new Point(0, 0),
            new Angle(0),
            new Scale(1, 1),
            new Pivot(0, 0)
        );
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 位置を取得する.
    *
    * 戻り値:
    *   Point: 位置.
    *
    +-----------------------------------------------------------------*/
    GetPosition()
    {
        return this.#position;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 回転を取得する.
    *
    * 戻り値:
    *   Angle: 回転.
    *
    +-----------------------------------------------------------------*/
    GetAngle()
    {
        return this.#angle;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 拡大率を取得する.
    *
    * 戻り値:
    *   Scale: 拡大率.
    *
    +-----------------------------------------------------------------*/
    GetScale()
    {
        return this.#scale;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 中心点を取得する.
    *
    * 戻り値:
    *   Pivot: 中心点.
    *
    +-----------------------------------------------------------------*/
    GetPivot()
    {
        return this.#pivot;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 位置を設定する.
    *
    * 引数:
    *   number: x X座標.
    *   number: y Y座標.
    *
    +-----------------------------------------------------------------*/
    SetPosition(x, y)
    {
        this.#position.SetX(x);
        this.#position.SetY(y);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 位置を設定する.
    *
    * 引数:
    *   number: degree 角度.
    *
    +-----------------------------------------------------------------*/
    SetAngle(degree)
    {
        this.#angle.SetDegree(degree);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 拡大率を設定する.
    *
    * 引数:
    *   number: x X軸方向の拡大率.
    *   number: y Y軸方向の拡大率.
    *
    +-----------------------------------------------------------------*/
    SetScale(x, y)
    {
        this.#scale.SetX(x);
        this.#scale.SetY(y);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 中心点を設定する.
    *
    * 引数:
    *   number: x X座標.
    *   number: y Y座標.
    *
    +-----------------------------------------------------------------*/
    SetPivot(x, y)
    {
        this.#pivot.SetX(x);
        this.#pivot.SetY(y);
    }
}