import thunk from 'redux-thunk'
import axios from 'axios'
import { createStore, applyMiddleware } from 'redux';
import reducers from '../client/reducers';

export default (req) => {
    const axiosInstance = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: { cookies: req.get('cookies') || '' }
    })

    const store = createStore(
        reducers,
        {},
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    )

    return store
}
