const [discover, movies, genres, search,videos,popular, top] =
    ['discover', 'movie', 'genre', 'search','videos', 'popular','top_rated'];

const baseEndpoint = process.env.REACT_APP_BASE_URL;
const getImg = process.env.REACT_APP_IMG_URL;
const getAvatar =process.env.REACT_APP_AVATAR_IMG;
const access_token = process.env.REACT_APP_ACCESS;

const youTube= 'https://www.youtube.com/embed/'

const urls = {
    base: {
        baseEndpoint,
        getImg,
        getAvatar,
        access_token,
        youTube
    },
    movies: {
        moviesList: `${discover}/${movies}`,
        movieId: (movieId) => `${movies}/${movieId}`,
        popularList: `${movies}/${popular}`,
        top: `${movies}/${top}`
    },
    search:{
        searchList:`${search}/${movies}`
    },
    genres: {
        genresList: `${genres}/${movies}/list`,
        sortedList: `${discover}/${movies}`,

    },
    videos:{
        videosById: (movieId)=>`${movies}/${movieId}/${videos}`
    }

}

export {
    urls
}