/***********************************************************************
 *
 *   パネルを描画するクラス.
 *
***********************************************************************/

class PanelDrawer
{
    #sprite;    // Sprite:    9スライス対応のスプライト.
    #presenter; // UIElement: このパネルと対応する Presenter.
    #size;      // Size:      このパネルのサイズ.
    #position;  // Position:  このパネルを描画する位置.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   Sprite    sprite:      9スライス対応のスプライト.
    *   UIElement uiPresenter: このパネルと対応する Presenter.
    *
    +-----------------------------------------------------------------*/
    constructor(sprite, uiPresenter)
    {
        this.#sprite    = sprite;
        this.#presenter = uiPresenter;
        this.#size      = new Size(3, 3);
        this.#position  = new Point(0, 0);

        this.#sprite.GetTransform().SetPivot(0, 0);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: パネルの位置を指定する.
    *
    * 引数:
    *   number x: このパネルのX座標.
    *   number y: このパネルのY座標.
    *
    +-----------------------------------------------------------------*/
    SetPosition(x, y)
    {
        this.#position.SetX(x);
        this.#position.SetY(y);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このパネルのサイズを指定する.
    *
    * 引数:
    *   number width:  塗りつぶす幅.
    *   number height: 塗りつぶす高さ.
    *
    +-----------------------------------------------------------------*/
    SetSize(width, height)
    {
        this.#size.SetWidth(width);
        this.#size.SetHeight(height);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: このパネルを描画する.
    *
    +-----------------------------------------------------------------*/
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