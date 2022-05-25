import React from 'react';

function Calc(props) {


    return ( 
        <div className='col' style={styles.cards}>
            <h3>{props.assets.name}</h3>
            
        </div>
     );
}

export default Calc;

const styles = {
    cards: {
        height: '100px',
        width: '100px',
        display: 'inline-block'
    },
    logo: {
        height: '75px',
        width: '75px'
    },
    name: {
        fontSize: '14px'
    }
}