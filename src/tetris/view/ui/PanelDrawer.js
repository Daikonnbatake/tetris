class PanelDrawer
{
    #sprite;
    #presenter;
    #size;
    #position;

    constructor(sprite, uiPresenter)
    {
        this.#sprite    = sprite;
        this.#presenter = uiPresenter;
        this.#size      = new Size(3, 3);
        this.#position  = new Point(0, 0);

        this.#sprite.GetTransform().SetPivot(0, 0);
    }


    SetPosition(x, y)
    {
        this.#position.SetX(x);
        this.#position.SetY(y);
    }


    SetSize(width, height)
    {
        this.#size.SetWidth(width);
        this.#size.SetHeight(height);
    }


    Draw()
    {
        const state    = this.#presenter.GetState();
        const isShow   = state.IsShow();

        if (!isShow) return;

        const context     = Canvas.Context();
        const tileWidth   = this.#sprite.GetTileSize().GetWidth();
        const tileHeight  = this.#sprite.GetTileSize().GetHeight();
        const panelWidth  = this.#size.GetWidth();
        const panelHeight = this.#size.GetHeight();
        const offsetX     = this.#position.GetX();
        const offsetY     = this.#position.GetY();
        const indexer     = new NineSliceIndex(panelWidth, panelHeight);
        let   transform   = this.#sprite.GetTransform();

        for (let y = 0; y < panelHeight; y++)
        {
            for (let x = 0; x < panelWidth; x++)
            {
                const drawX = (x * tileWidth)  + offsetX;
                const drawY = (y * tileHeight) + offsetY;
                const index = indexer.GetIndex(x, y);

                transform.SetPosition(drawX, drawY);
                this.#sprite.Draw(context, index);
            }
        }
    }
}