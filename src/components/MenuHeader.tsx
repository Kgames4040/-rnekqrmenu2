import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

interface MenuHeaderProps {
  title: string;
}

const MenuHeader = ({ title }: MenuHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between py-10"
    >
      <h1 className="text-4xl md:text-5xl font-heading text-foreground">{title}</h1>
      <Link
        to="/"
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Home size={18} />
        <span className="font-body text-sm">Ana Sayfa</span>
      </Link>
    </motion.div>
  );
};

export default MenuHeader;
