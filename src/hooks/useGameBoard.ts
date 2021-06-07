import React, { useState } from 'react'
import { Board, Disk } from '../models/Board'

export function generateStartingBoard(size: number = 8): Board {
    let disks: Disk[] = []
    for (let i = 0; i < size * size; i++) {
        const disk: Disk = {
            type: null,
            row: i / size,
            column: i % size
        }
        disks.push(disk)
    }
    return new Board(8, disks)
}