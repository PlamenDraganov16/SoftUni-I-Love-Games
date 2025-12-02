// import { useEffect, useState } from "react"
import Game from "../game/game.jsx";
import useRequest from "../../hooks/useRequest.js";

export default function Catalog() {
    const { data: games } = useRequest('/data/games', []);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await fetch('http://localhost:3030/jsonstore/games')

    //             const result = await response.json()

    //             setGames(Object.values(result))
    //         } catch (error) {
    //             alert(error.message);
    //         }

    //     })();
    // }, [])

    return (
        <section id="catalog-page">
            <h1>Catalog</h1>

            {games.length === 0 && <h3 className="no-articles">No Added Games Yet</h3>}

            <div className="catalog-container">
                {games.map(game => <Game key={game._id} {...game} />)}
            </div>


        </section>
    )
}