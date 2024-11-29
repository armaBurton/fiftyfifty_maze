import Labyrinth from "../views/Labyrinth/Labyrinth";
// import SideBar from "../views/Labyrinth/SideBar/SideBar";

const FiveByFive = () => {
  return (
    <div className="mazeViewer">
      <section className="mazeSection">
        <Labyrinth size={5} />
      </section>
      {/* <SideBar /> */}
    </div>
  );
};

export default FiveByFive;
