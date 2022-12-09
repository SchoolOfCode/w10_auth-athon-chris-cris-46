import useFetch from "../../hooks/useFetch";
import "./jotd.css";

function Jotd() {
  const [state] = useFetch("https://api.jokes.one/jod?category=animal");
  console.log();
  return (
    <div className="jotd">
      <h2>😂Joke of the day😂</h2>

      <p>{state[0].contents.jokes[0].joke.text}</p>
    </div>
  );
}

export default Jotd;
