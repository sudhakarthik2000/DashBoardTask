import React from 'react';
import PropTypes from 'prop-types';
import Widget from './Widget';

function Category({ category, addWidget, removeWidget }) {
  const [newWidget, setNewWidget] = React.useState({ name: '', text: '' });

  const handleAddWidget = () => {
    if (newWidget.name.trim() && newWidget.text.trim()) {
      const widget = { 
        id: `${category.id}_${newWidget.name.toLowerCase().replace(/\s+/g, '_')}`, // Backticks added here
        name: newWidget.name,
        text: newWidget.text 
      };
      addWidget(category.id, widget);
      setNewWidget({ name: '', text: '' });
    }
  };

  return (
    <div className="category">
      <h2>{category.name}</h2>
      {category.widgets.map((widget) => (
        <Widget 
          key={widget.id} 
          widget={widget} 
          removeWidget={() => removeWidget(category.id, widget.id)} 
        />
      ))}
      <div className="add-widget">
        <input 
          type="text" 
          placeholder="Widget Name" 
          value={newWidget.name} 
          onChange={(e) => setNewWidget({ ...newWidget, name: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Widget Text" 
          value={newWidget.text} 
          onChange={(e) => setNewWidget({ ...newWidget, text: e.target.value })} 
        />
        <button onClick={handleAddWidget}>Add Widget</button>
      </div>
    </div>
  );
}

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    widgets: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  addWidget: PropTypes.func.isRequired,
  removeWidget: PropTypes.func.isRequired,
};

export default Category;
