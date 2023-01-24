/***********************************************************************
 *
 * 　BlockLine クラスの検証を行う.
 *
***********************************************************************/

describe('BlockLine', ()=>
{
    describe('BlockLine.GetLine()', ()=>
    {
        it('正しくブロック列を取得できる.', ()=>
        {
            let test_blockLine = new BlockLine(10);
            let challenge = test_blockLine.GetLine();
            for (const block of challenge)
            {
                if (block.GetType() === 0){}
                else throw new Error('失敗(正しくない種類)');

                if (block.IsHidden()){}
                else throw new Error('失敗(正しくない可視性)');
            }
        });
    });

    describe('BlockLine.Flush()', ()=>
    {
        it('正しくブロックを書き込むことが出来る.',()=>
        {
            let test_blockLine = new BlockLine(10);
            const block = new Block(1, false);
            test_blockLine.Flush(5, block);
            if (test_blockLine.GetLine()[5].GetType() === 1){}
            else throw new Error('失敗');
        });
    });

    describe('BlockLine.IsComplete()', ()=>
    {
        it('列が満たされていない場合.', ()=>
        {
            let test_blockLine = new BlockLine(10);
            if (!test_blockLine.IsComplete()){}
            else throw new Error('失敗');
        });

        it('列が満たされている場合', ()=>
        {
            let test_blockLine = new BlockLine(10);
            const block = new Block(1, false);
            for (let i=0; i<10; i++) test_blockLine.Flush(i, block);
            if (test_blockLine.IsComplete()){}
            else throw new Error('失敗');
        });
    });
});