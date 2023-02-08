class GenerateFromGameRules
{
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


    static KindOfMino()
    {
        let result = new Array();
        for (const minoConf of GameRule.TetriMino.TetriMinoShape)
        {
            result.push(minoConf.Name);
        }

        return result;
    }


    static Puzzle()
    {
        const fieldWidth  = GameRule.Field.FieldWidth;
        const fieldHeight = GameRule.Field.FieldHeight;
        return new Puzzle(fieldWidth, fieldHeight);
    }


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