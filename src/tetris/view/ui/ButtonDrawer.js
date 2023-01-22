class ButtonDrawer
{
    #sprite;
    #presenter;

    constructor(sprite, buttonPresenter)
    {
        this.#sprite    = sprite;
        this.#presenter = buttonPresenter;
    }


    SetPosition(x, y)
    {
        let transform = this.#sprite.GetTransform();
        transform.SetPosition(x, y);
    }


    SetOrigin(x, y)
    {
        let origin = this.#sprite.GetTransform();
        origin.SetPivot(x, y);
    }


    Draw()
    {
        const context  = Canvas.Context();
        const state    = this.#presenter.GetState();
        const isActive = state.IsActive();
        const isShow   = state.IsShow();
        const isFocus  = state.IsFocus();
        let   index    = 0;

        if (!isShow) return;
        if (isFocus) index += 1;
        this.#sprite.Draw(context, index);
    }
}