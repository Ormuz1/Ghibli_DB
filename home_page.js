const film_container = document.getElementById("film-container");

window.onload = async function() {
    const data = await get_all_films();
    console.log(data);
    const root = ReactDOM.createRoot(film_container);
    root.render(
      React.createElement(AllFilms, {films: data}, null)
      )
 
};