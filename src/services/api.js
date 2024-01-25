import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

function getData({query, page = 1, per_page}){
    return axios.get("", {
    params: {
      key: '41812412-8184544d67aaee5dc545e6a16',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page,
    }}).then(({data}) => data)
}

export {getData}