window.onload = ()=>
{
    Canvas.Start(500, 500);
    let a = new Sprite('./img/test.png', new Size(16, 16), new Point(0, 0));
    a.Draw(Canvas.Context());
}