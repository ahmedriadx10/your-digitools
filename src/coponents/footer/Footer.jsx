import facebookImg from "../../assets/images/Facebook.png";
import instagramImg from "../../assets/images/Instagram.png";
import twitterImg from "../../assets/images/Twitter.png";

const Footer = () => {
  return (
    <footer className="bg-(--primaryColor) pt-30">
      <div className="max-w-300 mx-auto w-[90%]">
        <footer className=" grid sm:grid-cols-[270px_repeat(2,1fr)] md:grid-cols-[300px_repeat(3,1fr)] lg:grid-cols-[350px_repeat(4,1fr)] gap-y-12 gap-x-8 text-neutral-400 pb-10 ">
          <div className="max-w-96">
            <h6 className="text-4xl font-bold text-white mb-4">DigiTools</h6>
            <p>
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <nav className="flex flex-col gap-4  ">
            <h6 className="text-xl text-white font-medium ">Product</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Templates</a>
            <a className="link link-hover">Integrations</a>
          </nav>
          <nav className="flex flex-col gap-4">
            <h6 className="text-xl text-white font-medium ">Company</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Press</a>
          </nav>
          <nav className="flex flex-col gap-4">
            <h6 className="text-xl text-white font-medium ">Resources</h6>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav className="flex flex-col gap-4">
            <h6 className="text-xl text-white font-medium ">Social</h6>
            <div className="flex gap-3">
              <a>
                <img src={instagramImg} alt="instagram image" />
              </a>
              <a>
                <img src={facebookImg} alt="facebook image" />
              </a>
              <a>
                <img src={twitterImg} alt="twitter image" />
              </a>
            </div>
          </nav>
        </footer>

        <div className=" flex gap-5 flex-wrap  justify-between  py-8 border-t border-zinc-700 text-neutral-400">
          <p className="">
            &copy; {new Date().getFullYear()} Digitools. All rights
            reserved.
          </p>

          <ul className="flex gap-5 flex-wrap ">
            <li>
              <a href="" className="link link-hover">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="link link-hover">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="" className="link link-hover">
                Cookie
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
