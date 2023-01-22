/* テトリスの部分 -----------------------------------------------------*/

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

const srs = new SRSTransitionProperties('default');
srs.SetNtoW(NtoW);
srs.SetNtoE(NtoE);
srs.SetEtoN(EtoN);
srs.SetEtoS(EtoS);
srs.SetStoE(StoE);
srs.SetStoW(StoW);
srs.SetWtoS(WtoS);
srs.SetWtoN(WtoN);


var block  = new Block(6, false);
var origin = new Point(1, 1);
var T  = [new Point(1, 0), new Point(0, 1), new Point(1, 1), new Point(2, 1)];
var L  = [new Point(2, 0), new Point(0, 1), new Point(1, 1), new Point(2, 1)];
var J  = [new Point(0, 0), new Point(0, 1), new Point(1, 1), new Point(2, 1)];
var S  = [new Point(1, 0), new Point(2, 0), new Point(0, 1), new Point(1, 1)];
var Z  = [new Point(0, 0), new Point(1, 0), new Point(1, 1), new Point(2, 1)];
var I  = [new Point(0, 1), new Point(1, 1), new Point(2, 1), new Point(3, 1)];
var O  = [new Point(0, 0), new Point(0, 1), new Point(1, 0), new Point(1, 1)];

var tetriMinoCache = new TetriMinoCache();
var srsCache       = new SRSTransitionCache();
var builder        = new TetriMinoBuilder(tetriMinoCache, srsCache);
var puzzle         = new Puzzle(10, 20);

tetriMinoCache.RegistTetriMino('T', new Block(6, false), origin, T);
tetriMinoCache.RegistTetriMino('L', new Block(5, false), origin, L);
tetriMinoCache.RegistTetriMino('J', new Block(4, false), origin, J);
tetriMinoCache.RegistTetriMino('S', new Block(2, false), origin, S);
tetriMinoCache.RegistTetriMino('Z', new Block(3, false), origin, Z);
tetriMinoCache.RegistTetriMino('I', new Block(0, false), new Point(1.5, 1.5), I);
tetriMinoCache.RegistTetriMino('O', new Block(1, false), new Point(0.5, 0.5), O);
srsCache.RegistTransition(srs);
builder.RelationMinoToSRS('T', 'default');
builder.RelationMinoToSRS('L', 'default');
builder.RelationMinoToSRS('J', 'default');
builder.RelationMinoToSRS('S', 'default');
builder.RelationMinoToSRS('Z', 'default');
builder.RelationMinoToSRS('I', 'default');
builder.RelationMinoToSRS('O', 'default');

var minos   = ['S', 'Z', 'L', 'J', 'T', 'I', 'O'];

var mino = minos[Math.floor(Math.random() * 7)];
puzzle.NewTetriMino(builder.Generate(mino));

var tetriMinoFallControll = new TetriMinoFallController(puzzle, 1000);
var tetriMonoHolizontalControll = new TetriMinoHolizontalController(puzzle, 176, 32);
var fixJudge = new TetriMinoFixJudge(15, 500);

var tetriMinoController = new TetriMinoController(
    puzzle,
    tetriMinoFallControll,
    tetriMonoHolizontalControll,
    fixJudge
);


/* UIの部分 ----------------------------------------------------------*/

var buttonPresenterTOP     = new ButtonPresenter();
var buttonPresenterBOTTOM  = new ButtonPresenter(true);
var buttonPresenterYES     = new ButtonPresenter(true);
var buttonPresenterNO      = new ButtonPresenter(true);
var uiController           = new UIController(buttonPresenterTOP);

buttonPresenterTOP.GetRelation().SetBottom(buttonPresenterBOTTOM);
buttonPresenterTOP.GetRelation().SetChild(buttonPresenterYES);
buttonPresenterBOTTOM.GetRelation().SetTop(buttonPresenterTOP);

buttonPresenterYES.GetRelation().SetRight(buttonPresenterNO);
buttonPresenterNO.GetRelation().SetLeft(buttonPresenterYES);
var frameCount = 0;
var frameTimer = 0;

//uiController.Show();



/* 初期化 ------------------------------------------------------------*/
async function Start()
{
    await ImageCache.AddImage('./img/button.png', 'button');
    await ImageCache.AddImage('./img/tetris.png', 'tetris');
    await ImageCache.AddImage('./img/blocks.png', 'blocks');
    await ImageCache.AddImage('./img/9slicePanel.png', 'panel');
    await ImageCache.AddImage('./img/yesButton.png', 'yesButton');
    await ImageCache.AddImage('./img/noButton.png', 'noButton');
}


