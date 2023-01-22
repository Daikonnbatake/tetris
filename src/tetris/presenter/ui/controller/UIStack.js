/***********************************************************************
 *
 *  UI の階層を管理するクラス.
 *
***********************************************************************/

class UIStack
{
    #stack;

    constructor(rootItem)
    {
        this.#stack = new Array();
        this.#stack.push(rootItem);
    }


    // 次の層に潜る.
    Dive()
    {
        const lastIndex = this.#stack.length - 1;
        const lastItem  = this.#stack[lastIndex];
        const nextItem  = lastItem.GetRelation().GetChild();
        if (nextItem === null) return;

        this.#stack.push(nextItem);
    }


    // 前の層に浮上する.
    Levitate()
    {
        this.#stack.pop();
    }


    // 最後の要素を入れ替える.
    SwapLastItem(value)
    {
        this.#stack.pop();
        this.#stack.push(value);
    }


    // 現在の操作対象を取得する.
    GetCurrent()
    {
        const lastIndex = this.#stack.length - 1;
        return this.#stack[lastIndex];
    }


    IsEmpty()
    {
        return this.#stack.length === 0;
    }
}