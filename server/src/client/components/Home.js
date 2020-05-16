import React, { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
            <div>
                Home Component!
            </div>
            <button onClick={() => alert("Hi!")}>Press me!</button>
        </Fragment>
    );
};

export default Home;