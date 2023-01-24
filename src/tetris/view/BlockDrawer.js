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