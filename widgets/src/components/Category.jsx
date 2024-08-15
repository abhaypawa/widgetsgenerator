import React from 'react';
import Widget from './Widget';


const Category = ({ category, removeWidget, openAddWidgetModal }) => {
  return (
    <div className="category">
      <h2 className='category-name'>{category.name}</h2>
      <div className="widgets">
        {category.widgets.map(widget => (
          <Widget
            key={widget.id}
            widget={widget}
            categoryId={category.id}
            removeWidget={removeWidget}
          />
        ))}
        <button onClick={() => openAddWidgetModal(category)}><span>+ Add Widget</span></button>
      </div>
    </div>
  );
};

export default Category;
