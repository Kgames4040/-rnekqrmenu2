import { motion } from "framer-motion";

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  index: number;
}

const MenuCard = ({ name, description, price, image, index }: MenuCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="overflow-hidden rounded-xl">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold font-body text-foreground">{name}</h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
        <span className="price-badge shrink-0">{price}</span>
      </div>
      <div className="mt-5 border-b border-border" />
    </motion.div>
  );
};

export default MenuCard;
