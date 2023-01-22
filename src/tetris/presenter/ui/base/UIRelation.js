/***********************************************************************
 *
 *  UI 同士の関係性を表すクラス.
 *
***********************************************************************/

class UIRelation
{
    /*-----------------------------------------------------------------+
    * 本当はよくないけど JavaScript では interface が使えないので
    * ダックタイピングで代用。
    *
    * UI要素とは下記メソッド
    *  - GetRelation() -> UIRelation {}
    *  - GetAction() -> UIAction {}
    *  - GetState() -> UIState {}
    *
    * を含むクラスを指すものとする。
    +-----------------------------------------------------------------*/

    #child;      // UI要素 | null: 子要素.
    #left;       // UI要素 | null: 自分の左隣.
    #right;      // UI要素 | null: 自分の右隣.
    #top;        // UI要素 | null: 自分の上隣.
    #bottom;     // UI要素 | null: 自分の下隣.
    #backButton; // bool:          自身が「戻る」ボタンなら true.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   bool backButton: 自身が「戻る」ボタンなら true.
    *
    +-----------------------------------------------------------------*/
    constructor(backButton = false)
    {
        this.#child      = null;
        this.#left       = null;
        this.#right      = null;
        this.#top        = null;
        this.#bottom     = null;
        this.#backButton = backButton;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 子要素を取得する.
    *
    * 戻り値:
    *   UI要素 | null: 子要素.
    *
    +-----------------------------------------------------------------*/
    GetChild()
    {
        return this.#child;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 左隣の要素を取得する.
    *
    * 戻り値:
    *   UI要素 | null: 左隣の要素.
    *
    +-----------------------------------------------------------------*/
    GetLeft()
    {
        return this.#left;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 右隣の要素を取得する.
    *
    * 戻り値:
    *   UI要素 | null: 右隣の要素.
    *
    +-----------------------------------------------------------------*/
    GetRight()
    {
        return this.#right;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 上隣の要素を取得する.
    *
    * 戻り値:
    *   UI要素 | null: 上隣の要素.
    *
    +-----------------------------------------------------------------*/
    GetTop()
    {
        return this.#top;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 下隣の要素を取得する.
    *
    * 戻り値:
    *   UI要素 | null: 下隣の要素.
    *
    +-----------------------------------------------------------------*/
    GetBottom()
    {
        return this.#bottom;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 自身が「戻る」ボタンなら true.
    *
    * 戻り値:
    *   bool: 自身が「戻る」ボタンかどうか.
    *
    +-----------------------------------------------------------------*/
    IsBackButton()
    {
        return this.#backButton;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 子要素を設定する.
    *
    * 引数:
    *   UI要素 | null: 子要素.
    *
    +-----------------------------------------------------------------*/
    SetChild(element)
    {
        this.#child = element;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 左隣の要素を設定する.
    *
    * 引数:
    *   UI要素 | null: 左隣の要素.
    *
    +-----------------------------------------------------------------*/
    SetLeft(element)
    {
        this.#left = element;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 右隣の要素を設定する.
    *
    * 引数:
    *   UI要素 | null: 右隣の要素.
    *
    +-----------------------------------------------------------------*/
    SetRight(element)
    {
        this.#right = element;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 上隣の要素を設定する.
    *
    * 引数:
    *   UI要素 | null: 上隣の要素.
    *
    +-----------------------------------------------------------------*/
    SetTop(element)
    {
        this.#top = element;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 下隣の要素を設定する.
    *
    * 引数:
    *   UI要素 | null: 下隣の要素.
    *
    +-----------------------------------------------------------------*/
    SetBottom(element)
    {
        this.#bottom = element;
    }
}