/***********************************************************************
 *
 *   スコアを描画するクラス.
 *
***********************************************************************/

class ScoreDrawer
{
    #sprite; // Sprite: 数字のスプライト.
    #size;   // Size:   数字1つの大きさ.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   tileWidth  sprite:      数字1つの横幅.
    *   tileHeight uiPresenter: 数字1つの高さ.
    *   string     image:       数字の画像のパスまたはエイリアス.
    *
    +-----------------------------------------------------------------*/
    constructor(tileWidth, tileHeight, image)
    {
        this.#sprite = new Sprite(image);
        this.#size = new Size(tileWidth, tileHeight);
        this.#sprite.Split(this.#size);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: スコアを描画する.
    *
    * 引数:
    *   number x:        描画する位置のX座標.
    *   number y:        描画する位置のY座標.
    *   number value:    描画する数字.
    *   number zeroPadd: ゼロ埋めの桁数(任意).
    *
    +-----------------------------------------------------------------*/
    Draw(x, y, value, zeroPadd = 1)
    {
        let quotient = value;
        let modulo   = 0;
        let paddX    = x;
        let digits   = 0;

        while (0 < quotient)
        {
            modulo   = quotient % 10;
            quotient = Math.floor(quotient / 10);

            this.#sprite.GetTransform().SetPosition(paddX, y);
            this.#sprite.Draw(Canvas.Context(), modulo);
            paddX -= this.#size.GetWidth();
            digits += 1;
        }

        while (digits < zeroPadd)
        {
            this.#sprite.GetTransform().SetPosition(paddX, y);
            this.#sprite.Draw(Canvas.Context(), 0);
            paddX -= this.#size.GetWidth();
            digits += 1;
        }
    }
}