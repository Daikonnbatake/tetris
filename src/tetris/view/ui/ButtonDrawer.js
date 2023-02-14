/***********************************************************************
 *
 *   ボタンを描画するクラス.
 *
***********************************************************************/

class ButtonDrawer
{
    #sprite;    // Sprite:    このボタンのスプライト.
    #presenter; // UIElement: このボタンと対応する Presenter.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   Sprite    sprite:          ボタンのスプライト.
    *   UIElement buttonPresenter: このボタンと対応する Presenter.
    *
    +-----------------------------------------------------------------*/
    constructor(sprite, buttonPresenter)
    {
        this.#sprite    = sprite;
        this.#presenter = buttonPresenter;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: ボタンの位置を指定する.
    *
    * 引数:
    *   number x: このボタンのX座標.
    *   number y: このボタンのY座標.
    *
    +-----------------------------------------------------------------*/
    SetPosition(x, y)
    {
        let transform = this.#sprite.GetTransform();
        transform.SetPosition(x, y);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: ボタンの中心を指定する.
    *
    * 引数:
    *   number x: このボタンの中心のX座標(0~1).
    *   number y: このボタンの中心のY座標(0~1).
    *
    +-----------------------------------------------------------------*/
    SetOrigin(x, y)
    {
        let origin = this.#sprite.GetTransform();
        origin.SetPivot(x, y);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: ボタンを描画する.
    *
    +-----------------------------------------------------------------*/
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