/***********************************************************************
 *
 *   操作可能テトリミノを生成するクラス.
 *
***********************************************************************/

class TetriMinoBuilder
{
    #minoCache; // TetriMinoCache:      テトリミノ形状のキャッシュ.
    #srsCache;  // SRSTransitionCache:  SRS遷移のキャッシュ.
    #relation;  // Obj<string, string>: テトリミノとSRS遷移の関係.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   TetriMinoCache     tetriMinoCache:     テトリミノのキャッシュ.
    *   SRSTransitionCache srsTransitionCache: SRSズラし設定のキャッシュ.
    *
    +-----------------------------------------------------------------*/
    constructor(tetriMinoCache, srsTransitionCache)
    {
        this.#minoCache = tetriMinoCache;
        this.#srsCache  = srsTransitionCache;
        this.#relation  = new Object();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノの形状と SRSズラし設定を紐づける.
    *
    * 引数:
    *   string tetriMinoTypeName: テトリミノの名前.
    *   string srsTypeName:       SRSズラし設定の名前.
    *
    +-----------------------------------------------------------------*/
    RelationMinoToSRS(tetriMinoTypeName, srsTypeName)
    {
        this.#relation[tetriMinoTypeName] = srsTypeName;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノの種類の一覧を取得する.
    *
    * 戻り値:
    *   Array<string>: テトリミノの種類一覧.
    *
    +-----------------------------------------------------------------*/
    GetTetriMinoTypes()
    {
        return this.#minoCache.GetTetriMinoTypes();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノを取得する.
    *
    * 引数:
    *   string tetriMinoName: このミノの名前.
    *
    * 戻り値:
    *   TetriMino: テトリミノ.
    *
    +-----------------------------------------------------------------*/
    GeTetriMino(tetriMinoName)
    {
        return this.#minoCache.GetTetriMino(tetriMinoName);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノを生成する.
    *
    * 引数:
    *   string tetriMinoName: 生成するテトリミノの名前.
    *
    * 戻り値:
    *   ControllableTetriMino: 操作可能テトリミノ.
    *
    +-----------------------------------------------------------------*/
    Generate(tetriMinoName)
    {
        const srsName = this.#relation[tetriMinoName];
        const mino    = this.#minoCache.GetTetriMino(tetriMinoName);
        const srs     = this.#srsCache.GetTransition(srsName);

        return new ControllableTetriMino(mino, srs);
    }
}