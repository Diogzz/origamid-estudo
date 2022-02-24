import React from 'react';

function Links({ link, children }) {
  return (
    <>
      <a className='linkButton' style={{marginRight:'10px'}} href={link}>{children}</a>
    </>
  );
}

export default Links;
