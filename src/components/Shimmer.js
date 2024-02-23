const Shimmer = () => {
  let arr = new Array(15);
  return (
    <div className="shimmer-container">
      {arr.fill(<div className="shimmer-card"></div>)}
    </div>
  );
};

export default Shimmer;
