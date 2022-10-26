function FilmDisplay(props)
{
    return (
        <div className='film'>
            <a href={'display_film_info.html?id=' + props.id}>
                <img src={ props.image} className='film-cover'/>
            </a>
            <h5 className='film-title'>{props.title}</h5>
            <h6 className='film-subtitle'>{props.original_title}</h6>
        </div>
    );
}


function AllFilms(props)
{
    return (
        <>
        {props.films.map((element, i) => {
            return (<FilmDisplay key={i} {...element} ></FilmDisplay>)
        })
        }
        </>
    )
}