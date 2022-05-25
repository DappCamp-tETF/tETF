import React from 'react';
import { Image } from 'react-bootstrap'

function Asset(props) {

    const handleClick = x => props.setMyAssets(prevMyAssets => [...prevMyAssets, x])

    return ( 
        <div className='col' style={styles.cards} onClick={() => handleClick(props.assets)} >
        
            <Image className={props.assets.cls} src={props.assets.logo} style={styles.logo} />
            
        </div>
     );
}

export default Asset;

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