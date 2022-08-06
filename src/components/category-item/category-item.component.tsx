import './category-item.styles.scss';


interface Props {
  category: {title: string, imageUrl: string};
}

const CategoryItem = ({category}: Props) => {
  const {title, imageUrl} = category;
  return (
    <div className="category-container">
      <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>

  );
}

export default CategoryItem;