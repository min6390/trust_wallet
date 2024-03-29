import TrustService from '../TrustService';
import PropTypes from 'prop-types';


// const getService = (onSuccess, onError) => {
//     TrustService.GET({
//         url: '/getCoinList',
//         onSuccess,
//         onError,
//     });
// };

// getNews.propTypes = {
//     requestData: {
//         page: PropTypes.number,
//     },
// };
//
//export const GET_NEWS_RESULTS_PER_PAGE = 10;

function getNews( onSuccess, onError,) {
    TrustService.GET({
        url: '/v2/top-headlines',
        params: {
            sources: "techcrunch",
            apiKey: "cad5474cc40f4346b3ddcef68a9a940d",
        },

        onSuccess,
        onError,
    });
}

export default {
    getNews,

};
