import React, {} from 'react';
import TrustText from '../common/TrustText';
import TrustView from '../common/TrustView';
import {styles} from './styles';
import {useTheme} from '@react-navigation/native';


function OldCharacterList(props) {
     const {data, } = props;
    const {colors}=useTheme();
    return (
        <TrustView style={styles.characterContain}>
            {data.map((item, index) => {
                return (
                    <TrustView
                        key={index}
                        style={styles.character}
                    >
                        <TrustText
                            style={{color: '#AAAAAA'}}
                            text={index + 1 + ' '}
                        />
                        <TrustText
                            style={{color:colors.textColor}}
                            text={item.title}/>
                    </TrustView>
                );
            })}
        </TrustView>
    );
}

export default OldCharacterList;
