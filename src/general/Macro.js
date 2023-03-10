/***********************************************************************
 *
 *   JavaScript を便利にするマクロ.
 *
***********************************************************************/


/*---------------------------------------------------------------------+
*
* 説明: 不正な値を回避するためのマクロ.
*
* 引数:
*   any  value:  検証する値.
*
* 戻り値:
*   any:  value が NaN, infinity の場合 0 を返す.
*
+---------------------------------------------------------------------*/
function ToZero(value)
{
    if (isNaN(value)) return 0;
    if (!isFinite(value)) return 0;
    return value;
}