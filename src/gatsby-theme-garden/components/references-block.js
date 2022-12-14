import React from "react";
import Reference from "gatsby-theme-garden/src/components/reference";

import "gatsby-theme-garden/src/components/references-block.css";

const ReferencesBlock = ({ references }) => {
  const footer = (
    <React.Fragment>
      <p>
      If this scribble resonated with you in any way, I would love to hear from you. 
      You can <a href="mailto:iodiqy@gmail.com">email me</a> or 
      browse through <a href="https://vmteam.kz">my blog</a> to 
      find other content.
      </p>
    </React.Fragment>
  );

  if (!references.length) {
    return <div className="references-block">{footer}</div>;
  }

  return (
    <div className="references-block">
      <h3>Links to this note</h3>
      <div>
        {references.map((ref) => (
          <Reference node={ref} key={ref.id} />
        ))}
      </div>
      <hr />
      {footer}
    </div>
  );
};

export default ReferencesBlock;