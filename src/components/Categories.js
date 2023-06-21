import { useSelector } from 'react-redux';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <div className="categoriesPageContainer">
      <h1>{categories}</h1>
    </div>
  );
};

export default Categories;
