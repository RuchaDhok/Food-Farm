const Shimmer = () => {
  let arr = new Array(15);
  return (
    <div className="flex flex-wrap animate-pulse ">
      {arr.fill(
        <div className="w-[225px] h-[300px] p-[10px] m-[9px] rounded-lg bg-slate-100"></div>
      )}
    </div>
  );
};

export default Shimmer;
