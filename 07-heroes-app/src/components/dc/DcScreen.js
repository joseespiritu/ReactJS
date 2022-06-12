import { HeroList } from "../hero/HeroList";

export const DcScreen = () => {
  return (
    <div className="container mt-5">
      <h1>Dc Comics</h1>
      <hr />
      <HeroList publisher={"DC Comics"} />
    </div>
  );
};
