/***********************************************************************
 *
 * 　RotateDiff クラスの検証を行う.
 *
***********************************************************************/

describe('RotateDiff', ()=>
{
    describe('RotateDiff.TurnLeft()', ()=>
    {
        let rotateDiff = new RotateDiff();

        it('N から W への遷移.', ()=>
        {
            rotateDiff.TurnLeft()
            if (rotateDiff.ToString() === 'NtoW'){}
            else throw new Error('失敗');
        });

        it('W から S への遷移.', ()=>
        {
            rotateDiff.TurnLeft()
            if (rotateDiff.ToString() === 'WtoS'){}
            else throw new Error('失敗');
        });

        it('S から E への遷移.', ()=>
        {
            rotateDiff.TurnLeft()
            if (rotateDiff.ToString() === 'StoE'){}
            else throw new Error('失敗');
        });

        it('E から N への遷移.', ()=>
        {
            rotateDiff.TurnLeft()
            if (rotateDiff.ToString() === 'EtoN'){}
            else throw new Error('失敗');
        });
    });

    describe('RotateDiff.TurnRight()', ()=>
    {
        let rotateDiff = new RotateDiff();

        it('N から E への遷移.', ()=>
        {
            rotateDiff.TurnRight()
            if (rotateDiff.ToString() === 'NtoE'){}
            else throw new Error('失敗');
        });

        it('E から S への遷移.', ()=>
        {
            rotateDiff.TurnRight()
            if (rotateDiff.ToString() === 'EtoS'){}
            else throw new Error('失敗');
        });

        it('S から W への遷移.', ()=>
        {
            rotateDiff.TurnRight()
            if (rotateDiff.ToString() === 'StoW'){}
            else throw new Error('失敗');
        });

        it('W から N への遷移.', ()=>
        {
            rotateDiff.TurnRight()
            if (rotateDiff.ToString() === 'WtoN'){}
            else throw new Error('失敗');
        });
    });
});