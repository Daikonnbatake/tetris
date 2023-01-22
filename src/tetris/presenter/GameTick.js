class GameTick
{
    #tickEvent; // SimpleEvent:  定期的にtickイベントを発行する.

    constructor(tickCount)
    {
        this.#tickEvent = new SimpleEvent();
        const interval = 1000 / tickCount;

        setInterval(
            this.#tickEvent.Invoke.bind(this.#tickEvent),
            interval
        );
    }

    Subscribe(callback)
    {
        this.#tickEvent.Add(callback);
    }

    UnSubscribe(callback)
    {
        this.#tickEvent.Remove(callback);
    }
}