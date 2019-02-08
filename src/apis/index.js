import axios from 'axios'

export default axios.create({
    baseURL: 'http://jsonserverforforumapp.herokuapp.com'
})