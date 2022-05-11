import React from "react";
import ArticleBox from "../components/ArticleBox";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artilces: [
        {
          id: 1,
          title: "The standard Lorem Ipsum passage, used since the 1500s",
          desciption:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          date: "21 July, 2022",
        },
        {
          id: 2,
          title: `Section 1.10.32 ofro in 45 BC`,
          desciption:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          date: "17 August, 2022",
        },
        {
          id: 3,
          title: "1914 translation by H. Rackham",
          desciption:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.",
          date: "13 September, 2022",
        },
        {
          id: 4,
          title: `De Finibus Bonorum et Malorum", written by Cicero in 45 BC`,
          desciption:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
          date: "7 January, 2022",
        },
      ],
    };
  }
  render() {
    return (
      <main>
        <div className="container">
          <div className="w-full md:w-2/3 mx-auto pt-8 md:pt-12 lg:pt-14 pb-14 md:pb-16 lg:pb-20 px-5">
            <div className="flex flex-wrap justify-between gap-y-5 md:gap-y-6 gap-x-6">
              {this.state.artilces.map((article) => (
                <ArticleBox
                  key={article.id}
                  setTitle={article.title}
                  setDescription={article.desciption}
                  setDate={article.date}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Blog;
