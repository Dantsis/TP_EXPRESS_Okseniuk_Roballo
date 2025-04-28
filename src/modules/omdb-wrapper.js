import axios from "axios";

const APIKEY = "b4878ff6";

export async function OMDBSearchByPage(search, p) {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${search}&page=${p}`);
    return res.data;
}

export async function OMDBSearchComplete(search) {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${search}`);
    return res.data;
}

export async function OMDBGetByImdbID(imdbID) {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`);
    return res.data;
}
