const MovieListItem = ({movie, users}) => {
  var usersContent = "No users have favorited this movie!";
  if (users.length <= 0) {
    usersContent = "No users have favorited this movie!";
  } else {
    usersContent = `${users.join(", ")} have favorited this movie!`
  }
  return (
    <li key={movie.id}>
      <p>{movie.name}</p>
      <p>{usersContent}</p>
    </li>
  );
}

export default MovieListItem;
