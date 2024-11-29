import Labyrinth from "../views/Labyrinth/Labyrinth";
import SideBar from "../views/Labyrinth/SideBar/SideBar";

const ThreeByThree = () => {
  return (
    <div className="mazeViewer">
      <section className="mazeSection">
        <Labyrinth size={3} />
      </section>
      {/* <SideBar /> */}
    </div>
  );
};

export default ThreeByThree;
