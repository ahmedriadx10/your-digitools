const Workflow = () => {
  return (
    <section className="py-30 bg-linear-(--primaryGradient)">
      <div className="max-w-175 text-center mx-auto w-[90%] space-y-10 text-white">
        <div className="space-y-4">
          <h6 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold">
            Ready to Transform Your Workflow?
          </h6>
          <p className="leading-6 sm:px-5">
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-x-4">
            <button className="btn rounded-full btn-ghost bg-white">
              <span className="bg-linear-(--primaryGradient) bg-clip-text text-transparent">
                Explore Products
              </span>
            </button>
            <button className="btn border-white rounded-full btn-outline ">
              View Pricing
            </button>
          </div>

          <ul className="flex flex-wrap justify-center gap-2">
            <li>14-day free trial</li>
            <li>• Cancel anytime</li>
            <li>• No credit card required </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
