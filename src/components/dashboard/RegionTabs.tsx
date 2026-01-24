import { motion } from "framer-motion";

interface Region {
  id: string;
  name: string;
}

interface RegionTabsProps {
  regions: Region[];
  activeRegion: string;
  onRegionChange: (regionId: string) => void;
}

const RegionTabs = ({ regions, activeRegion, onRegionChange }: RegionTabsProps) => {
  return (
    <motion.div 
      className="sticky top-[57px] z-40 bg-temple-dark/95 backdrop-blur-md border-b border-white/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-1">
          {regions.map((region, index) => {
            const isActive = activeRegion === region.id;
            
            return (
              <motion.button
                key={region.id}
                onClick={() => onRegionChange(region.id)}
                className={`relative px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                  isActive
                    ? "text-temple-gold font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {region.name}
                </motion.span>
                
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-temple-gold via-temple-saffron to-temple-gold rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-temple-gold/5 rounded-lg opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
};

export default RegionTabs;
