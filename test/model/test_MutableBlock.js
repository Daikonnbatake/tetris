/***********************************************************************
 *
 * 　MutableBlock クラスの検証を行う.
 *
***********************************************************************/

// 検証用インスタンス
var test_mutableBlock = new MutableBlock(0, 0, new Block(1, false));

describe('MutableBlock', ()=>
{
    describe('MutableBlock.GetPosition()', ()=>
    {
        it('正しい座標を取得できる.', ()=>
        {
            const pos = test_mutableBlock.GetPosition();
            const x   = pos.GetX() === 0;
            const y   = pos.GetY() === 0;

            if (x && y){}
            else throw new Error('失敗');
        });
    });

    describe('MutableBlock.GetBlock()', ()=>
    {
        it('正しいブロックオブジェクトを取得できる', ()=>
        {
            const block = test_mutableBlock.GetBlock();

            if (block.GetType() === 1){}
            else throw new Error('失敗(正しくない種類)');

            if (!block.IsHidden()){}
            else throw new Error('失敗(正しくない可視性)');
        });
    });
});