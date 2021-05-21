import { DiskType } from "./DiskType"

export type Disk = {
    type: DiskType,
    row: number,
    column: number
}

export class Board {
    public size: number

    public disk: Disk[]

    constructor(size: number, disk: Disk[] = []) {
        this.size = size
        this.disk = disk
    }
}