import React from 'react'
import { Link } from 'react-router-dom'
import game_igo_ban from './../images/game_igo_ban.png'


export function StartPage() {
    return (
        <div className="StartPage">
            <h1>五目並べ</h1>
            <img src={game_igo_ban} alt="" />
            <Link to={`/prepare`}>準備画面へ</Link>
        </div>
    )
}