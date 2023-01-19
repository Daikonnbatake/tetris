// Presenter -----------------------------------------------------------

class GameTick
{
    #tickEvent; // Event:  定期的にtickイベントを発行する.
    #tickCount; // number: 1秒間に行う内部処理の回数.

    // この中でtickを非同期的に呼ぶ.
    constructor(){}

    // 1秒間に決められた回数のTick()イベントを発行する.
    Tick(){}

    // イベントを購読する.
    Subscribe(func){}

    // イベント購読をやめる.
    UnSubscribe(func){}
}


class GameManager
{
    #tetriMinoControler;
    #gameRenderer;

}


class TetriMinoControler
{
    #puzzle;            // model層のインスタンス.
    #holdInterval;      // 左右長押し時、高速移動するまでの時間.
    #holdSpeed;         // 左右長押し時、フィールド端に着くまでの時間.
    #freefallControler; // 自然落下の速度を制御する.
    #moveQueue;         // 移動クエリを溜めるキュー.

    constructor(puzzle){}

    // 現在のフレームでの操作結果を出力する.
    Tick(){}
    MoveLeft(){}
    MoveRight(){}
    TurnLeft(){}
    TurnRight(){}
}


// View ----------------------------------------------------------------

class GameRenderer
{
    #puzzleRenderer;

    Tick(){}
    Pause(){}
    UnPause(){}
}


class PuzzleRenderer
{
    #fieldRenderer;
    #holdRenderer;
    #nextRenderer;
    #backGroundRenderer;
}