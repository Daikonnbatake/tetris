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
var S  = [new Point(1, 0), new Point(2, 0), new Point(0, 1), new Point(1, 1)];
var I  = [new Point(0, 1), new Point(1, 1), new Point(2, 1), new Point(3, 1)];
var O  = [new Point(0, 0), new Point(0, 1), new Point(1, 0), new Point(1, 1)];

var tetriMinoCache = new TetriMinoCache();
var srsCache       = new SRSTransitionCache();
var builder        = new TetriMinoBuilder(tetriMinoCache, srsCache);
var puzzle         = new Puzzle(10, 20);

tetriMinoCache.RegistTetriMino('T', new Block(6, false), origin, T);
tetriMinoCache.RegistTetriMino('L', new Block(5, false), origin, L);
tetriMinoCache.RegistTetriMino('S', new Block(2, false), origin, S);
tetriMinoCache.RegistTetriMino('I', new Block(0, false), new Point(0.5, 0.5), I);
tetriMinoCache.RegistTetriMino('O', new Block(1, false), new Point(0.5, 0.5), O);
srsCache.RegistTransition(srs);
builder.RelationMinoToSRS('T', 'default');
builder.RelationMinoToSRS('L', 'default');
builder.RelationMinoToSRS('S', 'default');
builder.RelationMinoToSRS('I', 'default');
builder.RelationMinoToSRS('O', 'default');

var minos   = ['S', 'L', 'T', 'I', 'O'];
var f = true;

var mino = minos[Math.floor(Math.random() * 2) + 3];
puzzle.NewTetriMino(builder.Generate(mino));


async function Start()
{
    await ImageCache.AddImage('./img/tetris.png', 'tetris');
    await ImageCache.AddImage('./img/blocks.png', 'blocks');
}

function Update()
{
    Canvas.Clear();
    let ry = Math.floor(Math.random() * 18);
    image = ImageCache.GetImage('tetris');
    let a = new Sprite(image);
    let t = a.GetTransform();
    a.Split(new Size(8, 8));

    // W
    let keyW = InputManager.GetKeyState('w');
    t.SetPosition(8, 0);
    a.Draw(Canvas.Context(), 32 + keyW);

    // A
    let keyA = InputManager.GetKeyState('a');
    t.SetPosition(0, 8);
    a.Draw(Canvas.Context(), 32 + keyA);

    // S
    let keyS = InputManager.GetKeyState('s');
    t.SetPosition(8, 8);
    a.Draw(Canvas.Context(), 32 + keyS);

    // D
    let keyD = InputManager.GetKeyState('d');
    t.SetPosition(16, 8);
    a.Draw(Canvas.Context(), 32 + keyD);

    t.SetPosition(0, 24);
    a.Join();
    a.Draw(Canvas.Context());

    console.clear();
    const blocks = ImageCache.GetImage('blocks');
    const fieldDrawer = new FieldDrawer(144, 0, 8, 8, blocks);

    puzzle.Fall();
    //if (f)
    //else puzzle.TurnLeft();
    f = !f;

    if (keyA === KeyState.Push()) puzzle.MoveLeft();
    if (keyD === KeyState.Push()) puzzle.MoveRight();
    if (puzzle.IsGround())
    {
        puzzle.FixTetriMino();
        let mino = minos[Math.floor(Math.random() * 2) + 3];
        puzzle.NewTetriMino(builder.Generate(mino));
    }

    fieldDrawer.Draw(puzzle.GetField());
    Canvas.FlipBuffer();
}