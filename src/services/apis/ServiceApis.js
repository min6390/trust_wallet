import TrustService from '../TrustService';
import PropTypes from 'prop-types';


const getService = (onSuccess, onError) => {
    TrustService.GET({
        url: '/getCoinList',
        onSuccess,
        onError,
    });
};

// getNews.propTypes = {
//     requestData: {
//         page: PropTypes.number,
//     },
// };
//
// export const GET_NEWS_RESULTS_PER_PAGE = 10;
//
// function getNews(requestData, onSuccess, onError) {
//     TrustService.GET({
//         url: '/api/v1/post',
//         params: {
//             page: requestData.page,
//             results_per_page: GET_NEWS_RESULTS_PER_PAGE,
//         },
//         onSuccess,
//         onError,
//     });
// }

export default {
    getService,

};
