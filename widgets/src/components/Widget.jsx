import React from 'react';

const Widget = ({ widget, categoryId, removeWidget }) => {
  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.content}</p>
      <div className='widgetXicon' onClick={() => removeWidget(categoryId, widget.id)}>X</div>
    </div>
  );
};

export default Widget;
