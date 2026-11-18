import './categories.style.scss';

import categories from './categories-array';
import CategoryItem from '../category-item/category-item.component';

const CategoriesMenu = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesMenu;