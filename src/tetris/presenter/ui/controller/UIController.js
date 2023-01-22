/***********************************************************************
 *
 *  UI を操作するクラス.
 *
***********************************************************************/

class UIController
{
    #stack;
    #root;

    constructor(rootItem)
    {
        this.#stack = new UIStack(rootItem);
        this.#root  = rootItem;
        rootItem.GetState().Focus();
    }


    Show()
    {
        if (this.#stack.IsEmpty()) this.#stack = new UIStack(this.#root);
        const current = this.#stack.GetCurrent();
        current.GetState().Show();
        current.GetState().Focus();
    }


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


    IsShow()
    {
        return this.#root.GetState().IsShow();
    }


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


    PushPositive()
    {
        let current = this.#stack.GetCurrent();
        current.GetAction().GetPositiveButton().OnPush();

        if (current.GetRelation().IsBackButton())
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


    PushNegative()
    {
        let current = this.#stack.GetCurrent();
        current.GetAction().GetNegativeButton().OnPush();

        if (current.GetRelation().GetChild() == null) return;

        this.#stack.Dive();
        current = this.#stack.GetCurrent();

        current.GetState().Focus();
        current.GetState().Show();
    }
}