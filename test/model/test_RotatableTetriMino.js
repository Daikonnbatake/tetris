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

    const NtoW1 = new Point( 0,  0);
    const NtoW2 = new Point( 1,  0);
    const NtoW3 = new Point( 1, -1);
    const NtoW4 = new Point( 0,  2);
    const NtoW5 = new Point( 1,  2);
    const NtoW  = [NtoW1, NtoW2, NtoW3, NtoW4, NtoW5];

    const NtoE1 = new Point( 0,  0);
    const NtoE2 = new Point(-1,  0);
    const NtoE3 = new Point(-1, -1);
    const NtoE4 = new Point( 0,  2);
    const NtoE5 = new Point(-1,  2);
    const NtoE  = [NtoE1, NtoE2, NtoE3, NtoE4, NtoE5];

    const EtoN1 = new Point( 0,  0);
    const EtoN2 = new Point( 1,  0);
    const EtoN3 = new Point( 1,  1);
    const EtoN4 = new Point( 0, -2);
    const EtoN5 = new Point( 1, -2);
    const EtoN  = [EtoN1, EtoN2, EtoN3, EtoN4, EtoN5];

    const EtoS1 = new Point( 0,  0);
    const EtoS2 = new Point( 1,  0);
    const EtoS3 = new Point( 1,  1);
    const EtoS4 = new Point( 0, -2);
    const EtoS5 = new Point( 1, -2);
    const EtoS  = [EtoS1, EtoS2, EtoS3, EtoS4, EtoS5];

    const StoE1 = new Point( 0,  0);
    const StoE2 = new Point(-1,  0);
    const StoE3 = new Point(-1, -1);
    const StoE4 = new Point( 0,  2);
    const StoE5 = new Point(-1,  2);
    const StoE  = [StoE1, StoE2, StoE3, StoE4, StoE5];

    const StoW1 = new Point( 0,  0);
    const StoW2 = new Point( 1,  0);
    const StoW3 = new Point( 1,  1);
    const StoW4 = new Point( 0,  2);
    const StoW5 = new Point( 1,  2);
    const StoW  = [StoW1, StoW2, StoW3, StoW4, StoW5];

    const WtoS1 = new Point( 0,  0);
    const WtoS2 = new Point(-1,  0);
    const WtoS3 = new Point(-1,  1);
    const WtoS4 = new Point( 0, -2);
    const WtoS5 = new Point(-1, -2);
    const WtoS  = [WtoS1, WtoS2, WtoS3, WtoS4, WtoS5];

    const WtoN1 = new Point( 0,  0);
    const WtoN2 = new Point(-2,  0);
    const WtoN3 = new Point(-2,  1);
    const WtoN4 = new Point( 0, -2);
    const WtoN5 = new Point(-1, -2);
    const WtoN  = [WtoN1, WtoN2, WtoN3, WtoN4, WtoN5];

    const srs = new SRSTransition();
    srs.RegistTransition('NtoW', NtoW);
    srs.RegistTransition('NtoE', NtoE);
    srs.RegistTransition('EtoN', EtoN);
    srs.RegistTransition('EtoS', EtoS);
    srs.RegistTransition('StoE', StoE);
    srs.RegistTransition('StoW', StoW);
    srs.RegistTransition('WtoS', WtoS);
    srs.RegistTransition('WtoN', WtoN);

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