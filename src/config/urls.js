const [discover, movies, genres, search] = ['/discover', '/movie', '/genre', '/search'];

const baseURL = process.env.BASE_URL;
const imgURL = process.env.IMG_URL;

const urls = {
    base: {
        baseURL,
        imgURL
    },
    movies: {
        moviesList: `${discover}/${movies}`,
        movieId: (id) => `${discover}/${movies}/${id}`
    }

}

export {
    urls
}