/* 更新処理 ----------------------------------------------------------*/
function Update()
{
    Canvas.Clear();
    image = ImageCache.GetImage('tetris');
    let a = new Sprite(image);
    let t = a.GetTransform();
    a.Split(new Size(8, 8));

    const keyW = InputManager.GetKeyState('ArrowUp');
    const keyA = InputManager.GetKeyState('ArrowLeft');
    const keyS = InputManager.GetKeyState('ArrowDown');
    const keyD = InputManager.GetKeyState('ArrowRight');
    const keyPositive = InputManager.GetKeyState('z');
    const keyNegative = InputManager.GetKeyState('x');
    const keyEsc = InputManager.GetKeyState('Escape');

    // W
    t.SetPosition(8, 0);
    a.Draw(Canvas.Context(), 32 + keyW);

    // A
    t.SetPosition(0, 8);
    a.Draw(Canvas.Context(), 32 + keyA);

    // S
    t.SetPosition(8, 8);
    a.Draw(Canvas.Context(), 32 + keyS);

    // D
    t.SetPosition(16, 8);
    a.Draw(Canvas.Context(), 32 + keyD);


    /* テトリスの部分 ----------------------------------------------- */
    const blocks = ImageCache.GetImage('blocks');
    const fieldDrawer = new FieldDrawer(144, 0, 8, 8, blocks);

    tetriMinoController.Update();

    if (tetriMinoController.IsFixed())
    {
        puzzle.FixTetriMino();
        let mino = minos[Math.floor(Math.random() * 7)];
        puzzle.NewTetriMino(builder.Generate(mino));
        tetriMinoController.Reset();
    }

    fieldDrawer.Draw(puzzle.GetField());


    /* UIの部分 ----------------------------------------------------- */

    let buttonImage    = new Sprite(ImageCache.GetImage('button'));
    let buttonImageYes = new Sprite(ImageCache.GetImage('yesButton'));
    let buttonImageNo  = new Sprite(ImageCache.GetImage('noButton'));
    let panelImage     = new Sprite(ImageCache.GetImage('panel'));
    let buttonYES      = new ButtonDrawer(buttonImageYes, buttonPresenterYES);
    let buttonNO       = new ButtonDrawer(buttonImageNo, buttonPresenterNO);
    let buttonTOP      = new ButtonDrawer(buttonImage, buttonPresenterTOP);
    let buttonBOTTOM   = new ButtonDrawer(buttonImage, buttonPresenterBOTTOM);
    let panel          = new PanelDrawer(panelImage, buttonPresenterYES);
    let pausePanel     = new PanelDrawer(panelImage, buttonPresenterTOP);

    buttonImage.Split(new Size(40, 16));
    buttonImageYes.Split(new Size(40, 16));
    buttonImageNo.Split(new Size(40, 16));
    panelImage.Split(new Size(8, 8));

    if (keyEsc === KeyState.Push())
    {
        if (uiController.IsShow()) uiController.Hide();
        else uiController.Show();
    }

    if (uiController.IsShow())
    {
        GameTimer.Pause();
        if (keyW === KeyState.Push()) uiController.PushUp();
        if (keyS === KeyState.Push()) uiController.PushDown();
        if (keyA === KeyState.Push()) uiController.PushLeft();
        if (keyD === KeyState.Push()) uiController.PushRight();
        if (keyPositive === KeyState.Push()) uiController.PushPositive();
        if (keyNegative === KeyState.Push()) uiController.PushNegative();
    }
    else
    {
        GameTimer.UnPause();
        tetriMinoController.HardDropButton(keyW);
        tetriMinoController.SoftDropButton(keyS);
        tetriMinoController.MoveLeftButton(keyA);
        tetriMinoController.MoveRightButton(keyD);
        tetriMinoController.TurnLeftButton(keyPositive);
        tetriMinoController.TurnRightButton(keyNegative);
    }

    pausePanel.SetPosition(80, 48);
    pausePanel.SetSize(10, 8);
    pausePanel.Draw();

    buttonTOP.SetOrigin(0, 0);
    buttonTOP.SetPosition(100, 64);
    buttonTOP.Draw();

    buttonBOTTOM.SetOrigin(0, 0);
    buttonBOTTOM.SetPosition(100, 88);
    buttonBOTTOM.Draw();

    panel.SetPosition(64, 40);
    panel.SetSize(14, 10);
    panel.Draw();

    buttonYES.SetOrigin(0, 0);
    buttonYES.SetPosition(76, 96);
    buttonYES.Draw();

    buttonNO.SetOrigin(0, 0);
    buttonNO.SetPosition(124, 96);
    buttonNO.Draw();


    /* 描画 --------------------------------------------------------- */
    Canvas.FlipBuffer();
}