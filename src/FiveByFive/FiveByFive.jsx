import Labyrinth from "../views/Labyrinth/Labyrinth";
import SideBar from "../views/Labyrinth/SideBar/SideBar";

const FiveByFive = () => {
  //   const size = 3;
  return (
    // <main>
    <div className="mazeViewer">
      <section className="mazeSection">
        <Labyrinth size={5} />
      </section>
      <SideBar />
    </div>
    // </main>
  );
};

export default FiveByFive;
