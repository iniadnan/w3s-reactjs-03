import React from "react";

class ArticleBox extends React.Component {
  render() {
    return (
      <article className="relative transform hover:-translate-y-3 transition-all bg-slate-800 py-4 md:py-6 px-6 md:px-8 rounded-md cursor-pointer">
        <h2 className="font-semibold text-lg md:text-xl text-gray-300 mb-2 md:mb-3">
          {this.props.setTitle}
        </h2>
        <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">{this.props.setDescription}</p>
        <div className="flex items-center text-gray-300">
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-sm md:text-base">{this.props.setDate}</p>
        </div>
      </article>
    );
  }
}

export default ArticleBox;