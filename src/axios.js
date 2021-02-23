import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://tinderclone-be.herokuapp.com/'
})

export default instance;