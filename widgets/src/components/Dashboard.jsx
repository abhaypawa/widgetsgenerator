import React, { useState } from 'react';
import Category from './Category';
import AddWidgetModal from './AddWidgetModal';
import data from '../widgets.json';
import Navbar from './Navbar';

const Dashboard = () => {
  const [categories, setCategories] = useState(data.categories);
  const [searchQuery, setSearchQuery] = useState(''); 
  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const addWidget = (categoryId, widget) => {
    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: [...category.widgets, widget]
        };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const removeWidget = (categoryId, widgetId) => {
    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter(widget => widget.id !== widgetId)
        };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const openAddWidgetModal = (category) => {
    setCurrentCategory(category);
    setShowModal(true);
  };

  const closeAddWidgetModal = () => {
    setShowModal(false);
    setCurrentCategory(null);
  };

  
  const filteredCategories = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> {/* Pass search state */}
      <div className="dashboard">
        {filteredCategories.map(category => (
          <Category
            key={category.id}
            category={category}
            removeWidget={removeWidget}
            openAddWidgetModal={openAddWidgetModal}
          />
        ))}

        {showModal && (
          <AddWidgetModal
            category={currentCategory}
            addWidget={addWidget}
            closeModal={closeAddWidgetModal}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
