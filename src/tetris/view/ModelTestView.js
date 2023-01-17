
function ModelTestView(field)
{
    const ctx  = Canvas.Context();
    const img  = ImageCache.GetImage('tetris');
    let sprite = new Sprite(img);
    sprite.Split(new Size(8, 8));
    sprite.GetTransform().SetPosition(0, 0);

    const wall = 52;
    const block = 48;
    const width = field[0].length;
    const height = field.length;
    const offsetX = 18;
    const offsetY = 0;

    for (let y=0; y<height; y++)
    {
        for (let x=-1; x<=width; x++)
        {
            let t = sprite.GetTransform();
            t.SetPosition((x+offsetX)*8, (y+offsetY)*8);

            if (x === -1 || x === width)
            {
                sprite.Draw(ctx, wall);
                continue;
            }

            if (!(field[y][x].IsHidden()))
            {
                sprite.Draw(ctx, block);
            }
        }
    }
}