import MenuLayout from "@/components/MenuLayout";
import { mainCourses } from "@/data/menuData";

const MainCourses = () => {
  return <MenuLayout title="Ana Yemekler" items={mainCourses} />;
};

export default MainCourses;
