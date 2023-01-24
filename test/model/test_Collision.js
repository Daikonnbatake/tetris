/***********************************************************************
 *
 * 　Collision クラスの検証を行う.
 *
***********************************************************************/

// 検証用インスタンス
var test_collisionA = new Collision(); // Jミノの形.
var test_collisionB = new Collision(); // A と部分的に重なる.
var test_collisionC = new Collision(); // A と完全に重なる.
var test_collisionD = new Collision(); // A と重ならない.

test_collisionA.Add(0, 0); /* _|0|1|2|3|  */
test_collisionA.Add(0, 1); /* 0|#         */
test_collisionA.Add(1, 1); /* 1|# # #     */
test_collisionA.Add(2, 1); /* 2|          */

test_collisionB.Add(0, 0); /* _|0|1|2|3|  */
test_collisionB.Add(1, 0); /* 0|# # #     */
test_collisionB.Add(2, 0); /* 1|    #     */
test_collisionB.Add(2, 1); /* 2|          */

test_collisionC.Add(0, 0); /* _|0|1|2|3|  */
test_collisionC.Add(0, 1); /* 0|#         */
test_collisionC.Add(1, 1); /* 1|# # #     */
test_collisionC.Add(2, 1); /* 2|          */

test_collisionD.Add(1, 0); /* _|0|1|2|3|  */
test_collisionD.Add(2, 0); /* 0|  # # #   */
test_collisionD.Add(3, 0); /* 1|      #   */
test_collisionD.Add(3, 1); /* 2|          */

describe('Collision', ()=>
{
    describe('Collision.IsOverlap()', ()=>
    {
        it('部分的に重なる場合.', ()=>
        {
            if (test_collisionA.IsOverlap(test_collisionB)){}
            else throw new Error('失敗');
        });

        it('完全に重なる場合.', ()=>
        {
            if (test_collisionA.IsOverlap(test_collisionC)){}
            else throw new Error('失敗');
        });

        it('全く重なっていない場合.', ()=>
        {
            if (!test_collisionA.IsOverlap(test_collisionD)){}
            else throw new Error('失敗');
        });
    });

    describe('Collision.Clear()', ()=>
    {
        it('正しく衝突判定を削除できる.', ()=>
        {
            test_collisionA.Clear();
            if (!test_collisionA.IsOverlap(test_collisionC)){}
            else throw new Error('失敗');
        });
    });
});