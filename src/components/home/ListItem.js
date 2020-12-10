// import TrustTouchableOpacity from '../common/TrustTouchableOpacity';
// import {styles} from '../../containers/styles';
// import TrustImage from '../common/TrustImage';
// import Images from '../../common/Images';
// import TrustView from '../common/TrustView';
// import Dimens from '../../common/Dimens';
// import TrustText from '../common/TrustText';
// import TrustLine from '../common/TrustLine';
// import {useTheme} from '@react-navigation/native';
//
// const ListItem = (item) => {
//     const {colors}=useTheme()
//     console.log('itemmmmmmmmmmmmmmmmmmmmmmm',item)
//     return (
//         <>
//             <TrustTouchableOpacity
//                 style={[styles.content]}
//                 onPress={() => navigation?.navigate('Detail', item)}
//             >
//                 <TrustImage
//                     style={styles.image}
//                     localSource={Images.im_xrp}
//                 />
//                 <TrustView style={{marginHorizontal: Dimens.scale(10)}}>
//                     <TrustText
//                         style={{color: colors.textColor}}
//                         text={item.name}
//                     />
//                     <TrustText
//                         style={{color: '#8C8FBF'}}
//                         text={item.price}
//                     />
//                 </TrustView>
//             </TrustTouchableOpacity>
//             <TrustLine/>
//         </>
//     );
// };
// export default ListItem
