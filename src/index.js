import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        blogText="Nice"
        image={faker.image.avatar()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:35PM"
        blogText="I like it"
        image={faker.image.avatar()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
        author="Jane"
        timeAgo="Today at 1:49PM"
        blogText="Me too"
        image={faker.image.avatar()}
      />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
