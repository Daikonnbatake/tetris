/***********************************************************************
 *
 *   SRS のズラし遷移を生成するための申込用紙の役割を果たすクラス.
 *
***********************************************************************/

class SRSTransitionProperties
{
    #name;    // string:                    この遷移の名前.
    #srsPadd; // Obj<string, Array<Point>>: 角度毎のズラし量.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   string name: この遷移の名前.
    *
    +-----------------------------------------------------------------*/
    constructor(name)
    {
        this.#name = name;
        this.#srsPadd = new Object();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 北から西へ回転した際のSRSのズラしの遷移を設定する.
    *
    * 引数:
    *   Array<Point> points: 遷移設定.
    *
    +-----------------------------------------------------------------*/
    SetNtoW(points)
    {
        this.#srsPadd[RotateDiff.NtoW()] = points;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 北から東へ回転した際のSRSのズラしの遷移を設定する.
    *
    * 引数:
    *   Array<Point> points: 遷移設定.
    *
    +-----------------------------------------------------------------*/
    SetNtoE(points)
    {
        this.#srsPadd[RotateDiff.NtoE()] = points;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 東から北へ回転した際のSRSのズラしの遷移を設定する.
    *
    * 引数:
    *   Array<Point> points: 遷移設定.
    *
    +-----------------------------------------------------------------*/
    SetEtoN(points)
    {
        this.#srsPadd[RotateDiff.EtoN()] = points;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 東から南へ回転した際のSRSのズラしの遷移を設定する.
    *
    * 引数:
    *   Array<Point> points: 遷移設定.
    *
    +-----------------------------------------------------------------*/
    SetEtoS(points)
    {
        this.#srsPadd[RotateDiff.EtoS()] = points;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 南から東へ回転した際のSRSのズラしの遷移を設定する.
    *
    * 引数:
    *   Array<Point> points: 遷移設定.
    *
    +-----------------------------------------------------------------*/
    SetStoE(points)
    {
        this.#srsPadd[RotateDiff.StoE()] = points;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 南から西へ回転した際のSRSのズラしの遷移を設定する.
    *
    * 引数:
    *   Array<Point> points: 遷移設定.
    *
    +-----------------------------------------------------------------*/
    SetStoW(points)
    {
        this.#srsPadd[RotateDiff.StoW()] = points;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 西から南へ回転した際のSRSのズラしの遷移を設定する.
    *
    * 引数:
    *   Array<Point> points: 遷移設定.
    *
    +-----------------------------------------------------------------*/
    SetWtoS(points)
    {
        this.#srsPadd[RotateDiff.WtoS()] = points;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 西から北へ回転した際のSRSのズラしの遷移を設定する.
    *
    * 引数:
    *   Array<Point> points: 遷移設定.
    *
    +-----------------------------------------------------------------*/
    SetWtoN(points)
    {
        this.#srsPadd[RotateDiff.WtoN()] = points;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: この遷移の名前を取得する.
    *
    * 戻り値:
    *   string: この遷移の名前.
    *
    +-----------------------------------------------------------------*/
    GetName()
    {
        return this.#name;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 北から西へ回転した際のSRSのズラしの遷移を取得する.
    *
    * 戻り値:
    *   Array<Point>: 遷移設定.
    *
    +-----------------------------------------------------------------*/
    GetNtoW()
    {
        return this.#srsPadd[RotateDiff.NtoW()];
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 北から東へ回転した際のSRSのズラしの遷移を取得する.
    *
    * 戻り値:
    *   Array<Point>: 遷移設定.
    *
    +-----------------------------------------------------------------*/
    GetNtoE()
    {
        return this.#srsPadd[RotateDiff.NtoE()];
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 東から北へ回転した際のSRSのズラしの遷移を取得する.
    *
    * 戻り値:
    *   Array<Point>: 遷移設定.
    *
    +-----------------------------------------------------------------*/
    GetEtoN()
    {
        return this.#srsPadd[RotateDiff.EtoN()];
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 東から南へ回転した際のSRSのズラしの遷移を取得する.
    *
    * 戻り値:
    *   Array<Point>: 遷移設定.
    *
    +-----------------------------------------------------------------*/
    GetEtoS()
    {
        return this.#srsPadd[RotateDiff.EtoS()];
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 南から東へ回転した際のSRSのズラしの遷移を取得する.
    *
    * 戻り値:
    *   Array<Point>: 遷移設定.
    *
    +-----------------------------------------------------------------*/
    GetStoE()
    {
        return this.#srsPadd[RotateDiff.StoE()];
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 南から西へ回転した際のSRSのズラしの遷移を取得する.
    *
    * 戻り値:
    *   Array<Point>: 遷移設定.
    *
    +-----------------------------------------------------------------*/
    GetStoW()
    {
        return this.#srsPadd[RotateDiff.StoW()];
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 西から南へ回転した際のSRSのズラしの遷移を取得する.
    *
    * 戻り値:
    *   Array<Point>: 遷移設定.
    *
    +-----------------------------------------------------------------*/
    GetWtoS()
    {
        return this.#srsPadd[RotateDiff.WtoS()];
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 西から北へ回転した際のSRSのズラしの遷移を取得する.
    *
    * 戻り値:
    *   Array<Point>: 遷移設定.
    *
    +-----------------------------------------------------------------*/
    GetWtoN()
    {
        return this.#srsPadd[RotateDiff.WtoN()];
    }
}