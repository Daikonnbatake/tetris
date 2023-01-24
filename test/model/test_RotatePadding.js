/***********************************************************************
 *
 * 　RotatePadding クラスの検証を行う.
 *
***********************************************************************/

describe('RotatePadding', ()=>
{
    let padd1 = new RotatePadding(new Point(0, 0), false);
    let padd2 = new RotatePadding(new Point(0, 1), false);
    let padd3 = new RotatePadding(new Point(1, 0), false);
    let padd4 = new RotatePadding(new Point(1, 1), true);
    padd1.ChangeNext(padd2);
    padd2.ChangeNext(padd3);
    padd3.ChangeNext(padd4);
    padd4.ChangeNext(padd1);

    describe('RotatePadding.Next()', ()=>
    {
        it('正しく次の状態を取得できる.', ()=>
        {
            if (padd1.Next() === padd2){}
            else throw new Error('失敗');
        });
    });

    describe('RotatePadding.Begin()', ()=>
    {
        it('正しく最初の状態を取得できる.', ()=>
        {
            if (padd1.Begin() === padd1){}
            else throw new Error('失敗');
        });
    });

    describe('RotatePadding.End()', ()=>
    {
        it('正しく最後の状態を取得できる', ()=>
        {
            if (padd1.End() === padd4){}
            else throw new Error('失敗');
        });
    });
});