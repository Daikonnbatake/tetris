/***********************************************************************
 *
 *   ゲームルールを参照して各種インスタンスを生成する.
 *
***********************************************************************/

class GenerateFromGameRules
{

    /*-----------------------------------------------------------------+
    *
    * 説明: SRSTransitionCache を生成する.
    *
    * 戻り値:
    *   SRSTransitionCache: ゲームルールを元に生成したインスタンス.
    *
    +-----------------------------------------------------------------*/
    static SRSTransitionCache()
    {
        let srsCache = new SRSTransitionCache();

        const toPoints = (objArray)=>
        {
            let result = new Array();
            for (const pos of objArray) result.push(new Point(pos.x, pos.y));
            return result;
        };

        for (const srsConf of GameRule.TetriMino.SRSPaddingOrder)
        {
            const srs = new SRSTransitionProperties(srsConf.Type);
            srs.SetNtoW(toPoints(srsConf.Transition.NtoW));
            srs.SetNtoE(toPoints(srsConf.Transition.NtoE));
            srs.SetEtoN(toPoints(srsConf.Transition.EtoN));
            srs.SetEtoS(toPoints(srsConf.Transition.EtoS));
            srs.SetStoE(toPoints(srsConf.Transition.StoE));
            srs.SetStoW(toPoints(srsConf.Transition.StoW));
            srs.SetWtoS(toPoints(srsConf.Transition.WtoS));
            srs.SetWtoN(toPoints(srsConf.Transition.WtoN));

            srsCache.RegistTransition(srs);
        }

        return srsCache;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: TetriMinoCache を生成する.
    *
    * 戻り値:
    *   TetriMinoCache: ゲームルールを元に生成したインスタンス.
    *
    +-----------------------------------------------------------------*/
    static TetriMinoCache()
    {
        let minoCache = new TetriMinoCache();

        const toPoints = (objArray)=>
        {
            let result = new Array();
            for (const pos of objArray) result.push(new Point(pos.x, pos.y));
            return result;
        };

        for (const minoConf of GameRule.TetriMino.TetriMinoShape)
        {
            const name    = minoConf.Name;
            const block   = new Block(minoConf.BlockType, false);
            const originX = minoConf.RotateOriginX;
            const originY = minoConf.RotateOriginY;
            const origin  = new Point(originX, originY);
            const shape   = toPoints(minoConf.Points);

            minoCache.RegistTetriMino(name, block, origin, shape);
        }

        return minoCache;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: テトリミノの名前の一覧を生成する.
    *
    * 戻り値:
    *   Array<string>: テトリミノの名前の一覧.
    *
    +-----------------------------------------------------------------*/
    static KindOfMino()
    {
        let result = new Array();
        for (const minoConf of GameRule.TetriMino.TetriMinoShape)
        {
            result.push(minoConf.Name);
        }

        return result;
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: Puzzle を生成する.
    *
    * 戻り値:
    *   Puzzle: ゲームルールを元に生成したインスタンス.
    *
    +-----------------------------------------------------------------*/
    static Puzzle()
    {
        const fieldWidth  = GameRule.Field.FieldWidth;
        const fieldHeight = GameRule.Field.FieldHeight;
        return new Puzzle(fieldWidth, fieldHeight);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: TetriMinoController を生成する.
    *
    * 戻り値:
    *   TetriMinoController: ゲームルールを元に生成したインスタンス.
    *
    +-----------------------------------------------------------------*/
    static TetriMinoController(puzzle)
    {
        const dasDelay     = GameRule.TetriMino.DASDelay;
        const arrDelay     = GameRule.TetriMino.ARRDelay;
        const fallSpeed    = GameRule.TetriMino.FallSpeedPerSec;
        const actionChance = GameRule.TetriMino.LockDown.ActionChance;
        const timeToFixing = GameRule.TetriMino.LockDown.TimeToFixing;

        return new TetriMinoController(
            puzzle, Math.floor(1000 / fallSpeed),
            dasDelay, arrDelay, actionChance, timeToFixing);
    }


    /*-----------------------------------------------------------------+
    *
    * 説明: TetriMinoBuilder を生成する.
    *
    * 戻り値:
    *   TetriMinoBuilder: ゲームルールを元に生成したインスタンス.
    *
    +-----------------------------------------------------------------*/
    static TetriMinoBuilder(minoCache, srsCache)
    {
        let builder = new TetriMinoBuilder(minoCache, srsCache);

        for (const minoConf of GameRule.TetriMino.TetriMinoShape)
        {
            const name    = minoConf.Name;
            const srsType = minoConf.SRSPaddingType;
            builder.RelationMinoToSRS(name, srsType);
        }

        return builder;
    }
}