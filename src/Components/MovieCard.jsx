import { Link } from "react-router-dom";

function MovieCard({movie:{poster_path,vote_average,title,id}}) {
 
   
    

    return (
        <div className="movieCard">
            <Link to={`movie/${id}`} >
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="moviePoster" />
            </Link>
            <div className="movieCardFooter">
                <div className="movieCardDetails">
                    <h2 className="movieCardTitle">{title}</h2>
                    <p className="movieCardRating">{vote_average}</p>
                </div>
                <div className="fovButton">#</div>
            </div>
        </div>
    )
}
export default MovieCard;