import React from "react";
import { Link } from "react-router-dom";

function NavMobile() {
  return (
    <aside className="h-full w-full fixed top-0 left-0 z-10 bg-sky-900">
      <div className="font-medium text-base text-gray-200 pt-24 px-5">
        <Link to="/about" className="block hover:text-gray-100 mb-4">
          ABOUT
        </Link>
        <Link to="/code" className="block hover:text-gray-100 mb-4">
          CODE
        </Link>
        <Link to="/blog" className="block hover:text-gray-100 mb-4">
          BLOG
        </Link>
        <Link to="/portfolio" className="block hover:text-gray-100">
          PORTFOLIO
        </Link>
      </div>
    </aside>
  );
}

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      navOpen: false,
    };
  }
  navToggle = () => {
    this.setState({ navOpen: !this.state.navOpen });
  };
  render() {
    const isNavOpen = this.state.navOpen;
    let NavOpenDOM;
    if (isNavOpen) {
      NavOpenDOM = <NavMobile />;
    }
    return (
      <>
        <nav className="relative z-20 bg-sky-900 md:bg-transparent">
          <div className="container">
            <div className="w-full md:w-3/4 mx-auto flex items-center justify-between font-medium py-6 md:py-9 lg:py-10 px-5">
              <div className="text-md md:text-lg text-gray-200">
                <Link
                  to="/"
                  className="hover:text-gray-100"
                >
                  INIADNAN
                </Link>
              </div>
              <div className="hidden md:flex text-md md:text-lg text-gray-300 gap-x-5">
                <Link to="/about" className="hover:text-gray-100">
                  ABOUT
                </Link>
                <Link to="/code" className="hover:text-gray-100">
                  CODE
                </Link>
                <Link to="/blog" className="hover:text-gray-100">
                  BLOG
                </Link>
                <Link to="/portfolio" className="hover:text-gray-100">
                  PORTFOLIO
                </Link>
              </div>
              <button
                type="button"
                className="block md:hidden text-gray-200 hover:text-gray-100"
                onClick={this.navToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        {NavOpenDOM}
      </>
    );
  }
}

export default Nav;
