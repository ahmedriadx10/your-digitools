import heroImag from "../../assets/images/banner.png";
import icon from "../../assets/images/gradientIcon.png";
import Button from "../ui/Button";
import PlayIcon from "../../assets/images/Play.png";
const Hero = () => {
  return (
    <section className="max-w-300 mx-auto w-[90%]">
      <div className="py-20">
        <div className="flex justify-between items-center   flex-col lg:flex-row-reverse gap-14">
          <img src={heroImag} className="lg:max-w-sm   "  alt="banner img"/>
          <div className=" lg:max-w-2xl space-y-4 ">
            <div className="flex gap-1.5 items-center  max-w-max py-2 px-4 rounded-full bg-[#E1E7FF]">
              <div>
                <img src={icon} alt="gradient hero icon" />
              </div>
              <p className="font-medium bg-linear-(--primaryGradient) bg-clip-text text-transparent">
                New: AI-Powered Tools Available
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl  xl:text-6xl font-extrabold text-(--primaryColor) ">
              Supercharge Your
            </h1>
            <h1 className="text-4xl sm:text-5xl  xl:text-6xl font-extrabold text-(--primaryColor) ">
              Digital Workflow
            </h1>
            <p className="leading-7 text-(--primaryContent)">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            {/* hero buttons */}

            <div className="gap-4 py-4 flex">
              <Button
                text="Explore Products"
                fontWeight={"bold"}
                extraStyle={"transition-transform hover:-translate-y-0.5"}
              />
              <button className="btn btn-primary  btn-outline font-bold  rounded-full transition-transform  hover:-translate-y-0.5">
                <img src={PlayIcon} alt="play icon"  />
                <span className="bg-linear-(--primaryGradient) bg-clip-text text-transparent ">
                  Watch Demo
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
