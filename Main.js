/* テトリスのインスタンスを生成 ---------------------------------------*/

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



/* UIのインスタンスを生成 ---------------------------------------------*/

var backToGame = new UIElement(true);
var pauseMenu  = new UIController(backToGame);


/* 初期化 ------------------------------------------------------------*/
async function Start()
{
    await ImageCache.AddImage('./img/pauseNow.png',    'pause');
    await ImageCache.AddImage('./img/blocks.png',      'blocks');
    await ImageCache.AddImage('./img/mini-block.png',  'miniBlocks');
    await ImageCache.AddImage('./img/9slicePanel.png', 'panel');
    await ImageCache.AddImage('./img/bg.png',          'bg');
    await ImageCache.AddImage('./img/scoreNumber.png', 'scoreNumber');
    await ImageCache.AddImage('./img/gameover.png',    'gameover');
}


/* 更新処理 ----------------------------------------------------------*/
function Update()
{
    // 描画用バッファをまっさらな状態にする.
    Canvas.Clear();
    const bg     = ImageCache.GetImage('bg');
    const sprite = new Sprite(bg);
    sprite.Draw(Canvas.Context());


    /* 入力の制御 --------------------------------------------------- */

    // 各キーの入力状態をチェック.
    const keyW        = InputManager.GetKeyState('ArrowUp');
    const keyA        = InputManager.GetKeyState('ArrowLeft');
    const keyS        = InputManager.GetKeyState('ArrowDown');
    const keyD        = InputManager.GetKeyState('ArrowRight');
    const keyPositive = InputManager.GetKeyState('z');
    const keyNegative = InputManager.GetKeyState('x');
    const keySpace    = InputManager.GetKeyState(' ');
    const keyEsc      = InputManager.GetKeyState('Escape');

    if (puzzle.IsGameOver()) GameTimer.Pause();
    else
    {
        // ポーズ/ポーズ解除の切替.
        if (keyEsc === KeyState.Push())
        {
            if (pauseMenu.IsShow()) pauseMenu.Hide();
            else pauseMenu.Show();
        }

        if (pauseMenu.IsShow()) GameTimer.Pause();
        else
        {
            // ポーズ中でない時(パズル画面の操作).
            GameTimer.UnPause();
            tetrisController.HardDropButton(keyW);
            tetrisController.SoftDropButton(keyS);
            tetrisController.MoveLeftButton(keyA);
            tetrisController.MoveRightButton(keyD);
            tetrisController.TurnLeftButton(keyPositive);
            tetrisController.TurnRightButton(keyNegative);
        }
    }


    /* テトリスの制御 ----------------------------------------------- */

    if (!pauseMenu.IsShow())
    {
        if (holder.IsSwappable() && keySpace === KeyState.Push())
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

        if (tetrisController.IsFixed() && !puzzle.IsGameOver())
        {
            nowTetriMinoName    = random.GetNext();
            const nextTetriMino = builder.Generate(nowTetriMinoName);
            puzzle.NewTetriMino(nextTetriMino);
            holder.ResetSwappable();
        }

        tetrisController.Update();


        const lines = lineCounter.GetDeletedLineCount();
        const level = levelCounter.GetNowLevel();
        if (Math.floor(lines / 1) != level - 1 && level < GameRule.Field.MaxLevel)
        {
            levelCounter.LevelUp();
            const level = levelCounter.GetNowLevel();
            console.log(level);
            tetrisController.ChangeFallDelay(1/level * 1000);
        }
    }

    /* テトリスの描画 ----------------------------------------------- */

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


    /* UIの描画 ----------------------------------------------------- */

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


    /* バッファを反転 ------------------------------------------------ */
    Canvas.FlipBuffer();
}