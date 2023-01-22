class AutoRepeatRate
{
    #rate;
    #updateTime;

    constructor(repeatRateMillisecond)
    {
        this.#rate = repeatRateMillisecond;
        this.#updateTime = 0;
    }

    Enable()
    {
        const nowTime     = GameTimer.GetTime();
        const elapsedTime = nowTime - this.#updateTime;
        const result      = this.#rate <= elapsedTime;

        if (result) this.#updateTime  = nowTime;
        return result;
    }
}