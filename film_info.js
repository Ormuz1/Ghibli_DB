window.onload = async function() {
    const film_cover = document.getElementById("film-cover");
    const film_banner = document.getElementById("film-banner");
    const film_title = document.getElementById("film-title");
    const film_subtitle = document.getElementById("film-subtitle");
    const film_description = document.getElementById("film-description");
    const film_director = document.getElementById("film-director");
    const film_producer = document.getElementById("film-producer");
    const film_release_year = document.getElementById("film-release-year");
    const film_rating = document.getElementById("film-rating");
    const film_id = new URL(window.location.href).searchParams.get("id");

    const film_data = await get_film_data(film_id);
    film_cover.src = film_data.image;
    film_title.innerHTML = film_data.title;
    film_subtitle.innerHTML = film_data.original_title;
    film_description.innerHTML = film_data.description;
    film_director.innerHTML = "Director: " + film_data.director;
    film_producer.innerHTML = "Producer: " + film_data.producer;
    film_release_year.innerHTML = "Release year: " + film_data.release_date;
    film_rating.innerHTML = "Average rating: " + film_data.rt_score;
    document.getElementById("page-content").style.animationPlayState = "running";
}