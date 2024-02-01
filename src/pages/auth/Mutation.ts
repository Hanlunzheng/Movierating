export const mutationLogin = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/authentication/guest_session/new",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDRlYzBlNzQxYTgzMmIwYzM2Y2Y2OTkxMTcwZTI3OSIsInN1YiI6IjY1NGM5MTFlMWFjMjkyN2IzMzg5ODBlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i8IzN_JDg9xQG5CWYOjZWTjpybd7zKKpD1NQqG1if7M",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error in mutationLogin:", error);
    throw error;
  }
};
