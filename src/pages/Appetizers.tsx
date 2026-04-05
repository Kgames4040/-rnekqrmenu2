import MenuLayout from "@/components/MenuLayout";
import { appetizers } from "@/data/menuData";

const Appetizers = () => {
  return <MenuLayout title="Başlangıçlar" items={appetizers} />;
};

export default Appetizers;
