/***********************************************************************
 *
 *  操作可能テトリミノを生成するクラス.
 *
***********************************************************************/

class TetriMinoBuilder
{
    #minoCache; // TetriMinoCache:      テトリミノ形状のキャッシュ.
    #srsCache;  // SRSTransitionCache:  SRS遷移のキャッシュ.
    #relation;  // Obj<string, string>: テトリミノとSRS遷移の関係.


    constructor(tetriMinoCache, srsTransitionCache)
    {
        this.#minoCache = tetriMinoCache;
        this.#srsCache  = srsTransitionCache;
        this.#relation  = new Object();
    }


    RelationMinoToSRS(tetriMinoTypeName, srsTypeName)
    {
        this.#relation[tetriMinoTypeName] = srsTypeName;
    }


    GetTetriMinoTypes()
    {
        return this.#minoCache.GetTetriMinoTypes();
    }


    GeTetriMino(tetriMinoName)
    {
        return this.#minoCache.GetTetriMino(tetriMinoName);
    }


    Generate(tetriMinoName)
    {
        const srsName = this.#relation[tetriMinoName];
        const mino    = this.#minoCache.GetTetriMino(tetriMinoName);
        const srs     = this.#srsCache.GetTransition(srsName);

        return new ControllableTetriMino(mino, srs);
    }
}