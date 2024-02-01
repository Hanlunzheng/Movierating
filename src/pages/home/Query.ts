//this file is to fetch movies and tv show from open

export const fetchMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDRlYzBlNzQxYTgzMmIwYzM2Y2Y2OTkxMTcwZTI3OSIsInN1YiI6IjY1NGM5MTFlMWFjMjkyN2IzMzg5ODBlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i8IzN_JDg9xQG5CWYOjZWTjpybd7zKKpD1NQqG1if7M",
      },
    }
  );
  return res.json();
};

export const fetchTvShows = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDRlYzBlNzQxYTgzMmIwYzM2Y2Y2OTkxMTcwZTI3OSIsInN1YiI6IjY1NGM5MTFlMWFjMjkyN2IzMzg5ODBlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i8IzN_JDg9xQG5CWYOjZWTjpybd7zKKpD1NQqG1if7M",
      },
    }
  );
  return res.json();
};
