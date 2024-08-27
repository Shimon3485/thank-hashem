// import React from "react";

// const heading = () => {
//   return <h1>אל תקרא מה אלה מאה</h1>;
// };

// export default heading;
import React from "react";

const Heading = () => {
  return (
    <div className="container text-center mt-5">
      {" "}
      {/* Center the content and add some top margin */}
      <h1 className="display-4">אל תקרא מה אלא מאה</h1>{" "}
      <h2 className="display-5">מאה ברכות בכל יום</h2>
      {/* Use Bootstrap display class for larger headings */}
    </div>
  );
};

export default Heading;
