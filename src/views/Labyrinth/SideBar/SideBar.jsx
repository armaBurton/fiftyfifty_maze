const SideBar = ({ iterations = 0, success, failure, mazLength }) => {
  return iterations !== undefined ? (
    <div className="sideBar">
      <h2>iterations: {iterations}</h2>
      <h2>success: 400</h2>
      <h2>failure: 600</h2>
      <h2>ratio: 2/3</h2>
    </div>
  ) : <></>
};
export default SideBar;
