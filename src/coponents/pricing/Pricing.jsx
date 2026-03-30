

const Pricing = () => {
  return (
    <section className="py-30">
      <div className="text-center space-y-4 ">
        <h4 className=" text-4xl sm:text-5xl font-extrabold text-(--primaryColor)">
          Simple, Transparent Pricing
        </h4>
        <p className="text-(--primaryContent)">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* pricing cards */}

      <div className="max-w-7xl mx-auto w-[90%] grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10  ">
        <div className="card rounded-2xl  bg-[#F9FAFC]  border-2 border-zinc-100">
          <div className="card-body space-y-3 justify-between">
            <div className="space-y-2">
              <h6 className="text-2xl font-bold text-(--primaryColor)">
                Starter
              </h6>
              <p className="text-(--primaryContent)">
                Perfect for getting started
              </p>
            </div>

            <div>
              <h6>
                <span className="text-(--primaryColor) text-[40px] font-bold">
                  $0
                </span>
                <span className="text-(--primaryContent) text-xl">/Month</span>
              </h6>
            </div>

            <ul className="mt-6 flex flex-col gap-2 text-xs font-medium text-(--primaryContent)">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Access to 10 free tools</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Basic templates</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Community support</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>1 project per month</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn w-full font-bold rounded-full bg-linear-(--primaryGradient) text-white">
                Get Started Free
              </button>
            </div>
          </div>
        </div>

        <div className="card rounded-2xl text-white relative  bg-linear-(--primaryGradient) border-2 border-zinc-100">
          <div className="card-body space-y-3 justify-between">
            <div
              className="bg-[#FEF3C6]  w-27.5 h-8 inline-flex justify-center items-center rounded-full absolute -top-4 left-[50%]
-translate-x-[50%]"
            >
              <span className="  text-[#BB4D00] font-medium">Most Popular</span>
            </div>
            {/* <div className="badge badge-warning absolute -top-4 left-[50%]
-translate-x-[50%]">Warning</div> */}

            <div className="space-y-2">
              <h6 className="text-2xl font-bold ">Pro</h6>
              <p className="">Best for professionals</p>
            </div>

            <div>
              <h6>
                <span className=" text-[40px] font-bold">$29</span>
                <span className=" text-xl">/Month</span>
              </h6>
            </div>

            <ul className="mt-6  flex flex-col gap-2 text-xs font-medium ">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Access to all premium tools</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited templates</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Priority support</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited projects</span>
              </li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Cloud sync</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Advanced analytics</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-ghost bg-base-100 w-full rounded-full font-bold ">
                <span className="bg-linear-(--primaryGradient) bg-clip-text text-transparent">
                  Start Pro Trial
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="card rounded-2xl  bg-[#F9FAFC] border-2 border-zinc-100">
          <div className="card-body space-y-3 justify-between">
            <div className="space-y-2">
              <h6 className="text-2xl font-bold text-(--primaryColor)">
                Enterprise
              </h6>
              <p className="text-(--primaryContent)">
                For teams and businesses
              </p>
            </div>

            <div>
              <h6>
                <span className="text-(--primaryColor) text-[40px] font-bold">
                  $99
                </span>
                <span className="text-(--primaryContent) text-xl">/Month</span>
              </h6>
            </div>

            <ul className="mt-6 flex flex-col gap-2 text-xs font-medium text-(--primaryContent)">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Everything in Pro</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Team collaboration</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Custom integrations</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Dedicated support</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>SLA guarantee</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Custom branding</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn w-full font-bold rounded-full bg-linear-(--primaryGradient) text-white">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
