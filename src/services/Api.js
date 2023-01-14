import axios from 'axios';



    // export const apiResult = async (name, page) => {
    // const response = await axios.get(
    //     `https://pixabay.com/api/?q=${name}&page${page}&key=30952901-4af86608fbbf1ce290900eb34&image_type=photo&orientation=horizontal&per_page=12`
    // );
    // return response.data;
    // };

    export const fetchArticlesWithQuery = async (name, page) => {
        const response = await axios.get(`https://pixabay.com/api/?q=${name}&page=${page}&key=30952901-4af86608fbbf1ce290900eb34&image_type=photo&orientation=horizontal&per_page=12`);
        return response.data.hits;
      };
      
