export class Track {
    constructor() {}

    
    private _trackId : number;
    public get trackId() : number {
        return this._trackId;
    }
    public set trackId(v : number) {
        this._trackId = v;
    }
       
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    
}