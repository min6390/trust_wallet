import axios from 'axios';
import PropTypes from 'prop-types';
import Environment from '../common/Environment';
import {showAppLoading} from '../redux/actions/LoadingAction';
import store from '../redux/store/store';


FETCH.propTypes = {
    method: PropTypes.string,
    baseURL: PropTypes.string,
    headers: PropTypes.object,
    url: PropTypes.string,
    params: PropTypes.object,
    data: PropTypes.object,
    timeout: PropTypes.number,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    showLoading: PropTypes.bool,
};
FETCH.defaultProps = {
    timeout: 30 * 1000,
    showLoading: true,
};

function FETCH(props) {
    const {
        method,
        baseURL,
        headers,
        url,
        params,
        data,
        timeout,
        onSuccess,
        onError,
        showLoading = true,
    } = props;

    const config = {
        method,
        baseURL: baseURL || Environment.BASE_URL,
        url,
        params,
        data: data,
        timeout,
    };

    config.headers = {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept': '*/*',
        ...headers,
    };
    showLoading && store.dispatch(showAppLoading(true));
    axios(config).then((res) => {
        onSuccess && onSuccess(res);
        showLoading && store.dispatch(showAppLoading(false));
    }).catch((err) => {
        onError && onError(err);
        showLoading && store.dispatch(showAppLoading(false));
    });
}

const GET = (data) => {
    data.method = 'get';
    return FETCH(data);
};
const POST = (data) => {
    data.method = 'post';
    return FETCH(data);
};
const PUT = (data) => {
    data.method = 'put';
    return FETCH(data);
};
const PATCH = (data) => {
    data.method = 'patch';
    return PATCH(data);
};
const DELETE = (data) => {
    data.method = 'delete';
    return FETCH(data);
};

export default {GET, POST, PUT, PATCH, DELETE};
