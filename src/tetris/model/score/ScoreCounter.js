class ScoreCounter
{
    #counter;
    #dropBonus;
    #baseScore;
    #isBackToBack;
    #isSpin;

    constructor(lines)
    {
        this.#counter = new Counter();
    }


    // ソフト,ハードドロップのスコアを計算
    Drop(height)
    {
        this.#counter.CountUp(height * this.#dropBonus);
    }


    // ライン削除イベント
    OnDeleteLines(lineCount)
    {
        let baseScore = this.#baseScore[lineCount - 1];

        if (this.#isSpin) baseScore = this.#baseScore[lineCount - 1];

        if (this.#isSpin) result

        this.#counter.CountUp();
    }

    // TODO:
    // スコア計算まわりどうにかする。
    // スピン判定周りをもうちょっと丁寧に(スピンのルールに得点を紐づけたい)
    // ↑ spinRule 自体にイベント持たせるのもアリ？
}