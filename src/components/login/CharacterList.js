import React, {} from 'react';
import TrustText from '../common/TrustText';
import TrustView from '../common/TrustView';
import {styles} from './styles';
import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
import store from '../../redux/store/store';
import {setCharData} from '../../redux/actions/CharAction';
import {setOldCharData} from '../../redux/actions/OldCharAction';
import {useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';

function CharacterList() {
    let {oldCharData} = useSelector(state => state.oldCharData);
    const {colors} = useTheme();
    return (
        <TrustView style={[styles.characterContain,]}>
            {oldCharData.map((item, index) => {
                return (
                    <TrustTouchableOpacity
                        key={index}
                        style={[styles.character,]}
                        onPress={() => {
                            const state = store.getState();
                            const {charData} = state.charData;
                            const arr = charData.filter((charItem) => charItem.id === item.id);
                            if (arr?.length === 0) {
                                charData.push(item);
                                const new_arr = oldCharData.filter(char => char !== item);
                                store.dispatch(setOldCharData(Object.assign([], new_arr)));
                                store.dispatch(setCharData(charData));
                            }
                        }}>
                        <TrustText
                            style={{color:colors.textColor}}
                            text={item.title}/>
                    </TrustTouchableOpacity>
                );
            })}
        </TrustView>
    );
}

export default CharacterList;
