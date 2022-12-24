function Game()
{
    Canvas.Start(160, 144);
    image = ImageCache.GetImage('tetris');
    let a = new Sprite(image);
    let t = a.GetTransform();
    a.Split(new Size(8, 8));
    a.Draw(Canvas.Context(), 33);
    t.SetPosition(8, 0);
    a.Draw(Canvas.Context(), 34);
    t.SetPosition(16, 0);
    a.Draw(Canvas.Context(), 35);
}

window.onload = async ()=>
{
    await ImageCache.AddImage('./img/tetris.png', 'tetris');
    Game();
}