export interface Item {
    id_user:number,
    partySlot:number,
    itemList:itemList
}

export interface itemList {
    id_item:number,
    upgrade:number,
    volume:number
}