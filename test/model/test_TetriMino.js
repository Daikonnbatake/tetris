/***********************************************************************
 *
 * 　TetriMino クラスの検証を行う.
 *
***********************************************************************/

describe('TetriMino', ()=>
{
    const block  = new Block(1, false);
    const pos    = new Point(0, 0);
    const points = [new Point(0, 0), new Point(1, 0)]
    const test_TetriMino = new TetriMino(block, pos, points);

    describe('TetriMino.GetBlock()', ()=>
    {
        it('正しくブロックの種類を取得できる.', ()=>
        {
            if (test_TetriMino.GetBlock() === block){}
            else throw new Error('失敗');
        });
    });

    describe('TetriMino.GetOrigin()', ()=>
    {
        it('正しく中心点の座標を取得できる.', ()=>
        {
            if (test_TetriMino.GetOrigin() === pos){}
            else throw new Error('失敗');
        });
    });

    describe('TetriMino.GetPoints()', ()=>
    {
        it('正しく座標の配列を取得できる.', ()=>
        {
            if (test_TetriMino.GetPoints() === points){}
            else throw new Error('失敗');
        });
    });
});