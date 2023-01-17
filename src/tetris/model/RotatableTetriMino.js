/***********************************************************************
 *
 * 　回転可能なテトリミノを表すクラス.
 *
***********************************************************************/

class RotatableTetriMino
{
    #tetriMino;      // TetriMino:       テトリミノの形状を管理する.
    #srsTransition;  // SRSTransition:   SRSのズラし状態を管理する.
    #rotateDiff;     // RotateDiff:      回転の差を管理する.
    #angle;          // TetriMinoAngle:  角度を管理する.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   TetriMino      tetriMino:      テトリミノ.
    *   SRSTransition  srsTransition:  SRSズラし設定.
    *
    +-----------------------------------------------------------------*/
    constructor(tetriMino, srsTransition)
    {
        this.#tetriMino      = tetriMino;
        this.#srsTransition  = srsTransition;
        this.#rotateDiff     = new RotateDiff();
        this.#angle          = new TetriMinoAngle();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 左に 90 度回転する.
    *
    +-----------------------------------------------------------------*/
    TurnLeft()
    {
        this.#angle.TurnLeft();
        this.#rotateDiff.TurnLeft();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 右に 90 度回転する.
    *
    +-----------------------------------------------------------------*/
    TurnRight()
    {
        this.#angle.TurnRight();
        this.#rotateDiff.TurnRight();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: SRSのズラしを1つ進める.
    *
    +-----------------------------------------------------------------*/
    NextPadding()
    {
        const diff = this.#rotateDiff.ToString();
        this.#srsTransition.Next(diff);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: SRSのズラしをリセットする.
    *
    +-----------------------------------------------------------------*/
    ResetPadding()
    {
        const diff = this.#rotateDiff.ToString();
        this.#srsTransition.ResetTransition(diff);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: SRSのズラし量を取得する.
    *
    * 戻り値:
    *   Point: SRSのズラし量.
    +-----------------------------------------------------------------*/
    GetPadding()
    {
        const diff = this.#rotateDiff.ToString();
        return this.#srsTransition.GetVolume(diff);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このミノを構成するブロックを取得する.
    *
    * 戻り値:
    *   Block: ブロック.
    *
    +-----------------------------------------------------------------*/
    GetBlock()
    {
        return this.#tetriMino.GetBlock();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノの中心座標を取得する.
    *
    * 戻り値:
    *   Point: テトリミノの中心座標.
    *
    +-----------------------------------------------------------------*/
    GetOrigin()
    {
        const tmp   = this.#tetriMino.GetOrigin();
        const posX  = Math.floor(tmp.GetX());
        const posY  = Math.floor(tmp.GetY());
        const point = new Point(posX, posY);
        return point;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 回転/SRSを反映したテトリミノの形状(座標の配列)を取得する.
    *
    * 戻り値:
    *   Array<Point>: テトリミノの形状.
    *
    +-----------------------------------------------------------------*/
    GetPoints()
    {
        const shape     = this.#tetriMino.GetPoints();
        const origin    = this.#tetriMino.GetOrigin();
        const rotated   = this.#angle.ApplyTurnEffect(shape, origin);
        const diff      = this.#rotateDiff.ToString();
        const padding   = this.#srsTransition.GetVolume(diff);
        const paddingX  = padding.GetX();
        const paddingY  = padding.GetY();

        let result = new Array();
        for (const point of rotated)
        {
            const x = point.GetX() + paddingX;
            const y = point.GetY() + paddingY;
            result.push(new Point(x, y));
        }
        return result;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: SRS の状態が最後なら true を返す.
    *
    * 戻り値:
    *   bool: SRS の状態.
    *
    +-----------------------------------------------------------------*/
    IsEnd()
    {
        const diff = this.#rotateDiff.ToString();
        return this.#srsTransition.IsEnd(diff);
    }
}