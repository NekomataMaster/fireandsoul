export interface CharInfo {
    id_character:number,
    id_user:number,
    partySlot:number,
    memberSlot:number,
    name:string,
    level:number,
    jlevel:number,
    class:number,
    bar:Bar,
    stat:Stat,
    skill:Skill,
    point:Point,
    equipment:Equipment
}

export interface Bar {
    hp:number,
    mp:number,
    exp:number,
    jexp:number
}
export interface Stat {
    str:number,
    agi:number,
    vit:number,
    int:number,
    dex:number,
    luk:number
}
export interface Skill {
    id_skill:number,
    level:number,
    maxlevel:number,
    levelup:boolean
}
export interface Point {
    stat:number,
    skill:number
}
export interface Equipment {
    head1:EquipStat,
    head2:EquipStat,
    armor:EquipStat,
    gloves:EquipStat,
    garment:EquipStat,
    shoes:EquipStat,
    weapon1:EquipStat,
    weapon2:EquipStat,
    accessory1:EquipStat,
    accessory2:EquipStat

}
export interface EquipStat {
    id_item:number,
    upgrade:number,
    maxHP:number,
    maxMP:number,
    atk:number,
    def:number,
    matk:number,
    mdef:number,
    hit:number,
    flee:number,
    speed:number,
    cri:number
    regenMP:number,
    str:number,
    agi:number,
    vit:number,
    int:number,
    dex:number,
    luk:number
}