class ScoreDrawer
{
    #sprite;
    #size;

    constructor(tileWidth, tileHeight, image)
    {
        this.#sprite = new Sprite(image);
        this.#size = new Size(tileWidth, tileHeight);
        this.#sprite.Split(this.#size);
    }


    Draw(x, y, value, zeroPadd = 1)
    {
        let quotient = value;
        let modulo   = 0;
        let paddX    = x;
        let digits   = 0;

        while (0 < quotient)
        {
            modulo   = quotient % 10;
            quotient = Math.floor(quotient / 10);

            this.#sprite.GetTransform().SetPosition(paddX, y);
            this.#sprite.Draw(Canvas.Context(), modulo);
            paddX -= this.#size.GetWidth();
            digits += 1;
        }

        while (digits < zeroPadd)
        {
            this.#sprite.GetTransform().SetPosition(paddX, y);
            this.#sprite.Draw(Canvas.Context(), 0);
            paddX -= this.#size.GetWidth();
            digits += 1;
        }
    }
}