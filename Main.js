async function Start()
{
    await TetrisInitialize();
}

function Update()
{
    if (IsGameOver())
    {
        Pause();
    }

    else
    {
        if (IsPush(GetKeyState('Escape')))
        {
            if (IsPause())
            {
                UnPause();
                HidePausePanel();
            }
            else
            {
                Pause();
                ShowPausePanel();
            }
        }

        if (!IsPause())
        {
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
        }
    }

    ClearCanvas();
    TetrisDraw();
    UIDraw();
    FlipBuffer();
}