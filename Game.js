function Game()
{
    Canvas.Start(500, 500);
    image = ImageCache.GetImage('test');
    let a = new Sprite(image, new Size(16, 16), new Point(0, 0));
    a.Draw(Canvas.Context());
}

window.onload = async ()=>
{
    await ImageCache.AddImage('./img/test.png', 'test');
    Game();
}