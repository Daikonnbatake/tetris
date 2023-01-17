/***********************************************************************
 *
 * 　SRS のズラしの遷移をキャッシュするクラス.
 *
***********************************************************************/

class SRSTransitionCache
{
    #cache; // Obj<string, SRSTransition>: SRSズラし遷移を保持する.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    +-----------------------------------------------------------------*/
    constructor()
    {
        this.#cache = new Object();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 新しい遷移を登録する.
    *
    * 引数:
    *   SRSTransitionProperties properties: 遷移のプロパティ.
    *
    +-----------------------------------------------------------------*/
    RegistTransition(srsTransitionProps)
    {
        const typeName = srsTransitionProps.GetName();
        const NtoW = srsTransitionProps.GetNtoW();
        const NtoE = srsTransitionProps.GetNtoE();
        const EtoN = srsTransitionProps.GetEtoN();
        const EtoS = srsTransitionProps.GetEtoS();
        const StoE = srsTransitionProps.GetStoE();
        const StoW = srsTransitionProps.GetStoW();
        const WtoS = srsTransitionProps.GetWtoS();
        const WtoN = srsTransitionProps.GetWtoN();
        this.#cache[typeName] = new SRSTransition();
        this.#cache[typeName].RegistTransition(RotateDiff.NtoW(), NtoW);
        this.#cache[typeName].RegistTransition(RotateDiff.NtoE(), NtoE);
        this.#cache[typeName].RegistTransition(RotateDiff.EtoN(), EtoN);
        this.#cache[typeName].RegistTransition(RotateDiff.EtoS(), EtoS);
        this.#cache[typeName].RegistTransition(RotateDiff.StoE(), StoE);
        this.#cache[typeName].RegistTransition(RotateDiff.StoW(), StoW);
        this.#cache[typeName].RegistTransition(RotateDiff.WtoS(), WtoS);
        this.#cache[typeName].RegistTransition(RotateDiff.WtoN(), WtoN);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: SRS のズラしの遷移を取得する.
    *
    * 引数:
    *   string typeName: 遷移の名前.
    *
    +-----------------------------------------------------------------*/
    GetTransition(typeName)
    {
        return this.#cache[typeName];
    }
}