import React from 'react';

function getHighlight(props) {
  const highlights = {
    Healthy: 'card-highlight-yellow',
    Trending: 'card-highlight-red',
    Supreme: 'card-highlight-green',
  };

  const getHighlight = (e) => {
    const className = highlights[e];
    return <span className={className}>{e}</span>;
  };
  return getHighlight(props);
}

export default getHighlight;
