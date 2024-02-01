export const rateMovie = async (movieId: number, rating: number) => {
  try {
    const guestSessionId = localStorage.getItem("guest_session_id");

    if (!guestSessionId) {
      throw new Error("Guest session ID not found in localStorage");
    }

    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session=${guestSessionId}&api_key=YOUR_API_KEY`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json;charset=utf-8",
        },
        body: `{"value": ${rating}}`,
      }
    );

    if (!res.ok) {
      throw new Error(
        `Failed to rate movie. HTTP error! Status: ${res.status}`
      );
    }

    return res.json();
  } catch (error) {
    console.error("Error in rateMovie:", error);
    throw error;
  }
};

// Similar changes for ratebigTvShow function

export const ratebigTvShow = async (TvshowId: number, rating: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${TvshowId}/rating?guest_session=${localStorage.getItem(
      "guest_session_id"
    )}&api_key=144ec0e741a832b0c36cf6991170e279`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json;charset=utf-8",
      },
      body: `{"value": ${rating}}`,
    }
  );

  return res.json();
};
