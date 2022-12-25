/***********************************************************************
 *
 * 　入力の状態を表す列挙子.
 *
***********************************************************************/

class KeyState
{
    static Idle() { return 0; } // number: なにもされていない状態.
    static Push() { return 1; } // number: 押された瞬間.
    static Hold() { return 2; } // number: 押され続けている間.
    static Pull() { return 3; } // number: 離された瞬間.
}