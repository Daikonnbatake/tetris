function AppUpdate()
{
    InputManager.Update();
    GameTimer.Update()
    Update();
}

window.onload = async ()=>
{
    let   gameTick = new GameTick(60);

    Canvas.Start(240, 160);         // Canvas の初期化.
    InputManager.Start();           // InputManager の初期化.
    await Start();                  // アプリケーションの初期化.

    gameTick.Subscribe(AppUpdate);  // アプリケーションの更新処理.
}