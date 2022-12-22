class Canvas
{
    static #canvas;
    static #renderQueue;

    static Context()
    {
        return this.#canvas.getContext('2d');
    }

    static Start(canvasWidth, canvasHeight)
    {
        this.#canvas = document.getElementById('canvas');
        canvas.setAttribute('width', canvasWidth);
        canvas.setAttribute('height', canvasHeight);
    }

    static Update(){}
}