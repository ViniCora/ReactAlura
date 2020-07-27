import React from 'react';

function buttonLink(props) {
  return (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  );
}

export default buttonLink;
