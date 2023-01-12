/***********************************************************************
 *
 * 　テトリミノ固定判定を行うクラス.
 *
***********************************************************************/

class FixValidator
{
    #actionCounter;   // Counter:   ミノの操作回数カウント.
    #fieldCollision;  // Collision: ミノの当たり判定.
    #minoCollision;   // Collision: ミノの当たり判定.
    #minoMinPosY;     // number:    操作中のミノの最低地上高.
    #noTouchTimer;    // Stopwatch: 接地後無操作時間.
    #isFixed;         // bool:      確定したかどうか.


    /*-----------------------------------------------------------------+
    *
    * 説明: コンストラクタ.
    *
    +-----------------------------------------------------------------*/
    constructor()
    {
        this.#actionCounter = new Counter();
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 位置確定判定用の Collision を設定する.
    * 
    * 引数:
    *   Collision fieldCollision: フィールドの Collision.
    *   Collision minoCollision:  テトリミノの Collision.
    *
    +-----------------------------------------------------------------*/
    SetCollition(fieldCollision, minoCollision)
    {
        this.#fieldCollision = fieldCollision;
        this.#minoCollision  = minoCollision;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: 最低地上高を更新する.
    *
    +-----------------------------------------------------------------*/
    UpdateY(y)
    {
        this.#minoPositionY = Math.min(y, this.#minoMinPosY);
        this.#actionCounter.Reset();
    }



    UpdateNoTouchTime()
    {

    }


    HardFix()
    {

    }

    SoftFix()
    {
        
    }

    InclementActionCount()
    {
        this.#actionCounter.CountUp();
    }
}