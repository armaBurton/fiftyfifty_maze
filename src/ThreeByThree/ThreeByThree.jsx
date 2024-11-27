import Labyrinth from "../views/Labyrinth/Labyrinth";
import SideBar from "../views/Labyrinth/SideBar/SideBar";

const ThreeByThree = () => {
  //   const size = 3;
  return (
    // <main>
    <div className="mazeViewer">
      <section className="mazeSection">
        <Labyrinth size={3} />
      </section>
      <SideBar />
    </div>
    // </main>
  );
};

export default ThreeByThree;
