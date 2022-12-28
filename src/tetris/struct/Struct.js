var a = a || {};

class Chunk
{
    #position; // Vector2:    このチャンクの座標.
    #rotation; // Direction:  このチャンクの回転.
    #blocks;   // Set<Block>: ブロックの集合.

    constructor()
    {
        this.#position = new Vector2(0, 0);
        this.#blocks   = {};
    }

    PushBlock(vector2, block){} // このチャンクにブロックを追加する.
    PopBlock(vector2) {} // このチャンクからブロックを取り除く.
    IsOverlap(Chunk){} // 他のチャンクとの重なり判定を行う.
}