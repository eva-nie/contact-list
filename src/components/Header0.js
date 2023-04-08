import React from 'react';
//pass props w/props parameter:

const Header0 = (props) => {
    console.log();

  return (
      <div>
        <h1>{props.contactListName}</h1>
          <p>Hello, {props.userName}</p>
      </div>
  );
};

export default Header0;
