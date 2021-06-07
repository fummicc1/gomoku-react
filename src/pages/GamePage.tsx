import { Box, createMuiTheme, Grid } from '@material-ui/core';
import React, { useState } from 'react'
import { generateStartingBoard } from '../hooks/useGameBoard';
import { Board } from '../models/Board';
import { DiskType } from '../models/DiskType';

function GamePiece(diskType: DiskType | null) {
    let diskColor: string
    if (diskType == null) {
        diskColor = "transparent"
    } else {
        diskColor = diskType == "dark" ? "#0c0c0c" : "#F0F0F0"
    }
    return (
        <Box className="GamePiece" borderRadius="50%" color={diskColor} />
    )
}

export function GamePage(initialBoard: Board) {

    const [board, setBoard] = useState(initialBoard)

    let list = []

    for (let i = 0; i < board.size; i++) {
        const row = board.disks.filter((disk) => {
            disk.row == i
        })
        const rowGrids = row.map((disk, j) => {
            <Grid container item xs={1} spacing={2}>
                <GamePiece diskType={disk.type} />
            </Grid>
        })
        list.push()
    }

    return (
        <Box className="GamePage">
            <Grid container>
                {
                    for (let i = 0; i < board.size; {

                }
                }
                <Grid container item xs={board.size} spacing={2}>

                </Grid>
            </Grid>
        </Box>
    )
}

GamePage.defaultProps = generateStartingBoard()