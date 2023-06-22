import { FcSettings } from 'react-icons/fc';
import { useSelector } from 'react-redux';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <div className="categoriesPageContainer">
      <FcSettings />
      <h1>{categories}</h1>
    </div>
  );
};

export default Categories;
