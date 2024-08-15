import React, { useState } from 'react';

const AddWidgetModal = ({ category, addWidget, closeModal }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetContent, setWidgetContent] = useState('');

  const handleAddWidget = () => {
    const newWidget = {
      id: Date.now().toString(), // Unique ID
      name: widgetName,
      content: widgetContent
    };
    addWidget(category.id, newWidget);
    closeModal();
  };

  return (
    <div className="modal">
      <h2>Add Widget to {category.name}</h2>
      <input
        type="text"
        placeholder="Widget Name"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
      />
      <textarea
        placeholder="Widget Content"
        value={widgetContent}
        onChange={(e) => setWidgetContent(e.target.value)}
      />
      <div className="button-group">
      <button onClick={handleAddWidget}>Add</button>
      <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default AddWidgetModal;
