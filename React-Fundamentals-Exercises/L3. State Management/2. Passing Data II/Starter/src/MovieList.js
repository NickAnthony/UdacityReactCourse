import MovieListItem from "./MovieListItem.js";

const MovieList = ({profiles, users, movies}) => {
  const profileAr = Object.values(profiles);
  return (
    <ul>
      {Object.values(movies).map((movie) => {
        const favoriteMovieProfiles = profileAr.filter((profile) => (
          parseInt(profile.favoriteMovieID) === movie.id
        ));
        const favoriteMovieUsers = favoriteMovieProfiles.map((profile) => (
          users[profile.userID].name
        ));
        return (<MovieListItem  key={movie.id} movie={movie} users={favoriteMovieUsers} />);
      })
      }
    </ul>
  );
}

export default MovieList;
