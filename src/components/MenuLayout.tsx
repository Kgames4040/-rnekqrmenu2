import MenuHeader from "./MenuHeader";
import MenuCard from "./MenuCard";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuLayoutProps {
  title: string;
  items: MenuItem[];
}

const MenuLayout = ({ title, items }: MenuLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <MenuHeader title={title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 pb-20">
          {items.map((item, index) => (
            <MenuCard key={item.name} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuLayout;
