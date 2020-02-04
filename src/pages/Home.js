import React from 'react';
import { connect } from 'react-redux'
import { getWrestlers } from '../actions/wrestlers';
import WrestlerList from '../components/Wrestlers/WrestlerList';

const Home = ({wrestlers, getWrestlers}) => {

    return (
        <div>
            <WrestlerList />
        </div>
    );
}

export default Home;