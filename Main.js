async function Start()
{
    await TetrisInitialize();
}

function Update()
{
    if (IsGameOver()) StopTimer();

    HardDrop(GetKeyState('ArrowUp'));
    SoftDrop(GetKeyState('ArrowDown'));
    MoveLeft(GetKeyState('ArrowLeft'));
    MoveRight(GetKeyState('ArrowRight'));
    TurnLeft(GetKeyState('z'));
    TurnRight(GetKeyState('x'));

    if (CanHold()) HoldTetriMino();
    if (IsFixed()) GenerateNextTetriMino();
    if (IsLevelUp()) AccelerateFallSpeed();

    UpdateTetrisCore();

    ClearCanvas();
    TetrisDraw();
    FlipBuffer();
}