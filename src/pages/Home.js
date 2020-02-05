import React from 'react';
import WrestlerList from '../components/Wrestlers/WrestlerList';

const Home = ({wrestlers, getWrestlers}) => {

    return (
        <div>
            <WrestlerList />
        </div>
    );
}

export default Home;