import React, {useEffect, useState} from 'react';
import TrustContainer from '../components/common/TrustContainer';
import TrustView from '../components/common/TrustView';
import {styles} from './styles';
import Content from '../components/login/Content';
import CharacterList from '../components/login/CharacterList';
import ButtonLogin from '../components/login/ButtonLogin';
import {useTheme} from '@react-navigation/native';
import TrustText from '../components/common/TrustText';
import {io} from 'socket.io-client';


function VerifyLoginContainer(props) {
    const {colors} = useTheme();
    const {route,navigation} = props;
    const item = route.params;
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState([]);
    const onPressLogin=()=>{
        navigation?.navigate('Tab Navigator')
    };

    return (
        <TrustContainer
            hasHeader={false}
            renderContentView={() => {
                return (
                    <TrustView style={[styles.LoginContainer, {backgroundColor: colors.background}]}>
                        <Content
                            txtTitle={'Xác minh các cụm từ khôi phục ví'}
                            txtContent={'Nhấn vào các từ để đặt chúng vào cạnh nhau theo đúng thứ tự'}
                        />
                        <TrustView style={styles.confirmChar}>
                            {newData.map((item, index) => {
                                return (
                                    <TrustView key={index} style={styles.character}>
                                        <TrustText
                                            style={{color: '#AAAAAA'}}
                                            text={item.id + ' '}
                                        />
                                        <TrustText text={item.title}/>
                                    </TrustView>
                                );
                            })}
                        </TrustView>
                        <CharacterList
                            data={item}
                        />
                        <ButtonLogin
                            onPress={onPressLogin}
                            txtLogin={'ĐÚNG òi'}
                        />
                    </TrustView>
                );
            }}
        />
    );
}

export default VerifyLoginContainer;
