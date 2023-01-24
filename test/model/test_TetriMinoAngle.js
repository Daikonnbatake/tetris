/***********************************************************************
 *
 * 　TetriMinoAngle クラスの検証を行う.
 *
***********************************************************************/

describe('TetriMinoAngle', ()=>
{
    let points = new Array();
    let origin = new Point(1, 1);
    points.push(new Point(0, 0));
    points.push(new Point(0, 1));
    points.push(new Point(1, 1));
    points.push(new Point(2, 1));

    describe('TetriMinoAngle.ApplyTurnEffect()', ()=>
    {
        let angle = new TetriMinoAngle();

        it('北向きの回転を正しく適用できる.', ()=>
        {
            const out = angle.ApplyTurnEffect(points, origin);
            const a = (out[0].GetX() === 0) && (out[0].GetY() === 0);
            const b = (out[1].GetX() === 0) && (out[1].GetY() === 1);
            const c = (out[2].GetX() === 1) && (out[2].GetY() === 1);
            const d = (out[3].GetX() === 2) && (out[3].GetY() === 1);
            if (a && b && c && d) {}
            else throw new Error('失敗');
        });

        it('東向きの回転を正しく適用できる.', ()=>
        {
            angle.TurnRight();
            const out = angle.ApplyTurnEffect(points, origin);
            const a = (out[0].GetX() === 2) && (out[0].GetY() === 0);
            const b = (out[1].GetX() === 1) && (out[1].GetY() === 0);
            const c = (out[2].GetX() === 1) && (out[2].GetY() === 1);
            const d = (out[3].GetX() === 1) && (out[3].GetY() === 2);
            if (a && b && c && d) {}
            else throw new Error('失敗');
        });

        it('南向きの回転を正しく適用できる.', ()=>
        {
            angle.TurnRight();
            const out = angle.ApplyTurnEffect(points, origin);
            const a = (out[0].GetX() === 2) && (out[0].GetY() === 2);
            const b = (out[1].GetX() === 2) && (out[1].GetY() === 1);
            const c = (out[2].GetX() === 1) && (out[2].GetY() === 1);
            const d = (out[3].GetX() === 0) && (out[3].GetY() === 1);
            if (a && b && c && d) {}
            else throw new Error('失敗');
        });

        it('西向きの回転を正しく適用できる.', ()=>
        {
            angle.TurnRight();
            const out = angle.ApplyTurnEffect(points, origin);
            const a = (out[0].GetX() === 0) && (out[0].GetY() === 2);
            const b = (out[1].GetX() === 1) && (out[1].GetY() === 2);
            const c = (out[2].GetX() === 1) && (out[2].GetY() === 1);
            const d = (out[3].GetX() === 1) && (out[3].GetY() === 0);
            if (a && b && c && d) {}
            else throw new Error('失敗');
        });

        it('一周した北向きの回転を正しく適用できる.', ()=>
        {
            angle.TurnRight();
            const out = angle.ApplyTurnEffect(points, origin);
            const a = (out[0].GetX() === 0) && (out[0].GetY() === 0);
            const b = (out[1].GetX() === 0) && (out[1].GetY() === 1);
            const c = (out[2].GetX() === 1) && (out[2].GetY() === 1);
            const d = (out[3].GetX() === 2) && (out[3].GetY() === 1);
            if (a && b && c && d) {}
            else throw new Error('失敗');
        });
    });
});