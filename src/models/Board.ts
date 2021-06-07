import { DiskType } from "./DiskType"

export type Disk = {
    type: DiskType | null,
    row: number,
    column: number
}

export class Board {
    public size: number

    public disks: Disk[]

    constructor(size: number, disks: Disk[] = []) {
        this.size = size
        this.disks = disks
    }
}