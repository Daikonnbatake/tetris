class ButtonPresenter
{
    #action;
    #relation;
    #state;

    #onPush;

    constructor(backButton = false)
    {
        this.#action   = new UIAction();
        this.#relation = new UIRelation(backButton);
        this.#state    = new UIState(this.#relation);
    }

    GetRelation()
    {
        return this.#relation;
    }

    GetAction()
    {
        return this.#action;
    }

    GetState()
    {
        return this.#state;
    }

    // コンストラクタでActionのどこかに登録する予定.
    Push(){}
}