/***********************************************************************
 *
 *  テトリミノをキャッシュするクラス.
 *
***********************************************************************/

class TetriMinoCache
{
    #cache; // Obj<string, TetriMino>: テトリミノを持つオブジェクト.


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
    * 説明: テトリミノを登録する.
    *
    * 引数:
    *   string       name:   このミノの名前.
    *   Block        block:  このミノを構成するブロック.
    *   Point        origin: このミノの中心点の座標.
    *   Array<Point> points: このミノの形を表す座標の配列.
    *
    +-----------------------------------------------------------------*/
    RegistTetriMino(name, block, origin, points)
    {
        const tetriMino = new TetriMino(block, origin, points);
        this.#cache[name] = tetriMino;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノを取得する.
    *
    * 引数:
    *   string name: このミノの名前.
    *
    * 戻り値:
    *   TetriMino: テトリミノ.
    *
    +-----------------------------------------------------------------*/
    GetTetriMino(name)
    {
        return this.#cache[name];
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
        let result = new Array();
        for (const key in this.#cache) result.push(key);
        return result;
    }
}