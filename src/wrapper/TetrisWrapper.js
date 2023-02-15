/* 初期化 ----------------------------------------------------------------------------------------*/

/* テトリスのインスタンスを生成 */
var tetriMinoCache   = GenerateFromGameRules.TetriMinoCache();
var srsCache         = GenerateFromGameRules.SRSTransitionCache();
var puzzle           = GenerateFromGameRules.Puzzle();
var builder          = GenerateFromGameRules.TetriMinoBuilder(tetriMinoCache, srsCache);
var tetrisController = GenerateFromGameRules.TetriMinoController(puzzle);
var random           = new TetriMinoRandomiser(GenerateFromGameRules.KindOfMino());
var holder           = new TetriMinoHolder();
var lineCounter      = new LineCounter();
var levelCounter     = new LevelCounter();

var nowTetriMinoName = random.GetNext();
puzzle.NewTetriMino(builder.Generate(nowTetriMinoName));
puzzle.SubscribeOnDeleteLines((...args)=>{ lineCounter.Count((args[0].length)); });


/* UIのインスタンスを生成 */
var backToGame = new UIElement(true);
var pauseMenu  = new UIController(backToGame);


/* 初期化 */
async function TetrisInitialize()
{
    await ImageCache.AddImage('./img/pauseNow.png',    'pause');
    await ImageCache.AddImage('./img/blocks.png',      'blocks');
    await ImageCache.AddImage('./img/mini-block.png',  'miniBlocks');
    await ImageCache.AddImage('./img/9slicePanel.png', 'panel');
    await ImageCache.AddImage('./img/bg.png',          'bg');
    await ImageCache.AddImage('./img/scoreNumber.png', 'scoreNumber');
    await ImageCache.AddImage('./img/gameover.png',    'gameover');
}


/* 更新処理 --------------------------------------------------------------------------------------*/

/* ポーズ中かどうか */
function IsPause() { return GameTimer.IsPause(); }

/* ポーズする */
function Pause() { GameTimer.Pause(); }

/* ポーズを解除する */
function UnPause() { GameTimer.UnPause(); }

/* ボタンが押されたかどうかを判定する */
function IsPush(keyState) { return keyState === KeyState.Push(); }

/* ボタンの状態を取得する */
function GetKeyState(keyName) { return InputManager.GetKeyState(keyName); }

/* ボタンの状態に応じてハードドロップを行う */
function HardDrop(buttonState)  { tetrisController.HardDropButton(buttonState); }

/* ボタンの状態に応じてソフトドロップを行う */
function SoftDrop(buttonState)  { tetrisController.SoftDropButton(buttonState); }

/* ボタンの状態に応じて左移動を行う */
function MoveLeft(buttonState)  { tetrisController.MoveLeftButton(buttonState); }

/* ボタンの状態に応じて左回転を行う */
function TurnLeft(buttonState)  { tetrisController.TurnLeftButton(buttonState); }

/* ボタンの状態に応じて右移動を行う */
function MoveRight(buttonState) { tetrisController.MoveRightButton(buttonState); }

/* ボタンの状態に応じて右回転を行う */
function TurnRight(buttonState) { tetrisController.TurnRightButton(buttonState); }

/* ポーズ中パネルを表示する */
function ShowPausePanel() { pauseMenu.Show(); }

/* ポーズ中パネルを隠す */
function HidePausePanel() { pauseMenu.Hide(); }

/* ホールドできるかどうか */
function CanHold()
{
    const keySpace = InputManager.GetKeyState(' ');
    return holder.IsSwappable() && keySpace === KeyState.Push();
}

/* テトリミノが固定されたかどうか */
function IsFixed()
{
    return tetrisController.IsFixed() && !puzzle.IsGameOver();
}

/* レベルが上ったかどうか */
function IsLevelUp()
{
    const lines = lineCounter.GetDeletedLineCount();
    const level = levelCounter.GetNowLevel();
    return Math.floor(lines / 4) != level - 1 && level < GameRule.Field.MaxLevel;
}

function IsGameOver() { return puzzle.IsGameOver(); }

