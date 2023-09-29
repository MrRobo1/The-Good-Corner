export type CategoryProps = {
    name: string;
    id?: number;
};

const Category = ({ name }: CategoryProps) => {
    return (
        <>
          <a href="" className="category-navigation-link">{name}</a> •
        </>
    );
};

export default Category;