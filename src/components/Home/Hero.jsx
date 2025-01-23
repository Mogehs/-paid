import React from "react";

const Hero = () => {
  return (
    <div className="font-customLight">
      <div className="hero-container text-xl ">
        <div className="flex bg-[#f2f0eb] py-4 max-h-[120vh] rounded-b-[10%] overflow-hidden">
          <div className="side-one flex flex-col space-y-8 p-4">
            <div className="paragraph bg-white text-center px-0 rounded-full py-2 text-[#4e4eff]">
              <div className="px-0">A marketplace for creators and brands</div>
            </div>
            <div className="heading flex flex-wrap">
              <h1 className="hero-heading-home-h1 text-8xl font-bold">
                Creators and brands meet here
              </h1>
            </div>
            <p className="hero-paragraph text-sm">
              Whether you’re a creator looking for your next brand deal, or a
              marketer hiring creators for your next campaign, you'll find them
              on #paid’s creator marketplace.
            </p>

            <div className="btn">
              <div className="button-group text-sm bg-black text-white rounded-full text-center py-4 max-w-[10rem]">
                <a href="/create-account">Get Started</a>
              </div>
            </div>
            <div className="btn-pic">
              <div className="fs-margin-top fs-margin-small">
                <div role="image" className="g2-logo-embed w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    alt="G2 custom support rating logo"
                    width="141"
                    height="32"
                    viewBox="0 0 141 32"
                    fill="none"
                    role="presentation"
                  >
                    <path
                      d="M28.0443 15.7743C28.0443 22.5522 22.5522 28.0443 15.7743 28.0443C8.99642 28.0443 3.50439 22.5522 3.50439 15.7743C3.50439 8.99642 8.99642 3.50439 15.7743 3.50439C22.5522 3.50439 28.0443 9.00133 28.0443 15.7743Z"
                      fill="#FF492C"
                    ></path>
                    <path
                      d="M21.0847 13.7717H17.9142V13.6245C17.9142 13.0846 18.0222 12.638 18.2381 12.2895C18.4541 11.9362 18.8271 11.627 19.367 11.3521L19.6124 11.2294C20.0492 11.0085 20.162 10.8171 20.162 10.5914C20.162 10.3214 19.9265 10.1251 19.5485 10.1251C19.097 10.1251 18.7584 10.3607 18.5228 10.8368L17.9142 10.2282C18.0467 9.94351 18.2627 9.71775 18.5473 9.53615C18.8369 9.35456 19.1559 9.26621 19.5044 9.26621C19.9412 9.26621 20.3191 9.3791 20.6283 9.61468C20.9473 9.85026 21.1044 10.1742 21.1044 10.5816C21.1044 11.2343 20.7363 11.6319 20.0492 11.9852L19.6614 12.1816C19.2492 12.3877 19.0479 12.5742 18.989 12.903H21.0847V13.7717ZM20.805 14.773H17.3351L15.6025 17.7766H19.0725L20.8099 20.7803L22.5424 17.7766L20.805 14.773ZM15.9019 19.784C13.6933 19.784 11.897 17.9877 11.897 15.7791C11.897 13.5705 13.6933 11.7742 15.9019 11.7742L17.2762 8.90302C16.8295 8.81468 16.3731 8.77051 15.9019 8.77051C12.0295 8.77051 8.88843 11.9116 8.88843 15.7791C8.88843 19.6515 12.0246 22.7926 15.9019 22.7926C17.443 22.7926 18.8712 22.292 20.0295 21.4478L18.5081 18.8171C17.8111 19.4159 16.8982 19.784 15.9019 19.784Z"
                      fill="white"
                    ></path>
                    <path
                      d="M46.5 7.11804L48.3819 12.9098L48.4941 13.2553H48.8574H54.9473L50.0205 16.8348L49.7266 17.0484L49.8388 17.3939L51.7207 23.1857L46.7939 19.6061L46.5 19.3926L46.2061 19.6061L41.2793 23.1857L43.1612 17.3939L43.2734 17.0484L42.9795 16.8348L38.0527 13.2553H44.1426H44.5059L44.6181 12.9098L46.5 7.11804Z"
                      fill="#FF492C"
                      stroke="#FF492C"
                    ></path>
                    <path
                      d="M67.5 7.11804L69.3819 12.9098L69.4941 13.2553H69.8574H75.9473L71.0205 16.8348L70.7266 17.0484L70.8388 17.3939L72.7207 23.1857L67.7939 19.6061L67.5 19.3926L67.2061 19.6061L62.2793 23.1857L64.1612 17.3939L64.2734 17.0484L63.9795 16.8348L59.0527 13.2553H65.1426H65.5059L65.6181 12.9098L67.5 7.11804Z"
                      fill="#FF492C"
                      stroke="#FF492C"
                    ></path>
                    <path
                      d="M88.5 7.11804L90.3819 12.9098L90.4941 13.2553H90.8574H96.9473L92.0205 16.8348L91.7266 17.0484L91.8388 17.3939L93.7207 23.1857L88.7939 19.6061L88.5 19.3926L88.2061 19.6061L83.2793 23.1857L85.1612 17.3939L85.2734 17.0484L84.9795 16.8348L80.0527 13.2553H86.1426H86.5059L86.6181 12.9098L88.5 7.11804Z"
                      fill="#FF492C"
                      stroke="#FF492C"
                    ></path>
                    <path
                      d="M109.5 7.11804L111.382 12.9098L111.494 13.2553H111.857H117.947L113.02 16.8348L112.727 17.0484L112.839 17.3939L114.721 23.1857L109.794 19.6061L109.5 19.3926L109.206 19.6061L104.279 23.1857L106.161 17.3939L106.273 17.0484L105.98 16.8348L101.053 13.2553H107.143H107.506L107.618 12.9098L109.5 7.11804Z"
                      fill="#FF492C"
                      stroke="#FF492C"
                    ></path>
                    <path
                      d="M130.5 8.73607L131.906 13.0643L132.131 13.7553H132.857H137.408L133.727 16.4303L133.139 16.8574L133.363 17.5484L134.77 21.8766L131.088 19.2016L130.5 18.7746L129.912 19.2016L126.23 21.8766L127.637 17.5484L127.861 16.8574L127.273 16.4303L123.592 13.7553H128.143H128.869L129.094 13.0643L130.5 8.73607Z"
                      stroke="#FF492C"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M128.144 13.7553H128.87L129.095 13.0643L129.501 11.8138V19.5011L126.232 21.8766L127.638 17.5484L127.862 16.8574L127.275 16.4303L123.593 13.7553H128.144Z"
                      fill="#FF492C"
                      stroke="#FF492C"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div className="fs-g2-rating-text text-sm">
                  “BEST CUSTOMER SUPPORT”
                </div>
              </div>
            </div>
          </div>

          <div className="side-two flex space-x-4 overflow-hidden">
            <div className="img-row-1">
              <div className="img-1">
                <img
                  className="rounded-full"
                  src="/src/assets/home/img-1.webp"
                  alt="not found"
                />
              </div>
              <div className="img-2">
                <img
                  className="rounded-full"
                  src="/src/assets/home/img-2.webp"
                  alt="not found"
                />
              </div>
              <div className="img-3">
                <img
                  className="rounded-full"
                  src="/src/assets/home/img-3.avif"
                  alt="not found"
                />
              </div>
              <div className="img-4">
                <img
                  className="rounded-full"
                  src="/src/assets/home/img-4.webp"
                  alt="not found"
                />
              </div>
              <div className="img-5">
                <img
                  className="rounded-full"
                  src="/src/assets/home/img-5.avif"
                  alt="not found"
                />
              </div>
            </div>

            <div className="img-row-2">
              <div className="img-1">
                <img
                  className="rounded-full"
                  src="/src/assets/home/img-11.avif"
                  alt="not found"
                />
              </div>
              <div className="img-2">
                <img
                  className="rounded-full"
                  src="/src/assets/home/img-12.webp"
                  alt="not found"
                />
              </div>
              <div className="img-3">
                <img
                  className="rounded-full"
                  src="/src/assets/home/img-13.webp"
                  alt="not found"
                />
              </div>
              <div className="img-4">
                <img
                  className="rounded-full"
                  src="/src/assets/home/img-14.avif"
                  alt="not found"
                />
              </div>
              <div className="img-5">
                <img
                  className="rounded-full"
                  src="/src/assets/home/img-15.avif"
                  alt="not found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
