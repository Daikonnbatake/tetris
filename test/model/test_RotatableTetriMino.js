/***********************************************************************
 *
 * 　RotatableTetriMino クラスの検証を行う.
 *
***********************************************************************/

describe('RotatableTetriMino', ()=>
{
    const block   = new Block(1, false);
    const origin  = new Point(1, 1);
    let   shape   = new Array();

    shape.push(new Point(0, 0));
    shape.push(new Point(0, 1));
    shape.push(new Point(1, 1));
    shape.push(new Point(2, 1));
    
    const NtoW1 = new RotatePadding(new Point( 0,  0), false);
    const NtoW2 = new RotatePadding(new Point( 1,  0), false);
    const NtoW3 = new RotatePadding(new Point( 1, -1), false);
    const NtoW4 = new RotatePadding(new Point( 0,  2), false);
    const NtoW5 = new RotatePadding(new Point( 1,  2), true);
    NtoW1.ChangeNext(NtoW2);
    NtoW2.ChangeNext(NtoW3);
    NtoW3.ChangeNext(NtoW4);
    NtoW4.ChangeNext(NtoW5);
    NtoW5.ChangeNext(NtoW1);

    const NtoE1 = new RotatePadding(new Point( 0,  0), false);
    const NtoE2 = new RotatePadding(new Point(-1,  0), false);
    const NtoE3 = new RotatePadding(new Point(-1, -1), false);
    const NtoE4 = new RotatePadding(new Point( 0,  2), false);
    const NtoE5 = new RotatePadding(new Point(-1,  2), true);
    NtoE1.ChangeNext(NtoE2);
    NtoE2.ChangeNext(NtoE3);
    NtoE3.ChangeNext(NtoE4);
    NtoE4.ChangeNext(NtoE5);
    NtoE5.ChangeNext(NtoE1);

    const EtoN1 = new RotatePadding(new Point( 0,  0), false);
    const EtoN2 = new RotatePadding(new Point( 1,  0), false);
    const EtoN3 = new RotatePadding(new Point( 1,  1), false);
    const EtoN4 = new RotatePadding(new Point( 0, -2), false);
    const EtoN5 = new RotatePadding(new Point( 1, -2), true);
    EtoN1.ChangeNext(EtoN2);
    EtoN2.ChangeNext(EtoN3);
    EtoN3.ChangeNext(EtoN4);
    EtoN4.ChangeNext(EtoN5);
    EtoN5.ChangeNext(EtoN1);

    const EtoS1 = new RotatePadding(new Point( 0,  0), false);
    const EtoS2 = new RotatePadding(new Point( 1,  0), false);
    const EtoS3 = new RotatePadding(new Point( 1,  1), false);
    const EtoS4 = new RotatePadding(new Point( 0, -2), false);
    const EtoS5 = new RotatePadding(new Point( 1, -2), true);
    EtoS1.ChangeNext(EtoS2);
    EtoS2.ChangeNext(EtoS3);
    EtoS3.ChangeNext(EtoS4);
    EtoS4.ChangeNext(EtoS5);
    EtoS5.ChangeNext(EtoS1);

    const StoE1 = new RotatePadding(new Point( 0,  0), false);
    const StoE2 = new RotatePadding(new Point(-1,  0), false);
    const StoE3 = new RotatePadding(new Point(-1, -1), false);
    const StoE4 = new RotatePadding(new Point( 0,  2), false);
    const StoE5 = new RotatePadding(new Point(-1,  2), true);
    StoE1.ChangeNext(StoE2);
    StoE2.ChangeNext(StoE3);
    StoE3.ChangeNext(StoE4);
    StoE4.ChangeNext(StoE5);
    StoE5.ChangeNext(StoE1);

    const StoW1 = new RotatePadding(new Point( 0,  0), false);
    const StoW2 = new RotatePadding(new Point( 1,  0), false);
    const StoW3 = new RotatePadding(new Point( 1,  1), false);
    const StoW4 = new RotatePadding(new Point( 0,  2), false);
    const StoW5 = new RotatePadding(new Point( 1,  2), true);
    StoW1.ChangeNext(StoW2);
    StoW2.ChangeNext(StoW3);
    StoW3.ChangeNext(StoW4);
    StoW4.ChangeNext(StoW5);
    StoW5.ChangeNext(StoW1);

    const WtoS1 = new RotatePadding(new Point( 0,  0), false);
    const WtoS2 = new RotatePadding(new Point(-1,  0), false);
    const WtoS3 = new RotatePadding(new Point(-1,  1), false);
    const WtoS4 = new RotatePadding(new Point( 0, -2), false);
    const WtoS5 = new RotatePadding(new Point(-1, -2), true);
    WtoS1.ChangeNext(WtoS2);
    WtoS2.ChangeNext(WtoS3);
    WtoS3.ChangeNext(WtoS4);
    WtoS4.ChangeNext(WtoS5);
    WtoS5.ChangeNext(WtoS1);

    const WtoN1 = new RotatePadding(new Point( 0,  0), false);
    const WtoN2 = new RotatePadding(new Point(-2,  0), false);
    const WtoN3 = new RotatePadding(new Point(-2,  1), false);
    const WtoN4 = new RotatePadding(new Point( 0, -2), false);
    const WtoN5 = new RotatePadding(new Point(-1, -2), true);
    WtoN1.ChangeNext(WtoN2);
    WtoN2.ChangeNext(WtoN3);
    WtoN3.ChangeNext(WtoN4);
    WtoN4.ChangeNext(WtoN5);
    WtoN5.ChangeNext(WtoN1);

    const srs = 
    {
        'NtoW': NtoW1,
        'NtoE': NtoE1,
        'EtoN': EtoN1,
        'EtoS': EtoS1,
        'StoE': StoE1,
        'StoW': StoW1,
        'WtoS': WtoS1,
        'WtoN': WtoN1,
    };
    
    let tetriMino = new TetriMino(block, origin, shape);
    let rotatableTetriMino = new RotatableTetriMino(tetriMino, srs);
    
    describe('北向きのテトリミノ', ()=>
    {
        it('SRSなし', ()=>
        {
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === 0) && (points[0].GetY() === 0);
            const b = (points[1].GetX() === 0) && (points[1].GetY() === 1);
            const c = (points[2].GetX() === 1) && (points[2].GetY() === 1);
            const d = (points[3].GetX() === 2) && (points[3].GetY() === 1);
            if (a && b && c && d){}
            else throw new Error('失敗');
        });

        it('SRS 1回目', ()=>
        {
            rotatableTetriMino.NextPadding();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === -2) && (points[0].GetY() === 0);
            const b = (points[1].GetX() === -2) && (points[1].GetY() === 1);
            const c = (points[2].GetX() === -1) && (points[2].GetY() === 1);
            const d = (points[3].GetX() ===  0) && (points[3].GetY() === 1);
            if (a && b && c && d){}
            else throw new Error('失敗');
        });

        it('SRS 2回目', ()=>
        {
            rotatableTetriMino.NextPadding();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === -2) && (points[0].GetY() === 1);
            const b = (points[1].GetX() === -2) && (points[1].GetY() === 2);
            const c = (points[2].GetX() === -1) && (points[2].GetY() === 2);
            const d = (points[3].GetX() ===  0) && (points[3].GetY() === 2);
            if (a && b && c && d){}
            else throw new Error('失敗');
        });

        it('SRS 3回目', ()=>
        {
            rotatableTetriMino.NextPadding();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() ===  0) && (points[0].GetY() === -2);
            const b = (points[1].GetX() ===  0) && (points[1].GetY() === -1);
            const c = (points[2].GetX() ===  1) && (points[2].GetY() === -1);
            const d = (points[3].GetX() ===  2) && (points[3].GetY() === -1);
            if (a && b && c && d){}
            else throw new Error('失敗');
        });

        it('SRS 4回目', ()=>
        {
            rotatableTetriMino.NextPadding();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === -1) && (points[0].GetY() === -2);
            const b = (points[1].GetX() === -1) && (points[1].GetY() === -1);
            const c = (points[2].GetX() ===  0) && (points[2].GetY() === -1);
            const d = (points[3].GetX() ===  1) && (points[3].GetY() === -1);
            if (a && b && c && d){}
            else throw new Error('失敗(座標)');

            if (rotatableTetriMino.IsEnd()){}
            else throw new Error('失敗(SRS終了判定)');
        });
    });


    describe('東向きのテトリミノ', ()=>
    {
        it('SRSなし', ()=>
        {
            rotatableTetriMino.TurnRight();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === 2) && (points[0].GetY() === 0);
            const b = (points[1].GetX() === 1) && (points[1].GetY() === 0);
            const c = (points[2].GetX() === 1) && (points[2].GetY() === 1);
            const d = (points[3].GetX() === 1) && (points[3].GetY() === 2);
            if (a && b && c && d){}
            else throw new Error('失敗');
        });

        it('SRS 1回目', ()=>
        {
            rotatableTetriMino.NextPadding();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === 1) && (points[0].GetY() === 0);
            const b = (points[1].GetX() === 0) && (points[1].GetY() === 0);
            const c = (points[2].GetX() === 0) && (points[2].GetY() === 1);
            const d = (points[3].GetX() === 0) && (points[3].GetY() === 2);
            if (a && b && c && d){}
            else throw new Error('失敗');
        });

        it('SRS 2回目', ()=>
        {
            rotatableTetriMino.NextPadding();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === 1) && (points[0].GetY() === -1);
            const b = (points[1].GetX() === 0) && (points[1].GetY() === -1);
            const c = (points[2].GetX() === 0) && (points[2].GetY() ===  0);
            const d = (points[3].GetX() === 0) && (points[3].GetY() ===  1);
            if (a && b && c && d){}
            else throw new Error('失敗');
        });

        it('SRS 3回目', ()=>
        {
            rotatableTetriMino.NextPadding();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === 2) && (points[0].GetY() === 2);
            const b = (points[1].GetX() === 1) && (points[1].GetY() === 2);
            const c = (points[2].GetX() === 1) && (points[2].GetY() === 3);
            const d = (points[3].GetX() === 1) && (points[3].GetY() === 4);
            if (a && b && c && d){}
            else throw new Error('失敗');
        });

        it('SRS 4回目', ()=>
        {
            rotatableTetriMino.NextPadding();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === 1) && (points[0].GetY() === 2);
            const b = (points[1].GetX() === 0) && (points[1].GetY() === 2);
            const c = (points[2].GetX() === 0) && (points[2].GetY() === 3);
            const d = (points[3].GetX() === 0) && (points[3].GetY() === 4);
            if (a && b && c && d){}
            else throw new Error('失敗(座標)');

            if (rotatableTetriMino.IsEnd()){}
            else throw new Error('失敗(SRS終了判定)');
        });
    });


    describe('南向きのテトリミノ', ()=>
    {
        it('SRSなし', ()=>
        {
            rotatableTetriMino.TurnRight();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === 2) && (points[0].GetY() === 2);
            const b = (points[1].GetX() === 2) && (points[1].GetY() === 1);
            const c = (points[2].GetX() === 1) && (points[2].GetY() === 1);
            const d = (points[3].GetX() === 0) && (points[3].GetY() === 1);
            if (a && b && c && d){}
            else throw new Error('失敗');
        });

        it('SRS 1回目', ()=>
        {
            rotatableTetriMino.NextPadding();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === 3) && (points[0].GetY() === 2);
            const b = (points[1].GetX() === 3) && (points[1].GetY() === 1);
            const c = (points[2].GetX() === 2) && (points[2].GetY() === 1);
            const d = (points[3].GetX() === 1) && (points[3].GetY() === 1);
            if (a && b && c && d){}
            else throw new Error('失敗');
        });

        it('SRS 2回目', ()=>
        {
            rotatableTetriMino.NextPadding();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === 3) && (points[0].GetY() === 3);
            const b = (points[1].GetX() === 3) && (points[1].GetY() === 2);
            const c = (points[2].GetX() === 2) && (points[2].GetY() === 2);
            const d = (points[3].GetX() === 1) && (points[3].GetY() === 2);
            if (a && b && c && d){}
            else throw new Error('失敗');
        });

        it('SRS 3回目', ()=>
        {
            rotatableTetriMino.NextPadding();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === 2) && (points[0].GetY() ===  0);
            const b = (points[1].GetX() === 2) && (points[1].GetY() === -1);
            const c = (points[2].GetX() === 1) && (points[2].GetY() === -1);
            const d = (points[3].GetX() === 0) && (points[3].GetY() === -1);
            if (a && b && c && d){}
            else throw new Error('失敗');
        });

        it('SRS 4回目', ()=>
        {
            rotatableTetriMino.NextPadding();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === 3) && (points[0].GetY() ===  0);
            const b = (points[1].GetX() === 3) && (points[1].GetY() === -1);
            const c = (points[2].GetX() === 2) && (points[2].GetY() === -1);
            const d = (points[3].GetX() === 1) && (points[3].GetY() === -1);
            if (a && b && c && d){}
            else throw new Error('失敗(座標)');

            if (rotatableTetriMino.IsEnd()){}
            else throw new Error('失敗(SRS終了判定)');
        });
    });

    
    describe('西向きのテトリミノ', ()=>
    {
        it('SRSなし', ()=>
        {
            rotatableTetriMino.TurnRight();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === 0) && (points[0].GetY() === 2);
            const b = (points[1].GetX() === 1) && (points[1].GetY() === 2);
            const c = (points[2].GetX() === 1) && (points[2].GetY() === 1);
            const d = (points[3].GetX() === 1) && (points[3].GetY() === 0);
            if (a && b && c && d){}
            else throw new Error('失敗');
        });

        it('SRS 1回目', ()=>
        {
            rotatableTetriMino.NextPadding();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === 1) && (points[0].GetY() === 2);
            const b = (points[1].GetX() === 2) && (points[1].GetY() === 2);
            const c = (points[2].GetX() === 2) && (points[2].GetY() === 1);
            const d = (points[3].GetX() === 2) && (points[3].GetY() === 0);
            if (a && b && c && d){}
            else throw new Error('失敗');
        });

        it('SRS 2回目', ()=>
        {
            rotatableTetriMino.NextPadding();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === 1) && (points[0].GetY() === 3);
            const b = (points[1].GetX() === 2) && (points[1].GetY() === 3);
            const c = (points[2].GetX() === 2) && (points[2].GetY() === 2);
            const d = (points[3].GetX() === 2) && (points[3].GetY() === 1);
            if (a && b && c && d){}
            else throw new Error('失敗');
        });

        it('SRS 3回目', ()=>
        {
            rotatableTetriMino.NextPadding();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === 0) && (points[0].GetY() === 4);
            const b = (points[1].GetX() === 1) && (points[1].GetY() === 4);
            const c = (points[2].GetX() === 1) && (points[2].GetY() === 3);
            const d = (points[3].GetX() === 1) && (points[3].GetY() === 2);
            if (a && b && c && d){}
            else throw new Error('失敗');
        });

        it('SRS 4回目', ()=>
        {
            rotatableTetriMino.NextPadding();
            const points = rotatableTetriMino.GetPoints();
            const a = (points[0].GetX() === 1) && (points[0].GetY() === 4);
            const b = (points[1].GetX() === 2) && (points[1].GetY() === 4);
            const c = (points[2].GetX() === 2) && (points[2].GetY() === 3);
            const d = (points[3].GetX() === 2) && (points[3].GetY() === 2);
            if (a && b && c && d){}
            else throw new Error('失敗(座標)');

            if (rotatableTetriMino.IsEnd()){}
            else throw new Error('失敗(SRS終了判定)');
        });
    });
});