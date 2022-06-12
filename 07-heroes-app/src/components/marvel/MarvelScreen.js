import { HeroList } from "../hero/HeroList";

export const MarvelScreen = () => {
  return (
    <div className="container mt-5">
      <h1>MarvelScreen</h1>
      <hr />
      <HeroList publisher={"Marvel Comics"} />
    </div>
  );
};
