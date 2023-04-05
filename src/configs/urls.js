const [discover, movies, genres, search] = ['discover', 'movie', 'genre', 'search'];

const baseURL = process.env.REACT_APP_BASE_URL;
const imgURL = process.env.IMG_URL;
const avatarImg =process.env.REACT_APP_AVATAR_IMG;
const access_token = process.env.REACT_APP_ACCESS;

const urls = {
    base: {
        baseURL,
        imgURL,
        avatarImg,
        access_token
    },
    movies: {
        moviesList: `${discover}/${movies}`,
        movieId: (id) => `${discover}/${movies}/${id}`
    }

}

export {
    urls
}