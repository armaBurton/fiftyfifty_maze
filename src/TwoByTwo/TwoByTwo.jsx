import Labyrinth from "../views/Labyrinth/Labyrinth";
// import SideBar from "../views/Labyrinth/SideBar/SideBar";

const TwoByTwo = () => {
  return (
    <div className="mazeViewer">
      <section className="mazeSection">
        <Labyrinth size={2} />
      </section>
      {/* <SideBar /> */}
    </div>

  );
}

export default TwoByTwo;
