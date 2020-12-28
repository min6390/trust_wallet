import React from 'react'
import TrustText from '../common/TrustText';
import TrustView from '../common/TrustView';
import {styles} from './styles';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';

function CharacterList(props) {
    const {data}=props;

    return(
        <TrustView style={styles.characterContain}>
            {data.map((item, index) => {
                return (
                    <TrustTouchableOpacity key={index} style={styles.character}>
                        <TrustText
                            style={{color: '#AAAAAA'}}
                            text={item.id + ' '}
                        />
                        <TrustText text={item.title}/>
                    </TrustTouchableOpacity>
                );
            })}
        </TrustView>
    )
}

export default CharacterList
