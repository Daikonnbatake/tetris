class DelayerAutoShift
{
    #delay;
    #lastPushTime;
    #isHold;

    constructor(delayMilliSecond)
    {
        this.#delay        = delayMilliSecond;
        this.#lastPushTime = 0;
        this.#isHold       = false;
    }

    Enable()
    {
        if (!this.#isHold) return false;

        const holdTime = GameTimer.GetTime() - this.#lastPushTime;
        return this.#delay <= holdTime;
    }

    OnPush()
    {
        this.#lastPushTime = GameTimer.GetTime();
        this.#isHold       = true;
    }


    OnPull()
    {
        this.#isHold = false;
    }
}