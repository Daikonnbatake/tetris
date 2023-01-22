/***********************************************************************
 *
 * 　簡易的なイベント登録/発火を行うクラス.
 *
***********************************************************************/

class SimpleEvent
{
    #subscribers; // Set<function>: コールバック関数.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    +-----------------------------------------------------------------*/
    constructor()
    {
        this.#subscribers = new Set();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: コールバックを登録する.
    *
    * 引数:
    *   function callback: このイベントを購読するコールバック関数.
    *
    +-----------------------------------------------------------------*/
    Add(callback)
    {
        this.#subscribers.add(callback);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: コールバックを削除する.
    *
    * 引数:
    *   function callback: このイベントの購読をやめるコールバック関数.
    *
    +-----------------------------------------------------------------*/
    Remove(callback)
    {
        this.#subscribers.delete(callback);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: イベント呼び出し.
    *
    * 引数:
    *   any ...args: 可変長引数(扱いに注意する事).
    *
    * メモ:
    *   静的型付け言語勢としては色々不安な書き方なので改善案を模索中です.
    *
    +-----------------------------------------------------------------*/
    Invoke(...args)
    {
        for (const callback of this.#subscribers) callback(...args);
    }
}