import React from 'react';
import './starship.scss';
import img from '../../assets/icons/trophy-svg.svg';
import startshipimg from '../../assets/icons/spaceship-svg.svg'

const Starship = ({ ship, isMostFilms }) => {
    const { name, model, films } = ship;

    return (
        <div className={`ship-container ${isMostFilms ? 'most-films' : ''}`}>

            <section className="left">
                <h2><img src={startshipimg} alt={name} />{name}{isMostFilms && <span className="blink-image"> <img className="trophy_img" src={img} alt={name} /></span>}</h2>

            </section>
            <section className="right">
                <div className='model_align'>
                    <p>Model: </p>
                    <p>{model}</p>
                </div>
                <div>
                    <p className='film_align'>Number of Films: </p>
                    <p>{films.length}</p>
                </div>
            </section>
        </div>
    );
};

export default Starship;