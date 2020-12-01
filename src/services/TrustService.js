import axios from 'axios';
import PropTypes from 'prop-types';
import Environment from "../common/Environment";

FETCH.propTypes = {
  method: PropTypes.string,
  baseURL: PropTypes.string,
  headers: PropTypes.object,
  url: PropTypes.string,
  params: PropTypes.object,
  data: PropTypes.object,
  timeout: PropTypes.number,
  onSuccess: PropTypes.func,
  onError: PropTypes.func
};
FETCH.defaultProps = {
  timeout: 30 * 1000,
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
  } = props;

  const config = {
    method,
    baseURL: baseURL || Environment.BASE_URL,
    url,
    params,
    data: data,
    timeout,
  }

  config.headers = {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept': '*/*',
    ...headers,
  }

  axios(config).then((res) => {
    onSuccess && onSuccess(res)
  }).catch((err) => {
    onError && onError(err)
  })
}

const GET = (data) => {
  data.method = 'get';
  return FETCH(data);
}
const POST = (data) => {
  data.method = 'post';
  return FETCH(data)
}
const PUT = (data) => {
  data.method = 'put';
  return FETCH(data)
}
const PATCH = (data) => {
  data.method = 'patch';
  return PATCH(data)
}
const DELETE = (data) => {
  data.method = 'delete'
  return FETCH(data)
}

export default {GET, POST, PUT, PATCH, DELETE};
