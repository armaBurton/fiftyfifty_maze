import Labyrinth from "../views/Labyrinth/Labyrinth";
import SideBar from "../views/Labyrinth/SideBar/SideBar";

const TwoByTwo = () => {
  //   const size = 2;
  return (
    <>
    // <main>
        <div className="mazeViewer">
          <section className="mazeSection">
            <Labyrinth size={2} />
          </section>
          <SideBar />
        </div>
      // </main>
    </>

  );
}

export default TwoByTwo;
