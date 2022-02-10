import React from 'react';

export default function ResultsRectangle(props) {
  const { title, result } = props;

  return (
    <div className="result-container">
      <p id="title-results">{ title }</p>
      <p>{ result }</p>
    </div>
  )
}
