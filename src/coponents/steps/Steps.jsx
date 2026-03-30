import profileImg from "../../assets/images/user.png";
import packageImg from "../../assets/images/package.png";
import rocketImg from "../../assets/images/rocket.png";
const Steps = () => {
  return (
    <section className="py-30 bg-[#F9FAFC]">
      <div className="text-center space-y-4">
        <h4 className="text-4xl sm:text-5xl font-extrabold text-(--primaryColor)">
          Get Started in 3 Steps
        </h4>
        <p className="text-(--primaryContent) leading-5">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* steps card container */}

     
      </div> 
      
        <div className="max-w-7xl mx-auto w-[90%] grid gap-7.5    sm:grid-cols-2 lg:grid-cols-3 pt-10">
          <div className=" space-y-4 p-6 border-2 border-zinc-200 transition-transform rounded-2xl">
            <div className=" flex justify-end">
              <span className="bg-linear-(--primaryGradient) w-10 h-10 inline-flex justify-center items-center font-bold text-white rounded-full">
                01
              </span>
            </div>
            <div>
              <img src={profileImg} alt="user image" className="mx-auto" />
            </div>

            <h6 className="text-2xl font-bold text-(--primaryColor)">
              Create Account
            </h6>

            <p className="text-(--primaryContent)">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="space-y-4 p-6 border-2 border-zinc-200 rounded-2xl">
            <div className=" flex justify-end">
              <span className="bg-linear-(--primaryGradient) w-10 h-10 inline-flex justify-center items-center font-bold text-white rounded-full">
                02
              </span>
            </div>
            <div>
              <img src={packageImg} alt="package image" className="mx-auto" />
            </div>

            <h6 className="text-2xl font-bold text-(--primaryColor)">
              Choose Products
            </h6>

            <p className="text-(--primaryContent)">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
          <div className="space-y-4 p-6 border-2 border-zinc-200 rounded-2xl">
            <div className=" flex justify-end">
              <span className="bg-linear-(--primaryGradient) w-10 h-10 inline-flex justify-center items-center font-bold text-white rounded-full">
                03
              </span>
            </div>
            <div>
              <img src={rocketImg} alt="rocket image" className="mx-auto" />
            </div>

            <h6 className="text-2xl font-bold text-(--primaryColor)">
              Start Creating
            </h6>

            <p className="text-(--primaryContent)">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
    </section>
  );
};

export default Steps;
