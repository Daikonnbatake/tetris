/***********************************************************************
 *
 *  UI の状態を管理するクラス.
 *
***********************************************************************/

class UIState
{
    #relation; // UIRelation: 他の UI との関係性.

    #isActive; // bool: この UI が選択可能なら true.
    #isShow;   // bool: この UI が表示されているなら true.
    #isFocus;  // bool: この UI がフォーカスされているなら true.

    #onActivate;   // SimpleEvent: アクティブ化イベント.
    #onInactivate; // SimpleEvent: 非アクティブ化イベント.
    #onShow;       // SimpleEvent: 表示イベント.
    #onHide;       // SimpleEvent: 非表示イベント.
    #onFocus;      // SimpleEvent: フォーカスイベント.
    #onDistruct;   // SimpleEvent: フォーカス解除イベント.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    +-----------------------------------------------------------------*/
    constructor(relation)
    {
        this.#relation = relation;

        this.#isActive = false;
        this.#isShow   = false;
        this.#isFocus  = false;

        this.#onActivate   = new SimpleEvent();
        this.#onInactivate = new SimpleEvent();
        this.#onShow       = new SimpleEvent();
        this.#onHide       = new SimpleEvent();
        this.#onFocus      = new SimpleEvent();
        this.#onDistruct   = new SimpleEvent();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: この UI をアクティブにする.
    *
    +-----------------------------------------------------------------*/
    Activate()
    {
        this.#isActive = true;
        this.#onActivate.Invoke();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: この UI を非アクティブにする.
    *
    +-----------------------------------------------------------------*/
    Inactivate()
    {
        this.#isActive = false;
        this.#onInactivate.Invoke();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: この UI を表示する.
    *
    +-----------------------------------------------------------------*/
    Show()
    {
        if (this.#isShow) return;

        this.#isShow = true;
        this.#onShow.Invoke();

        const left   = this.#relation.GetLeft();
        const right  = this.#relation.GetRight();
        const top    = this.#relation.GetTop();
        const bottom = this.#relation.GetBottom();

        if (left != null)   left.GetState().Show();
        if (right != null)  right.GetState().Show();
        if (top != null)    top.GetState().Show();
        if (bottom != null) bottom.GetState().Show();

    }


    /*-----------------------------------------------------------------+
    *
    * 説明: この UI を非表示にする.
    *
    +-----------------------------------------------------------------*/
    Hide()
    {
        if (!this.#isShow) return;

        this.#isShow = false;
        this.#onHide.Invoke();

        const left   = this.#relation.GetLeft();
        const right  = this.#relation.GetRight();
        const top    = this.#relation.GetTop();
        const bottom = this.#relation.GetBottom();

        if (left != null)   left.GetState().Hide();
        if (right != null)  right.GetState().Hide();
        if (top != null)    top.GetState().Hide();
        if (bottom != null) bottom.GetState().Hide();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: この UI にフォーカスする.
    *
    +-----------------------------------------------------------------*/
    Focus()
    {
        this.#isFocus = true;
        this.#onFocus.Invoke();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: この UI のフォーカスを外す.
    *
    +-----------------------------------------------------------------*/
    Distract()
    {
        this.#isFocus = false;
        this.#onDistruct.Invoke();
    }


    IsActive()
    {
        return this.#isActive;
    }


    IsShow()
    {
        return this.#isShow;
    }


    IsFocus()
    {
        return this.#isFocus;
    }


    SubscriveActivate(callback)
    {
        this.#onActivate.Add(callback);
    }


    SubscriveInactivate(callback)
    {
        this.#onInactivate.Add(callback);
    }


    SubscriveShow(callback)
    {
        this.#onShow.Add(callback);
    }


    SubscriveHide(callback)
    {
        this.#onHide.Add(callback);
    }


    SubscriveFocus(callback)
    {
        this.#onFocus.Add(callback);
    }

    SubscriveDistruct(callback)
    {
        this.#onDistruct.Add(callback);
    }
}