class Direction
{
    static North() { return 0; }
    static East()  { return 1; }
    static South() { return 2; }
    static West()  { return 3; }
    static TurnRight(direction) { return (direction + 1) % 4 }
    static TurnLeft (direction) { return (direction + 3) % 4 }
}