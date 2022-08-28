const FavoriteMovieList = ({ profiles, users, movies}) => {
  return (
    <ul>
      {profiles.map((profile) => {
        const name = users[profile.userID].name;
        const favoriteMove = movies[profile.favoriteMovieID].name;
        return (
          <li key={profile.id}>
            <p>{name} favorite movie is {favoriteMove}.</p>
          </li>
        );

    })}
    </ul>
  );
}

export default FavoriteMovieList;
