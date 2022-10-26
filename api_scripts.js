const base_url = "https://ghibliapi.herokuapp.com";
const films_endpoint = base_url + "/films";

async function get_all_films() {
    let data = await fetch(films_endpoint + "?fields=id,title,original_title,image&limit=250", {
            method: "GET",
        })
        .then(result => result.json());
    return data
}

async function get_film_data(film_id) {
    let data = await fetch(films_endpoint + "/" + film_id, {
            method: "GET"
        })
        .then(result => result.json());
    return data;
}