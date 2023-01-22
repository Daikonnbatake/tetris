class GameTimer
{
    static #timeSum    = 0;
    static #lastUpdate = Date.now();
    static #isPause    = false;

    static Update()
    {
        const now = Date.now();
        if (!this.#isPause) this.#timeSum += now - this.#lastUpdate;
        this.#lastUpdate = now;
    }


    static GetTime()
    {
        return this.#timeSum;
    }


    static Pause()
    {
        this.#isPause = true;
    }


    static UnPause()
    {
        this.#isPause = false;
    }
}