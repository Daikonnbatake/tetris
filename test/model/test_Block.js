/***********************************************************************
 *
 * 　Block クラスの検証を行う.
 *
***********************************************************************/

describe('Block', ()=>
{
    describe('Block.GetType()', ()=>
    {
        it('正しくブロックの種類を取得できる.', ()=>
        {
            let test_block = new Block(0, false);
            if (test_block.GetType() === 0){}
            else throw new Error('失敗');
        });
    });

    describe('Block.IsHidden()', ()=>
    {
        it('正しくブロックの可視性を取得できる.', ()=>
        {
            let test_block = new Block(0, false);
            if (!test_block.IsHidden()){}
            else throw new Error('失敗');
        });
    });

    describe('Block.ChangeType()', ()=>
    {
        it('正しくブロックの種類を変更できる.', ()=>
        {
            let test_block = new Block(0, false);
            test_block.ChangeType(1);
            if (test_block.GetType() === 1){}
            else throw new Error('失敗');
        });
    });

    describe('Block.Hide()', ()=>
    {
        it('正しくブロックを非表示にできる.', ()=>
        {
            let test_block = new Block(0, false);
            test_block.Hide();
            if (test_block.IsHidden()){}
            else throw new Error('失敗');
        });
    });

    describe('Block.Show()', ()=>
    {
        it('正しくブロックを表示できる.', ()=>
        {
            let test_block = new Block(0, false);
            test_block.Show();
            if (!test_block.IsHidden()){}
            else throw new Error('失敗');
        });
    });
});