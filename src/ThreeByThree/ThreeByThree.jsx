import Labyrinth from "../views/Labyrinth/Labyrinth";

const ThreeByThree = () => {
  return (
    <div className="mazeViewer">
      <section className="mazeSection">
        <Labyrinth size={3} />
      </section>
    </div>
  );
};

export default ThreeByThree;
