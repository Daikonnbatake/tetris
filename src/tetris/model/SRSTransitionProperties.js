/***********************************************************************
 *
 * 　SRS のズラし遷移を生成するための申込用紙の役割を果たすクラス.
 *
***********************************************************************/

class SRSTransitionProperties
{
    #name;
    #srsPadd;

    constructor(name)
    {
        this.#name = name;
        this.#srsPadd = new Object();
    }

    SetNtoW(points) { this.#srsPadd[RotateDiff.NtoW()] = points; }
    SetNtoE(points) { this.#srsPadd[RotateDiff.NtoE()] = points; }
    SetEtoN(points) { this.#srsPadd[RotateDiff.EtoN()] = points; }
    SetEtoS(points) { this.#srsPadd[RotateDiff.EtoS()] = points; }
    SetStoE(points) { this.#srsPadd[RotateDiff.StoE()] = points; }
    SetStoW(points) { this.#srsPadd[RotateDiff.StoW()] = points; }
    SetWtoS(points) { this.#srsPadd[RotateDiff.WtoS()] = points; }
    SetWtoN(points) { this.#srsPadd[RotateDiff.WtoN()] = points; }

    GetName() { return this.#name; }
    GetNtoW() { return this.#srsPadd[RotateDiff.NtoW()]; }
    GetNtoE() { return this.#srsPadd[RotateDiff.NtoE()]; }
    GetEtoN() { return this.#srsPadd[RotateDiff.EtoN()]; }
    GetEtoS() { return this.#srsPadd[RotateDiff.EtoS()]; }
    GetStoE() { return this.#srsPadd[RotateDiff.StoE()]; }
    GetStoW() { return this.#srsPadd[RotateDiff.StoW()]; }
    GetWtoS() { return this.#srsPadd[RotateDiff.WtoS()]; }
    GetWtoN() { return this.#srsPadd[RotateDiff.WtoN()]; }
}