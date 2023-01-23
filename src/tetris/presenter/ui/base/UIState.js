/***********************************************************************
 *
 *   UI の状態を管理するクラス.
 *
***********************************************************************/

class UIState
{
    #relation;     // UIRelation: 他のUIとの関係性を表すインスタンス.

    #isActive;     // bool: このUIが選択可能なら true.
    #isShow;       // bool: このUIが表示されているなら true.
    #isFocus;      // bool: このUIがフォーカスされているなら true.

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
    * 引数:
    *   UIRelation relation: UIの関係性を表すインスタンス.
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
    * 説明: このUIをアクティブにする.
    *
    +-----------------------------------------------------------------*/
    Activate()
    {
        this.#isActive = true;
        this.#onActivate.Invoke();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このUIを非アクティブにする.
    *
    +-----------------------------------------------------------------*/
    Inactivate()
    {
        this.#isActive = false;
        this.#onInactivate.Invoke();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このUIを表示する.
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
    * 説明: このUIを非表示にする.
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
    * 説明: このUIにフォーカスする.
    *
    +-----------------------------------------------------------------*/
    Focus()
    {
        this.#isFocus = true;
        this.#onFocus.Invoke();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このUIのフォーカスを外す.
    *
    +-----------------------------------------------------------------*/
    Distract()
    {
        this.#isFocus = false;
        this.#onDistruct.Invoke();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このUIがアクティブなら true を返す.
    *
    * 戻り値:
    *   bool: このUIがアクティブなら true を返す.
    *
    +-----------------------------------------------------------------*/
    IsActive()
    {
        return this.#isActive;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このUIが表示されているなら true を返す.
    *
    * 戻り値:
    *   bool: このUIが表示されているなら true を返す.
    *
    +-----------------------------------------------------------------*/
    IsShow()
    {
        return this.#isShow;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このUIがフォーカスされているなら true を返す.
    *
    * 戻り値:
    *   bool: このUIがフォーカスされているなら true を返す.
    *
    +-----------------------------------------------------------------*/
    IsFocus()
    {
        return this.#isFocus;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このUIがアクティブになった時に呼び出すコールバックを登録する.
    *
    * 引数:
    *   function callback: コールバック.
    *
    +-----------------------------------------------------------------*/
    SubscriveActivate(callback)
    {
        this.#onActivate.Add(callback);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このUIが非アクティブになった時に呼び出すコールバックを登録する.
    *
    * 引数:
    *   function callback: コールバック.
    *
    +-----------------------------------------------------------------*/
    SubscriveInactivate(callback)
    {
        this.#onInactivate.Add(callback);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このUIが表示された時に呼び出すコールバックを登録する.
    *
    * 引数:
    *   function callback: コールバック.
    *
    +-----------------------------------------------------------------*/
    SubscriveShow(callback)
    {
        this.#onShow.Add(callback);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このUIが非表示になった時に呼び出すコールバックを登録する.
    *
    * 引数:
    *   function callback: コールバック.
    *
    +-----------------------------------------------------------------*/
    SubscriveHide(callback)
    {
        this.#onHide.Add(callback);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このUIがフォーカスされた時に呼び出すコールバックを登録する.
    *
    * 引数:
    *   function callback: コールバック.
    *
    +-----------------------------------------------------------------*/
    SubscriveFocus(callback)
    {
        this.#onFocus.Add(callback);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このUIからフォーカスが外れた時に呼び出すコールバックを登録する.
    *
    * 引数:
    *   function callback: コールバック.
    *
    +-----------------------------------------------------------------*/
    SubscriveDistruct(callback)
    {
        this.#onDistruct.Add(callback);
    }
}