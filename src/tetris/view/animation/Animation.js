class Animation
{
    #fps;
    #nowFrame;
    #maxFrameCount;
    #minFrameCount;
    #isPlay;
    #layers;
    
    AddLayer(priority, animLayer){}
    Play(){}
    Pause(){}
    Stop(){}
}

class AnimationLayer
{
    #startFrame;
    #endFrame;
    #sprite;
    #isHide;
    #animCommands; // Array<AnimationCommand>
    
    Draw(){}
}


class AnimationCommnand
{
    #interpolator;
    #setMethod;
    #valueOffset;
    #valueScale;

    Run(frame){}
}


class AnimationInterpolator
{
    #start;
    #end;
    #interpolation;

    constructor(startFrame, endFrame, interpolation){}
}


class Interpolation
{
    static Liner(volume){}
    static EaseIn(volume){}
    static EaseOut(volume){}
    static EaseInEaseOut(volume){}
}

/* JSON ----------------------------------------------------------------
* 
*  
*
----------------------------------------------------------------------*/