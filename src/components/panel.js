import React from 'react';

const Panel = (props) => {
  return (
    <div className="col-xs-12 col-md-6">
      <div className="panel panel-default">
          <div className="panel-body">
              <h1>{props.data.title}</h1>
              <p>{props.data.body}</p>
          </div>
      </div>
    </div>
  )
}

export default Panel;
