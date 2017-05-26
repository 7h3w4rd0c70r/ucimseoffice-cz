
import React from 'react';

const Profile = (name, avatar, about) => {
    return (
        <div className='profile'>
            <div className='avatar'>
                <img src={avatar} />
            </div>
            <div className='name'>{name}</div>
            <div className='about'>{about}</div>
        </div>
    );
}

export default (props) => {
    const Profiles = [ ];
    for (let i = 0; i < 7; i++)
        Profiles.push(Profile(
                    'Lorem Ipsum',
                    'http://lorempixel.com/200/200',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non metus risus. Proin vestibulum, dui et auctor dignissim, tortor turpis tempor ligula, nec interdum magna dui et tortor. Vivamus eros. Vivamus non metus risus. Tempor ligula, nec interdum magna dui et tortor.'
                ));
    return (
        <div className='container'>
            <div className='team'>
                <div className='header'>Naši experti</div>
                <p>
                    Naši experti jsou složeni především ze studentů a bývalých studentů <a href='https://microsoft.cz/stc' target='_blank' alt='STC'>STC</a> - programu společnosti Microsoft, v rámci kterého sami prošli řadou školení pod vedením ostřílených profesionálů z Microsoftu. Každý z nich má řadu zkušeností, které chtějí předat dále.
                </p>
                <div className='profiles'>
                    {Profiles}
                </div>
            </div>
        </div>
    );
}
