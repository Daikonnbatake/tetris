/***********************************************************************
 *
 *   時間を描画するクラス.
 *
***********************************************************************/

class TimeDrawer
{
    #scoreDrawer; // ScoreDrawer: 数値を描画するクラス.
    #size;        // Size:        数字1つの大きさ.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    * 引数:
    *   number tileWidth:   数字1つの横幅.
    *   number tilekHeight: 数字1つの高さ.
    *   string image:       数字の画像のパスまたはエイリアス.
    *
    +-----------------------------------------------------------------*/
    constructor(tileWidth, tileHeight, image)
    {
        this.#scoreDrawer = new ScoreDrawer(tileWidth, tileHeight, image);
        this.#size = new Size(tileWidth, tileHeight);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 時間を描画する.
    *
    * 引数:
    *   number x:        描画する位置のX座標.
    *   number y:        描画する位置のY座標.
    *   number millisec: ミリ秒単位の時間.
    *
    +-----------------------------------------------------------------*/
    Draw(x, y, millisec)
    {
        const min   = Math.floor(millisec / 60000);
        const sec   = Math.floor((millisec % 60000) / 1000);
        const csec  = Math.floor((millisec % 1000) / 10);
        const width = this.#size.GetWidth();

        this.#scoreDrawer.Draw(x, y, csec, 2);
        this.#scoreDrawer.Draw(x - width * 2.5, y, sec, 2);
        this.#scoreDrawer.Draw(x - width * 5, y, min);
    }
}