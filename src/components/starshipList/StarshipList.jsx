import React, { useState, useEffect } from "react";
import fetchStartshipList from '../../api/api';
import Starship from "../starship/Starship";
import './starshipList.scss';
import image from '../../assets/icons/startwar_logo_f.png';
import loader from '../../assets/icons/loader.gif';


const StarshipList = () => {
    const [starships, setStartships] = useState([]);
    const [mostFilmsShip, setMostFilmsShip] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchStarships = async () => {
            try {
                setLoading(true);
                const response = await fetchStartshipList();
                // Sort ships by crew size and filter out ships with crew > 10
                const filteredStarships = response.results
                    .filter((starship) => starship.crew <= 10)
                    .sort((a, b) => a.crew - b.crew);
                setStartships(filteredStarships);

                // Calculate which ship appeared in the most films
                const mostFilmsShip = filteredStarships.reduce((prev, current) =>
                    prev.films.length > current.films.length ? prev : current
                );
                setMostFilmsShip(mostFilmsShip);
                setLoading(false);
                console.log(mostFilmsShip);
            } catch (error) {
                console.error("Error fetching starships:", error);
            }
        };
        fetchStarships();
    }, [])

    const filteredShips = starships.filter((ship) =>
        ship.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app-container">
            {loading && <img src={loader} alt="Loading..." />}
            {!loading && <><div className="centered_logo">
                <img className="startwar_logo" src={image} alt="Logo" />
            </div><div className="search-sort">
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
                </div></>
            }
            {filteredShips.length === 0 ? (
                !loading && <p className="noresults_item">No results found.</p>
            ) : (
                <div className="ships-list">
                    {filteredShips.map((ship, index) => (
                        <Starship
                            key={index}
                            ship={ship}
                            isMostFilms={ship === mostFilmsShip}
                        />
                    ))}

                </div>
            )}
        </div>
    )
}

export default StarshipList;