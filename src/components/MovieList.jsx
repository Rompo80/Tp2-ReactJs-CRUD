import Movie from './Movie'


const MovieList = ({ movieList, onDelete, onEdit}) => {
return (
<div> 
      {movieList.map((movie)=>(
          <Movie key={movie.id} movie={movie} onDelete={onDelete} onEdit={onEdit}/>
       ))}
</div>
)
}
export default MovieList
