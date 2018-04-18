import React from 'react';

export default props => {
  const items = props.items.map(item => <li>{item}</li>);
  return <ul>{items}</ul>;
};
