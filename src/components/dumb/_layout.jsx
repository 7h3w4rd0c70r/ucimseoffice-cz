
import React from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';

import Icon from 'lib/Icon.jsx';

import TeamSmart from 'smart/team.jsx';
import MosSmart from 'smart/mos.jsx';

export default (props) => {
    return (
        <div>
            <nav className='navigation'>
                <div className='brand'>
                    <a href='/' alt='ucimseoffice.cz'>UčímSeOffice.cz</a>
                </div>
                <div className='links'>
                    <NavLink to='/program' className='link' activeClassName='active'>
                        Program<Icon name='chevron-down' color='white' />
                        <div className='submenu'>
                            <NavLink to='/program/word' className='link' activeClassName='active'>Word 2016</NavLink>
                            <NavLink to='/program/excel' className='link' activeClassName='active'>Excel 2016</NavLink>
                            <NavLink to='/program/powerpoint' className='link' activeClassName='active'>Powerpoint 2016</NavLink>
                            <NavLink to='/program/onenote' className='link' activeClassName='active'>OneNote 2016</NavLink>
                        </div>
                    </NavLink>
                    <NavLink to='/mos' className='link' activeClassName='active'>Certifikace</NavLink>
                    <NavLink to='/trainings' className='link' activeClassName='active'>Školení</NavLink>
                    <NavLink to='/team' className='link' activeClassName='active'>Naši experti</NavLink>
                </div>
            </nav>
            <article className='content'>
                <Switch>
                    <Route path='/team' component={TeamSmart} />
                    <Route path='/mos' component={MosSmart} />
                    <Route path='/trainings' render={() => {
                        return (
                            <div className='container'>
                                <div className='trainings'>
                                    <div className='header'>
                                        Školení na míru
                                        <div className='sub'>Máte zájem o školení speciálně u vás ve firmě či škole?</div>
                                    </div>
                                    <div>
                                        <p>
                                            Chcete-li svým zaměstnancům dopřát možnost obohacení o nové dovednosti, potřebujete-li své zaměstnance zaškolit v nových verzích programů Microsoft Office, nebo pokud chcete svým žákům zpestřit výuku, naši experti jsou tady pro Vás. Napište nám na emailovou adresu <a href='mailto:skoleni@ucimseoffice.cz' alt='Mail to us'>skoleni@ucimseoffice.cz</a>, společně se na všem domluvíme a pošleme k Vám některého z našich expertů.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    }} />
                    <Route path='/program/word' render={() => <div className='container'><div className='header'><h1>Pracujeme na tom...</h1></div></div>} />
                    <Route path='/program/excel' render={() => <div className='container'><div className='header'><h1>Pracujeme na tom...</h1></div></div>} />
                    <Route path='/program/powerpoint' render={() => <div className='container'><div className='header'><h1>Pracujeme na tom...</h1></div></div>} />
                    <Route path='/program/onenote' render={() => <div className='container'><div className='header'><h1>Pracujeme na tom...</h1></div></div>} />
                    <Route exact strict path='/' render={() => <div className='container'><div className='header'><h1>
                        Pracujeme na tom...</h1></div></div>} />
                    {/*<Route path='/' component={} />
                    <Route path='/' component={} />
                    <Route path='/' component={} />*/}
                    <Route render={() => {
                        return <div className='container'><div className='header'><h1>Tato stránka neexistuje :(</h1></div></div>;
                    }} />
                </Switch>
            </article>
            <footer className='footer'>

            </footer>
        </div>
    );
}
