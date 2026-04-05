import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Eye, Compass, Palette, Database } from "lucide-react";

const features = [
  {
    icon: <Globe className="w-5 h-5" />,
    label: "SEO",
    title: "Restoranınızın Google arama sonuçlarını iyileştirin.",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    label: "DENEYİM",
    title: "Görseller, açıklamalar ve fiyatlar ile unutulmaz bir seçim deneyimi yaşatın.",
  },
  {
    icon: <Compass className="w-5 h-5" />,
    label: "NAVİGASYON",
    title: "Kolay ve sezgisel navigasyon ile müşterileriniz menünüzü keşfetmenin keyfini çıkarsın.",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    label: "TASARIM",
    title: "Modern tasarım, restoran deneyiminizi müşterileriniz için mükemmelleştirir.",
  },
  {
    icon: <Database className="w-5 h-5" />,
    label: "İÇERİK YÖNETİMİ",
    title: "İçerik yönetim sistemi ile menünüzü güncellemek son derece kolay.",
  },
];

const menuCategories = [
  { name: "Başlangıçlar", path: "/menu/appetizers" },
  { name: "Ana Yemekler", path: "/menu/main" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full lg:w-[55%] h-[60vh] lg:h-screen"
        >
          <div className="absolute inset-0 bg-foreground/10" />
          <img
            src="https://framerusercontent.com/images/hCR1cuFXPRHny2mmgNNbRieEzk.jpg?width=2912&height=4368"
            alt="Güzel sunulmuş gurme yemek"
            className="w-full h-full object-cover"
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-3"
          >
            <div className="flex flex-col gap-[3px]">
              <div className="w-5 h-[2px] bg-primary-foreground" />
              <div className="w-5 h-[2px] bg-primary-foreground" />
              <div className="w-4 h-[2px] bg-primary-foreground" />
              <div className="w-3 h-[2px] bg-primary-foreground" />
            </div>
            <span className="text-lg font-body font-medium text-card">Catalog</span>
          </motion.div>
        </motion.div>

        <div className="flex-1 flex flex-col justify-end px-8 md:px-16 py-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight text-foreground">
              PDF Menüye Elveda.
              <br />
              Catalog'a Hoşgeldin.
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/menu/appetizers"
                className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-body text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Menü
              </Link>
              <a
                href="#hakkimizda"
                className="px-8 py-3.5 border border-border text-foreground rounded-full font-body text-sm font-medium hover:bg-secondary transition-colors"
              >
                Hakkımızda
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subtitle */}
      <section className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl font-heading text-foreground text-center"
        >
          Restoranlar İçin En İyi Dijital Menü.
        </motion.h2>
      </section>

      {/* Menu Categories */}
      <section className="pb-20 px-8 md:px-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link
                to={cat.path}
                className="block bg-card rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group"
              >
                <h3 className="text-xl font-heading text-foreground group-hover:translate-x-1 transition-transform">
                  {cat.name} →
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                {feature.icon}
                <span className="text-xs font-body font-semibold tracking-widest uppercase">
                  {feature.label}
                </span>
              </div>
              <p className="text-foreground font-body text-base leading-relaxed">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="hakkimizda" className="py-24 px-8 md:px-16 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading text-foreground leading-snug">
            Catalog'da sadece menüleri yeniden tasarlamıyoruz.
          </h2>
          <p className="mt-8 text-muted-foreground font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Yemek deneyimini geliştiriyoruz. Yolculuğumuz basit bir misyonla başladı: restoranların sunumlarını zarif ve sezgisel bir şekilde sergilemelerini sağlamak. Sadeliğin gücüne inanıyoruz — görsel olarak çarpıcı ve kullanımı kolay.
          </p>
          <p className="mt-6 text-foreground font-body font-medium text-lg">
            İnsanlar İçin Yapıldı. Restoranlar İçin İnşa Edildi.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8 md:px-16 border-t border-border max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-[3px]">
              <div className="w-4 h-[2px] bg-foreground" />
              <div className="w-4 h-[2px] bg-foreground" />
              <div className="w-3 h-[2px] bg-foreground" />
              <div className="w-2 h-[2px] bg-foreground" />
            </div>
            <span className="text-sm font-body font-medium text-foreground">Catalog</span>
          </div>
          <p className="text-xs text-muted-foreground font-body">Dijital Menü Şablonu</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
