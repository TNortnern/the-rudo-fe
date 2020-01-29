import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { getWrestlers } from '../actions/wrestlers';

const Home = ({wrestlers, getWrestlers}) => {
    return (
        <div>
            {JSON.stringify(wrestlers)}
            <button onClick={() => getWrestlers('test')}>Update Wrestler List</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        wrestlers: state.wrestlers
    }
}

export default connect(mapStateToProps, { getWrestlers })(Home);