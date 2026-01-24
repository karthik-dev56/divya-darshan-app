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
    <div className="sticky top-0 z-40 bg-temple-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-1">
          {regions.map((region) => {
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
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {region.name}
                
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-temple-gold"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default RegionTabs;
