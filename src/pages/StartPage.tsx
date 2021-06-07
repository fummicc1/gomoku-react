import { Box, createMuiTheme, ThemeProvider, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import game_igo_ban from './../images/game_igo_ban.png'

const theme = createMuiTheme({
    spacing: 8
})

export function StartPage() {
    return (
        <ThemeProvider theme={theme}>
            <Box className="StartPage" m={3}>
                <Typography variant="h3" color="textSecondary" align="center">
                    五目並べ
            </Typography>
                <img src={game_igo_ban} alt="" />
                <Link to={`/game`}>
                    <Typography variant="body1" color="primary" align="center">
                        ゲームを開始
                    </Typography>
                </Link>
            </Box>
        </ThemeProvider>
    )
}