export interface Status {
    HP:number,
    MP: number,
    maxHP: number,
    maxMP: number,
    percentHP: number,
    percentMP: number,
    atk: number,
    def: number,
    matk: number,
    mdef: number,
    hit: number,
    flee: number,
    speed: number,
    cri: number
    regenMP: number,
    stat: Stat
}

export interface Stat {
    str:number,
    agi:number,
    vit:number,
    int:number,
    dex:number,
    luk:number
}