// FilterComponent.js

// ... (other imports)

const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ];
  
  const FilterComponent = ({ handleCategoryFilter }) => {
    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      handleCategoryFilter(name, checked);
    };
  
    return (
      <div>
        {categories.map((category, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                name={category}
                onChange={handleCheckboxChange}
              />
              {category}
            </label>
          </div>
        ))}
      </div>
    );
  };
  
  export default FilterComponent;
  