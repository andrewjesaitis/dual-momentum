import React from 'react';

function Loading() {
  return (
    <div className="row">
      <div className="col-sm-12 text-center">
        <i
          className="fa fa-refresh fa-spin fa-5x fa-fw"
          style={{ color: '#777' }}
        ></i>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
