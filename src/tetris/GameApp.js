function AppUpdate()
{
    InputManager.Update();
    Update();
}

window.onload = async ()=>
{
    Canvas.Start(240, 160);              // Canvas の初期化.
    InputManager.Start();                // InputManager の初期化.

    await Start();                       // アプリケーションの初期化.
    //AppUpdate();
    setInterval('AppUpdate()', 1000/60); // アプリケーションの更新処理.
}