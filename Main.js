async function Start()
{
    await ImageCache.AddImage('./img/tetris.png', 'tetris');
}

function Update()
{
    Canvas.Clear();
    let r = Math.floor(Math.random() * 9);
    image = ImageCache.GetImage('tetris');
    let a = new Sprite(image);
    let t = a.GetTransform();
    a.Split(new Size(8, 8));

    // W
    let keyW = InputManager.GetKeyState('w');
    t.SetPosition(8, 0);
    a.Draw(Canvas.Context(), 32 + keyW);

    // A
    let keyA = InputManager.GetKeyState('a');
    t.SetPosition(0, 8);
    a.Draw(Canvas.Context(), 32 + keyA);

    // S
    let keyS = InputManager.GetKeyState('s');
    t.SetPosition(8, 8);
    a.Draw(Canvas.Context(), 32 + keyS);

    // D
    let keyD = InputManager.GetKeyState('d');
    t.SetPosition(16, 8);
    a.Draw(Canvas.Context(), 32 + keyD);

    t.SetPosition(0, 24);
    a.Join();
    a.Draw(Canvas.Context());
}