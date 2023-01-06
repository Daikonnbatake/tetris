/******************************************************************************
 *
 * テトリスのゲームルールを制御するファイルです.
 *
******************************************************************************/


const GameRule =
{
  /****************************************************************************
   *
   * 盤面の設定
   *
  ****************************************************************************/
  Field:
  {
      FieldWidth:  10,          // 盤面の横幅(マス目の数)を設定します.
      FieldHeight: 20,          // 盤面の高さ(マス目の数)を設定します.
      TetriMinoSpawnPointX: 4,  // テトリミノが出現する位置のX座標を設定します.
      TetriMinoSpawnPointY: 5,  // テトリミノが出現する位置のY座標を設定します.


      /*----------------------------------------------------------------------+
      *
      * ブロック種別の定義(いらないかも)
      *
      +----------------------------------------------------------------------*/
      Block:
      {
        Air:        0, // 空気ブロック(描画しない領域を表す)
        Wall:       1, // 壁ブロック
        Yellow:     2, // 黄色のブロック
        LightBlue:  3, // 水色のブロック
        Purple:     4, // 紫色のブロック
        Orange:     5, // 橙色のブロック
        DarkBlue:   6, // 青色のブロック
        Red:        7, // 赤色のブロック
        Green:      8, // 緑色のブロック
      }
  },


  /****************************************************************************
   *
   * テトリミノの設定
   *
  ****************************************************************************/
  TetriMino:
  {
    TetriMinoShape:
    [
      /*-- Oミノの設定 ------------------------------------------------------*/
      {
        Name:           'O',       // ミノの名前.
        SRSPaddingType: 'None',    // SRS の設定.
        BlockType:       2,        // ブロックの見た目のID.
        RotateOriginX:   0.5,      // このミノの中点のX座標.
        RotateOriginY:   0.5,      // このミノの中点のY座標.

        Points:                    // このミノの構造を表す座標の集合.
        [
          {x: 0, y: 0},            // _|0|1|2|
          {x: 0, y: 1},            // 0|# #
          {x: 1, y: 0},            // 1|# #
          {x: 1, y: 1},            // 2|
        ]
      },


      /*-- Iミノの設定 ------------------------------------------------------*/
      {
        Name:           'I',       // ミノの名前.
        SRSPaddingType: 'I-Mino',  // SRS の設定.
        BlockType:       3,        // ブロックの見た目のID.
        RotateOriginX:   1.5,      // このミノの中点のX座標.
        RotateOriginY:   1.5,      // このミノの中点のY座標.

        Points:                    // このミノの構造を表す座標の集合.
        [
          {x: 0, y: 1},            // _|0|1|2|3|
          {x: 1, y: 1},            // 0|
          {x: 2, y: 1},            // 1|# # # #
          {x: 3, y: 1},            // 2|
        ]                          // 3|
      },


      /*-- Tミノの設定 ------------------------------------------------------*/
      {
        Name:           'T',       // ミノの名前.
        SRSPaddingType: 'Default', // SRS の設定.
        BlockType:       4,        // ブロックの見た目のID.
        RotateOriginX:   1,        // このミノの中点のX座標.
        RotateOriginY:   1,        // このミノの中点のY座標.

        Points:                    // このミノの構造を表す座標の集合.
        [
          {x: 1, y: 0},            // _|0|1|2|
          {x: 0, y: 1},            // 0|  #
          {x: 1, y: 1},            // 1|# # #
          {x: 2, y: 1},            // 2|
        ]
      },


      /*-- Lミノの設定 ------------------------------------------------------*/
      {
        Name:           'L',       // ミノの名前.
        SRSPaddingType: 'Default', // SRS の設定.
        BlockType:       5,        // ブロックの見た目のID.
        RotateOriginX:   1,        // このミノの中点のX座標.
        RotateOriginY:   1,        // このミノの中点のY座標.

        Points:                    // このミノの構造を表す座標の集合.
        [
          {x: 2, y: 0},            // _|0|1|2|
          {x: 0, y: 1},            // 0|    #
          {x: 1, y: 1},            // 1|# # #
          {x: 2, y: 1},            // 2|
        ]
      },


      /*-- Jミノの設定 ------------------------------------------------------*/
      {
        Name:           'J',       // ミノの名前.
        SRSPaddingType: 'Default', // SRS の設定.
        BlockType:       6,        // ブロックの見た目のID.
        RotateOriginX:   1,        // このミノの中点のX座標.
        RotateOriginY:   1,        // このミノの中点のY座標.

        Points:                    // このミノの構造を表す座標の集合.
        [
          {x: 0, y: 0},            // _|0|1|2|
          {x: 0, y: 1},            // 0|#
          {x: 1, y: 1},            // 1|# # #
          {x: 2, y: 1},            // 2|
        ]
      },


      /*-- Zミノの設定 ------------------------------------------------------*/
      {
        Name:           'Z',       // ミノの名前.
        SRSPaddingType: 'Default', // SRS の設定.
        BlockType:       7,        // ブロックの見た目のID.
        RotateOriginX:   1,        // このミノの中点のX座標.
        RotateOriginY:   1,        // このミノの中点のY座標.

        Points:                    // このミノの構造を表す座標の集合.
        [
          {x: 0, y: 0},            // _|0|1|2|
          {x: 1, y: 0},            // 0|# #
          {x: 1, y: 1},            // 1|  # #
          {x: 2, y: 1},            // 2|
        ]
      },


      /*-- Sミノの設定 ------------------------------------------------------*/
      {
        Name:           'S',       // ミノの名前.
        SRSPaddingType: 'Default', // SRS の設定.
        BlockType:       8,        // ブロックの見た目のID.
        RotateOriginX:   1,        // このミノの中点のX座標.
        RotateOriginY:   1,        // このミノの中点のY座標.

        Points:                    // このミノの構造を表す座標の集合.
        [
          {x: 1, y: 0},            // _|0|1|2|
          {x: 2, y: 0},            // 0|  # #
          {x: 0, y: 1},            // 1|# #
          {x: 1, y: 1},            // 2|
        ]
      },
    ],


    /**************************************************************************
     *
     * SRS(スーパー ローテーション システム) の設定
     *
     * 補足:
     *  SRS とは、テトリミノの周囲に他のミノや壁があり普通には回転できない場合に
     *  補正を掛けることでより直感的な回転(Tスピン等の回転入れ)を
     *  実現するシステムのことです。
     *  参考: https://tetrisch.github.io/main/srs.html
     *
    **************************************************************************/
    SRSPaddingOrder:
    [

      /*----------------------------------------------------------------------+
      *
      * 通常の SRS 設定(T, L, J, Z, S ミノ用).
      *
      +----------------------------------------------------------------------*/
      {
        Type: 'Default',
        Transition:
        {
          NtoW: [{x:  1, y: 0}, {x:  1, y: -1}, {x: 0, y:  2}, {x:  1, y:  2}],
          NtoE: [{x: -1, y: 0}, {x: -1, y: -1}, {x: 0, y:  2}, {x: -1, y:  2}],

          EtoN: [{x:  1, y: 0}, {x:  1, y:  1}, {x: 0, y: -2}, {x:  1, y: -2}],
          EtoS: [{x:  1, y: 0}, {x:  1, y:  1}, {x: 0, y: -2}, {x:  1, y: -2}],

          StoE: [{x: -1, y: 0}, {x: -1, y: -1}, {x: 0, y:  2}, {x: -1, y:  2}],
          StoW: [{x:  1, y: 0}, {x:  1, y:  1}, {x: 0, y:  2}, {x:  1, y:  2}],

          WtoS: [{x: -1, y: 0}, {x: -1, y:  1}, {x: 0, y: -2}, {x: -1, y: -2}],
          WtoN: [{x: -2, y: 0}, {x: -2, y:  1}, {x: 0, y: -2}, {x: -1, y: -2}],
        }
      },


      /*----------------------------------------------------------------------+
      *
      * 特殊な SRS 設定1 (Iミノ用).
      *
      +----------------------------------------------------------------------*/
      {
        Type: 'I-Mino',
        Transition:
        {
          NtoW: [{x: -1, y: 0}, {x:  2, y: 0}, {x: -1, y: -2}, {x:  2, y:  1}],
          NtoE: [{x: -1, y: 0}, {x:  2, y: 0}, {x: -1, y:  1}, {x:  2, y: -2}],

          EtoN: [{x:  2, y: 0}, {x: -1, y: 1}, {x:  2, y: -1}, {x: -1, y:  2}],
          EtoS: [{x: -1, y: 0}, {x:  2, y: 0}, {x: -1, y: -2}, {x:  2, y:  1}],

          StoE: [{x:  1, y: 0}, {x: -2, y: 0}, {x:  1, y:  2}, {x: -2, y: -1}],
          StoW: [{x:  2, y: 0}, {x: -1, y: 1}, {x:  2, y: -1}, {x: -1, y:  2}],

          WtoS: [{x:  1, y: 0}, {x: -2, y: 1}, {x: -2, y:  1}, {x:  1, y: -2}],
          WtoN: [{x: -2, y: 0}, {x:  1, y: 1}, {x:  1, y:  2}, {x: -2, y: -1}],
        }
      },


      /*----------------------------------------------------------------------+
      *
      * 特殊な SRS 設定2 (Oミノ用).
      *
      +----------------------------------------------------------------------*/
      {
        Type: 'None',
        Transition:
        {
          NtoW: [{x:  0, y: 0}],
          NtoE: [{x:  0, y: 0}],

          EtoN: [{x:  0, y: 0}],
          EtoS: [{x:  0, y: 0}],

          StoE: [{x:  0, y: 0}],
          StoW: [{x:  0, y: 0}],

          WtoS: [{x:  0, y: 0}],
          WtoN: [{x:  0, y: 0}],
        }
      },
    ],


    /**************************************************************************
     *
     * ブロック固定条件の設定
     *
    **************************************************************************/
    LockDown:
    {
      TimeToFixing: 500,  // 接地後、固定するまでの猶予時間(ミリ秒).
      ActionChance:  15,  // 接地後、回転・左右移動を許容する回数.
    }
  }
}