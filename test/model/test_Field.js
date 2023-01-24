/***********************************************************************
 *
 * 　Field クラスの検証を行う.
 *
***********************************************************************/

describe('Field', ()=>
{
    describe('Field.DrawMutable()', ()=>
    {
        it('範囲内に正しくブロックを描画できる.', ()=>
        {
            let test_field = new Field(10, 20);
            let test_block = new Block(1, false);

            test_field.DrawMutable(0, 0, test_block);
            const field = test_field.GetField();

            if (field[0][0].GetType() === 1){}
            else throw new Error('失敗(正しくない種類)');

            if (!field[0][0].IsHidden()){}
            else throw new Error('失敗(正しくない可視性)');
        });

        it('範囲外に描画してもエラーを出さない.', ()=>
        {
            let test_field = new Field(10, 20);
            let test_block = new Block(1, false);

            try { test_field.DrawMutable(30, 30, test_block); }
            catch(e) { throw e; }
        });
    });

    describe('Field.ClearMutable()', ()=>
    {
        it('移動可能ブロックを削除できる.', ()=>
        {
            let test_field = new Field(10, 20);
            let test_block = new Block(1, false);

            test_field.DrawMutable(0, 0, test_block);
            test_field.ClearMutable();
            const field = test_field.GetField();

            if (field[0][0].GetType() === 0){}
            else throw new Error('失敗(正しくない種類)');

            if (field[0][0].IsHidden()){}
            else throw new Error('失敗(正しくない可視性)');
        });
    });

    describe('Field.FlushMutable()', ()=>
    {
        it('移動可能ブロックを書き込める.', ()=>
        {
            let test_field = new Field(10, 20);
            let test_block = new Block(1, false);

            test_field.DrawMutable(5, 5, test_block);
            test_field.FlushMutable();
            const field = test_field.GetField();

            if (field[5][5].GetType() === 1){}
            else throw new Error('失敗(正しくない種類)');

            if (!field[5][5].IsHidden()){}
            else throw new Error('失敗(正しくない可視性)');
        });
    });

    describe('Field.DeleteLines()', ()=>
    {
        it('揃った行のみを削除できる.', ()=>
        {
            let test_field = new Field(10, 20);
            let test_block = new Block(1, false);

            for (let i=0; i<10; i++)
            {
                test_field.DrawMutable(i, 1, test_block);
            }

            test_field.FlushMutable();
            test_field.DeleteLines();
            const field = test_field.GetField();

            for (let i=0; i<10; i++)
            {
                if (field[0][0].GetType() === 0){}
                else throw new Error('失敗(正しくない種類)');

                if (field[0][0].IsHidden()){}
                else throw new Error('失敗(正しくない可視性)');
            }

            if (field.length === 20){}
            else throw new Error('失敗(行数が維持されていない)');

            const result = test_field.GetDeletedLines();
            if (result.length === 1 && result[0] === 1){}
            else throw new Error('失敗(正しい行が出力されていない)');
        });
    });

    describe('Field.GetCollision()', ()=>
    {
        it('正しい当たり判定を取得できる.',()=>
        {
            let test_field     = new Field(10, 20);
            let test_block     = new Block(1, false);
            let test_collision = new Collision();

            test_field.DrawMutable(9, 19, test_block);
            test_collision.Add(9, 19);

            test_field.FlushMutable();
            const result = test_field.GetCollision();

            if (test_collision.IsOverlap(result)){}
            else throw new Error('失敗');
        });
    });
});