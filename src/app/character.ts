export interface Character {
    HP:number;
    MP:number;
    maxHP:number;
    maxMP:number;
    percentHP:number;
    percentMP:number;
    exp:number;
    mainstat:Mainstat;
    substat:Substat;
}

export interface Mainstat {
    str:number;
    agi:number;
    vit:number;
    int:number;
    dex:number;
    luk:number;
}

export interface Substat {
    atk:number;
    def:number;
    matk:number;
    mdef:number;
    hit:number;
    flee:number;
    speed:number;
    cri:number;
}


