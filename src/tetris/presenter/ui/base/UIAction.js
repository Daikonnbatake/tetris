/***********************************************************************
 *
 *   UI の抽象的なイベントを纏めたクラス.
 *
***********************************************************************/

class UIAction
{
    #leftArrow;    // PhysicalButtonEvent: 十字パッド左.
    #rightArrow;   // PhysicalButtonEvent: 十字パッド右.
    #upArrow;      // PhysicalButtonEvent: 十字パッド上.
    #downArrow;    // PhysicalButtonEvent: 十字パッド下.
    #aButton;      // PhysicalButtonEvent: Aボタン.
    #bButton;      // PhysicalButtonEvent: Bボタン.
    #selectButton; // PhysicalButtonEvent: セレクトボタン.
    #menuButton;   // PhysicalButtonEvent: メニューボタン.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    +-----------------------------------------------------------------*/
    constructor()
    {
        this.#leftArrow    = new PhysicalButtonEvent();
        this.#rightArrow   = new PhysicalButtonEvent();
        this.#upArrow      = new PhysicalButtonEvent();
        this.#downArrow    = new PhysicalButtonEvent();
        this.#aButton      = new PhysicalButtonEvent();
        this.#bButton      = new PhysicalButtonEvent();
        this.#selectButton = new PhysicalButtonEvent();
        this.#menuButton   = new PhysicalButtonEvent();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 十字パッド左のオブザーバーを取得する.
    *
    * 引数:
    *   PhysicalButtonEvent: 十字パッド左のオブザーバー.
    *
    +-----------------------------------------------------------------*/
    GetLeftArrow()
    {
        return this.#leftArrow;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 十字パッド右のオブザーバーを取得する.
    *
    * 引数:
    *   PhysicalButtonEvent: 十字パッド右のオブザーバー.
    *
    +-----------------------------------------------------------------*/
    GetRightArrow()
    {
        return this.#rightArrow;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 十字パッド上のオブザーバーを取得する.
    *
    * 引数:
    *   PhysicalButtonEvent: 十字パッド上のオブザーバー.
    *
    +-----------------------------------------------------------------*/
    GetUpArrow()
    {
        return this.#upArrow;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 十字パッド下のオブザーバーを取得する.
    *
    * 引数:
    *   PhysicalButtonEvent: 十字パッド下のオブザーバー.
    *
    +-----------------------------------------------------------------*/
    GetDownArrow()
    {
        return this.#downArrow;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 決定ボタンのオブザーバーを取得する.
    *
    * 引数:
    *   PhysicalButtonEvent: 決定ボタンのオブザーバー.
    *
    +-----------------------------------------------------------------*/
    GetPositiveButton()
    {
        return this.#aButton;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: キャンセルボタンのオブザーバーを取得する.
    *
    * 引数:
    *   PhysicalButtonEvent: キャンセルボタンのオブザーバー.
    *
    +-----------------------------------------------------------------*/
    GetNegativeButton()
    {
        return this.#bButton;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: セレクトボタンのオブザーバーを取得する.
    *
    * 引数:
    *   PhysicalButtonEvent: セレクトボタンのオブザーバー.
    *
    +-----------------------------------------------------------------*/
    GetSelectButton()
    {
        return this.#selectButton;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: メニューボタンのオブザーバーを取得する.
    *
    * 引数:
    *   PhysicalButtonEvent: メニューボタンのオブザーバー.
    *
    +-----------------------------------------------------------------*/
    GetMenuButton()
    {
        return this.#menuButton;
    }
}