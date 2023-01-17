/***********************************************************************
 *
 * 　フィールド表示機能を提供するクラス.
 *
***********************************************************************/

class BlockDrawer
{
    #sprite;      // Sprite: スプライト.
    #tileSize;    // Size:   ブロック1個のサイズ.

    constructor(tileWidth, tileHeight, image)
    {
        this.#tileSize = new Size(tileWidth, tileHeight);
        this.#sprite   = new Sprite(image);
        this.#sprite.Split(this.#tileSize);
    }


    Draw(tileIndex, x, y, offsetX = 0, offsetY = 0)
    {
        const drawX = (x * this.#tileSize.GetWidth())  + offsetX;
        const drawY = (y * this.#tileSize.GetHeight()) + offsetY;
        this.#sprite.GetTransform().SetPosition(drawX, drawY);
        this.#sprite.Draw(Canvas.Context(), tileIndex);
    }
}


class FieldDrawer
{
    #position;
    #blockDrawer;

    constructor(x, y, blockWidth, blockHeight, image)
    {
        this.#position    = new Point(x, y);
        this.#blockDrawer = new BlockDrawer(
            blockWidth,
            blockHeight,
            image
        );
    }

    Draw(field)
    {
        const width  = field[0].length;
        const height = field.length;

        for(let y=0; y<height; y++)
        {
            for(let x=-1; x<=width; x++)
            {
                if (x === -1 || x === width) continue;

                if (field[y][x].IsHidden())
                {
                    this.#blockDrawer.Draw(
                        9,
                        x, y,
                        this.#position.GetX(),
                        this.#position.GetY()
                    );
                    continue;
                };

                this.#blockDrawer.Draw(
                    field[y][x].GetType(),
                    x, y,
                    this.#position.GetX(),
                    this.#position.GetY()
                );
            }
        }
    }
}