const Status = () => {
  return (
    <div className="py-10 lg:py-16 bg-linear-(--primaryGradient)">
      {/* status container */}

      <div className="flex justify-center flex-wrap gap-5 sm:gap-12 md:gap-20 lg:gap-30  max-w-7xl mx-auto w-[90%]">
        <div className="space-y-5 text-center text-white">
          <h2 className="font-extrabold text-3xl md:text-4xl lg:text-6xl ">
            50K+
          </h2>
          <p className="font-medium text-lg lg:text-2xl ">Active Users</p>
        </div>

        <div className="space-y-5   text-white border-x text-center px-7 sm:px-10 md:px-20 lg:px-30">
          <h2 className="font-extrabold text-3xl md:text-4xl lg:text-6xl">
            200K+
          </h2>
          <p className="font-medium text-lg lg:text-2xl ">Premium Tools</p>
        </div>
        <div className="space-y-5 text-center text-white">
          <h2 className="font-extrabold text-3xl md:text-4xl lg:text-6xl ">
            4.9
          </h2>
          <p className="font-medium text-lg lg:text-2xl ">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Status;
