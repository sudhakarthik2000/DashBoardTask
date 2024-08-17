import React from 'react';
import Category from './Category';

const initialData = {
  categories: [
    {
      id: "cspm_executive_dashboard",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "cloud_accounts",
          name: "Cloud Accounts",
          text: "Connected (X), Not Connected (Y)"
        },
        {
          id: "cloud_risk_assessment",
          name: "Cloud Account Risk Assessment",
          text: "High (Z%), Medium (A%), Low (B%)"
        }
      ]
    },
    {
      id: "registry_scan",
      name: "Registry Scan",
      widgets: [
        {
          id: "image_risk_assessment",
          name: "Image Risk Assessment",
          text: "High (X), Medium (Y), Low (Z)"
        },
        {
          id: "image_security_issues",
          name: "Image Security Issues",
          text: "Issues Found: X"
        }
      ]
    }
  ]
};

function Dashboard() {
  const [categories, setCategories] = React.useState(initialData.categories);

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

  return (
    <div className="dashboard">
      {categories.map(category => (
        <Category 
          key={category.id} 
          category={category} 
          addWidget={addWidget} 
          removeWidget={removeWidget} 
        />
      ))}
    </div>
  );
}

export default Dashboard;