/* テトリミノをホールドする */
function HoldTetriMino()
{
    const nextTetriMinoName = holder.Hold(nowTetriMinoName);
    let   nextTetriMino;
    if (nextTetriMinoName == null)
    {
        nowTetriMinoName = random.GetNext();
        nextTetriMino    = builder.Generate(nowTetriMinoName);
    }
    else nextTetriMino = builder.Generate(nextTetriMinoName);
    puzzle.NewTetriMino(nextTetriMino);
}

/* 次のテトリミノを生成する */
function GenerateNextTetriMino()
{
    nowTetriMinoName    = random.GetNext();
    const nextTetriMino = builder.Generate(nowTetriMinoName);
    puzzle.NewTetriMino(nextTetriMino);
    holder.ResetSwappable();
}

/* 加速する */
function AccelerateFallSpeed()
{
    levelCounter.LevelUp();
    const level = levelCounter.GetNowLevel();
    tetrisController.ChangeFallDelay(1/level * 1000);
}

/* テトリスの更新 */
function UpdateTetrisCore()
{
    tetrisController.Update();
}


/* 描画周り --------------------------------------------------------------------------------------*/

/* 描画バッファをまっさらな状態にする */
function ClearCanvas()
{
    Canvas.Clear();
    const bg     = ImageCache.GetImage('bg');
    const sprite = new Sprite(bg);
    sprite.Draw(Canvas.Context());
}


/* テトリスの描画 */
function TetrisDraw()
{
    const blocks      = ImageCache.GetImage('blocks');
    const mini        = ImageCache.GetImage('miniBlocks');
    const gameover    = ImageCache.GetImage('gameover');
    const fieldDrawer = new FieldDrawer(48, 0, 8, 8, blocks);
    fieldDrawer.Draw(puzzle.GetField());

    const holdDrawer = new HoldDrawer(20, 28, 6, 6, mini);
    holdDrawer.Draw(tetriMinoCache.GetTetriMino(holder.GetHoldingMinoName()));

    const nextDrawer = new NextsDrawer(6, 6, mini);
    const nextMinos  = random.GetNexts();
    const scoreNumber = ImageCache.GetImage('scoreNumber');
    const scoreDrawer = new ScoreDrawer(8, 8, scoreNumber);
    const timeDrawer  = new TimeDrawer(8, 8, scoreNumber);

    nextDrawer.SetPositions(
        new Point(156, 28),
        new Point(188, 28),
        new Point(220, 28),
        new Point(220, 60),
        new Point(220, 92),
        new Point(220, 124),
    );

    nextDrawer.Draw(
        tetriMinoCache.GetTetriMino(nextMinos[0]),
        tetriMinoCache.GetTetriMino(nextMinos[1]),
        tetriMinoCache.GetTetriMino(nextMinos[2]),
        tetriMinoCache.GetTetriMino(nextMinos[3]),
        tetriMinoCache.GetTetriMino(nextMinos[4]),
        tetriMinoCache.GetTetriMino(nextMinos[5]),
    );

    timeDrawer.Draw(192, 59, GameTimer.GetTime());
    scoreDrawer.Draw(192, 87, levelCounter.GetNowLevel());
    scoreDrawer.Draw(192, 115, lineCounter.GetDeletedLineCount());

    if (puzzle.IsGameOver())
    {
        const sprite = new Sprite(gameover);
        sprite.GetTransform().SetPosition(48, 56);
        sprite.Draw(Canvas.Context());
    }
}


/* UI の描画 */
function UIDraw()
{
    let buttonImage = new Sprite(ImageCache.GetImage('pause'));
    let panelImage  = new Sprite(ImageCache.GetImage('panel'));
    let button      = new ButtonDrawer(buttonImage, backToGame);
    let panel       = new PanelDrawer(panelImage, backToGame);

    buttonImage.Split(new Size(48, 24));
    panelImage.Split(new Size(8, 8));

    panel.SetPosition(64, 40);
    panel.SetSize(14, 10);
    panel.Draw();

    button.SetOrigin(0, 0);
    button.SetPosition(96, 68);
    button.Draw();
}


/* バッファを反転 */
function FlipBuffer()
{
    Canvas.FlipBuffer();
}