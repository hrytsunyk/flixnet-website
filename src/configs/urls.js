const [discover, movies, genres, search] = ['discover', 'movie', 'genre', 'search'];

const baseEndpoint = process.env.REACT_APP_BASE_URL;
const getImg = process.env.REACT_APP_IMG_URL;
const getAvatar =process.env.REACT_APP_AVATAR_IMG;
const access_token = process.env.REACT_APP_ACCESS;

const urls = {
    base: {
        baseEndpoint,
        getImg,
        getAvatar,
        access_token
    },
    movies: {
        moviesList: `${discover}/${movies}`,
        movieId: (movieId) => `${discover}/${movies}/${movieId}`
    },
    search:{
        searchList: (name) => `${movies}/${search}/${name}`
    }

}

export {
    urls
}