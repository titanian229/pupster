import axios from 'axios'

export default {
    dogList: () => {
        return axios.get("https://dog.ceo/api/breeds/list")
    },

    breedSearch: (search) => {
        return axios.get(`https://dog.ceo/api/breed/${encodeURI(search.split(' ').join('/'))}/images`)
    }
}