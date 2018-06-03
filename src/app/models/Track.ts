export class Track {
    constructor() {}

    
    private _trackId : number;
    public get trackId() : number {
        return this._trackId;
    }
    public set trackId(v : number) {
        this._trackId = v;
    }
    
}