import { useEffect, useState } from "react";

function useFetch(url) {
  const [state, setState] = useState([""]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setState([data]))
      .catch((err) => setError(err));
  }, [url]);

  if (error) {
    console.log(error);
    console.log(state);
    return <p>Error!</p>;
  }
  return [state];
}

export default useFetch;
