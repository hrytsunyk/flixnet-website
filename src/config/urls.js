const [discover, movies, genres, search] = ['/discover', '/movie', '/genre', '/search'];

const baseURL = process.env.BASE_URL;
const imgURL = process.env.IMG_URL;
const avatarImg =
    'https://clinicadentalboadillamajadahonda.com/' +
    'wp-content/uploads/bfi_thumb/cual-es-la-importancia' +
    '-de-una-buena-sonrisa-3hfv6srwxvh30zf9fd7ri8.jpg';


const urls = {
    base: {
        baseURL,
        imgURL,
        avatarImg
    },
    movies: {
        moviesList: `${discover}/${movies}`,
        movieId: (id) => `${discover}/${movies}/${id}`
    }

}

export {
    urls
}