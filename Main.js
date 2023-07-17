async function Start()
{
    await TetrisInitialize();
}

function Update()
{
    HardDrop(GetKeyState('ArrowUp'));
    SoftDrop(GetKeyState('ArrowDown'));
    MoveLeft(GetKeyState('ArrowLeft'));
    MoveRight(GetKeyState('ArrowRight'));
    TurnLeft(GetKeyState('z'));
    TurnRight(GetKeyState('x'));

    if (CanHold()) HoldTetriMino();

    if (IsFixed()) GenerateNextTetriMino();

    UpdateTetrisCore();

    ClearCanvas();
    TetrisDraw();
    FlipBuffer();
}