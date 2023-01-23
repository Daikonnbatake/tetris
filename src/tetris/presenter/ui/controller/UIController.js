/***********************************************************************
 *
 *  UI を操作するクラス.
 *
***********************************************************************/

class UIController
{
    #stack; // UIStack: UIのスタック.
    #root;  // UI要素:  UIのroot要素.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   UI要素 rootItem: UIのroot要素.
    *
    +-----------------------------------------------------------------*/
    constructor(rootItem)
    {
        this.#stack = new UIStack(rootItem);
        this.#root  = rootItem;
        rootItem.GetState().Focus();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: UIのroot階層を表示する.
    *
    +-----------------------------------------------------------------*/
    Show()
    {
        if (this.#stack.IsEmpty()) this.#stack = new UIStack(this.#root);
        const current = this.#stack.GetCurrent();
        current.GetState().Show();
        current.GetState().Focus();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: UI全体を非表示にする.
    *
    +-----------------------------------------------------------------*/
    Hide()
    {
        while(!this.#stack.IsEmpty())
        {
            const current = this.#stack.GetCurrent();
            current.GetState().Hide();
            current.GetState().Distract();
            this.#stack.Levitate();
        }
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 少なくともUIのroot階層が表示されているなら true を返す.
    *
    * 戻り値:
    *   bool: root要素が表示されているなら true を返す.
    *
    +-----------------------------------------------------------------*/
    IsShow()
    {
        return this.#root.GetState().IsShow();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 左移動キーが押された場合の処理.
    *
    +-----------------------------------------------------------------*/
    PushLeft()
    {
        const current = this.#stack.GetCurrent();
        const left    = current.GetRelation().GetLeft();

        current.GetAction().GetLeftArrow().OnPush();

        if (left == null) return;

        const currentState = current.GetState();
        const leftState    = left.GetState();

        currentState.Distract();
        leftState.Focus();

        this.#stack.SwapLastItem(left);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 右移動キーが押された場合の処理.
    *
    +-----------------------------------------------------------------*/
    PushRight()
    {
        const current = this.#stack.GetCurrent();
        const right   = current.GetRelation().GetRight();

        current.GetAction().GetRightArrow().OnPush();

        if (right == null) return;

        const currentState = current.GetState();
        const rightState   = right.GetState();

        currentState.Distract();
        rightState.Focus();

        this.#stack.SwapLastItem(right);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 上移動キーが押された場合の処理.
    *
    +-----------------------------------------------------------------*/
    PushUp()
    {
        const current = this.#stack.GetCurrent();
        const top     = current.GetRelation().GetTop();

        current.GetAction().GetUpArrow().OnPush();

        if (top == null) return;

        const currentState = current.GetState();
        const topState   = top.GetState();

        currentState.Distract();
        topState.Focus();

        this.#stack.SwapLastItem(top);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 下移動キーが押された場合の処理.
    *
    +-----------------------------------------------------------------*/
    PushDown()
    {
        const current = this.#stack.GetCurrent();
        const bottom  = current.GetRelation().GetBottom();

        current.GetAction().GetDownArrow().OnPush();

        if (bottom == null) return;

        const currentState = current.GetState();
        const bottomState  = bottom.GetState();

        currentState.Distract();
        bottomState.Focus();

        this.#stack.SwapLastItem(bottom);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 決定キーが押された場合の処理.
    *
    +-----------------------------------------------------------------*/
    PushPositive()
    {
        let current = this.#stack.GetCurrent();
        current.GetAction().GetPositiveButton().OnPush();

        if (current.GetRelation().PushPositiveToBack())
        {
            const currentState = current.GetState();
            currentState.Hide();
            currentState.Distract();
            this.#stack.Levitate();
            return;
        }

        if (current.GetRelation().GetChild() == null) return;

        this.#stack.Dive();
        current = this.#stack.GetCurrent();

        current.GetState().Focus();
        current.GetState().Show();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: キャンセルキーが押された場合の処理.
    *
    +-----------------------------------------------------------------*/
    PushNegative()
    {
        let   current = this.#stack.GetCurrent();
        const currentState = current.GetState();
        current.GetAction().GetNegativeButton().OnPush();
        currentState.Hide();
        currentState.Distract();
        this.#stack.Levitate();
    }
}