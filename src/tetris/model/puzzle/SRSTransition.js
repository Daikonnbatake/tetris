/***********************************************************************
 *
 *   SRS のズラしの遷移を表すクラス.
 *
***********************************************************************/

class SRSTransition
{
    #paddingInfo; // Obj<string, RotatePadding> SRS ズラし情報を持つ.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    +-----------------------------------------------------------------*/
    constructor()
    {
        this.#paddingInfo = new Object();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: SRS ズラしの遷移を登録する.
    *
    * 引数:
    *   string rotateDiffString: 角度の差を表す文字列(RotateDiff で取得).
    *   Array<Point> points:     SRS ズラしの遷移を表す Point の配列.
    *
    +-----------------------------------------------------------------*/
    RegistTransition(rotateDiffString, points)
    {
        const length      = points.length;
        let   before      = null;
        let   paddingList = new Array();

        for (let i = 0; i<length; i++)
        {
            const isEnd  = (i === length-1);
            const paddingVolume = new RotatePadding(points[i], isEnd);
            paddingList.push(paddingVolume);
        }

        for (const volume of paddingList)
        {
            let now = volume;
            if (before === null) paddingList[length-1].ChangeNext(now);
            else before.ChangeNext(now);
            before = now;
        }

        this.#paddingInfo[rotateDiffString] = paddingList[0];
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: SRS ズラしの遷移をリセットする.
    *
    * 引数:
    *   string rotateDiffString: 角度の差を表す文字列(RotateDiff で取得).
    *
    +-----------------------------------------------------------------*/
    ResetTransition(rotateDiffString)
    {
        const now = this.#paddingInfo[rotateDiffString];
        this.#paddingInfo[rotateDiffString] = now.Begin();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: SRS ズラしの最初の状態を取得する.
    *
    * 引数:
    *   string rotateDiffString: 角度の差を表す文字列(RotateDiff で取得).
    *
    +-----------------------------------------------------------------*/
    Begin(rotateDiffString)
    {
        let volume = this.#paddingInfo[rotateDiffString];
        while (!volume.IsEnd()) volume = volume.Next();
        this.#paddingInfo[rotateDiffString] = volume.Next();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: SRS ズラしの最後の状態を取得する.
    *
    * 引数:
    *   string rotateDiffString: 角度の差を表す文字列(RotateDiff で取得).
    *
    +-----------------------------------------------------------------*/
    End(rotateDiffString)
    {
        let volume = this.#paddingInfo[rotateDiffString];
        while (!volume.IsEnd()) volume = volume.Next();
        this.#paddingInfo[rotateDiffString] = volume;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: SRS ズラしの次の状態を取得する.
    *
    * 引数:
    *   string rotateDiffString: 角度の差を表す文字列(RotateDiff で取得).
    *
    +-----------------------------------------------------------------*/
    Next(rotateDiffString)
    {
        const now  = this.#paddingInfo[rotateDiffString];
        const next = now.Next();
        this.#paddingInfo[rotateDiffString] = next;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 現在のズラし量を取得する.
    *
    * 引数:
    *   string rotateDiffString: 角度の差を表す文字列(RotateDiff で取得).
    *
    +-----------------------------------------------------------------*/
    GetVolume(rotateDiffString)
    {
        return this.#paddingInfo[rotateDiffString].GetPaddingVolume();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: SRS のズラし状態が最後なら true を返す.
    *
    * 引数:
    *   string rotateDiffString: 角度の差を表す文字列(RotateDiff で取得).
    *
    +-----------------------------------------------------------------*/
    IsEnd(rotateDiffString)
    {
        return this.#paddingInfo[rotateDiffString].IsEnd();
    }
}