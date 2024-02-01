export const fetchMoviesDetails = async (movieId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&page=1`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDRlYzBlNzQxYTgzMmIwYzM2Y2Y2OTkxMTcwZTI3OSIsInN1YiI6IjY1NGM5MTFlMWFjMjkyN2IzMzg5ODBlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i8IzN_JDg9xQG5CWYOjZWTjpybd7zKKpD1NQqG1if7M",
      },
    }
  );
  return res.json();
};
