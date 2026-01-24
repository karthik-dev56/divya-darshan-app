import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import UserMenu from "@/components/UserMenu";
import RegionTabs from "@/components/dashboard/RegionTabs";
import TempleCard from "@/components/dashboard/TempleCard";
import { regions, getTemplesByRegion, isTempleOpen } from "@/data/templesData";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeRegion, setActiveRegion] = useState("nagpur");
  const [savedTemples, setSavedTemples] = useState<Set<string>>(new Set());

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  const handleSaveTemple = (templeId: string) => {
    setSavedTemples((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(templeId)) {
        newSet.delete(templeId);
        toast({
          title: "Removed from saved",
          description: "Temple removed from your saved list",
        });
      } else {
        newSet.add(templeId);
        toast({
          title: "Saved!",
          description: "Temple added to your saved list",
        });
      }
      return newSet;
    });
  };

  const handleViewDetails = (templeId: string) => {
    toast({
      title: "Coming Soon",
      description: "Temple details page is under development",
    });
  };

  const temples = getTemplesByRegion(activeRegion);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-temple-dark">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-temple-gold"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-temple-dark overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-temple-gold/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-temple-saffron/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <motion.header 
        className="sticky top-0 z-50 bg-temple-dark/95 backdrop-blur-md border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.svg
              className="w-8 h-8 text-temple-gold"
              viewBox="0 0 24 24"
              fill="currentColor"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M12 2L8 6H4L3 8V10L2 12V22H22V12L21 10V8L20 6H16L12 2ZM12 4.5L14.5 7H9.5L12 4.5ZM5 9H19V10H5V9ZM4 12H20V20H4V12ZM6 14V18H8V14H6ZM10 14V18H14V14H10ZM16 14V18H18V14H16Z" />
            </motion.svg>
            <motion.span 
              className="font-serif text-xl font-bold text-temple-gold"
              whileHover={{ letterSpacing: "0.02em" }}
              transition={{ duration: 0.2 }}
            >
              Divya Darshan
            </motion.span>
          </motion.a>

          {/* User Menu */}
          <UserMenu />
        </div>
      </motion.header>

      {/* Region Tabs */}
      <RegionTabs
        regions={regions}
        activeRegion={activeRegion}
        onRegionChange={setActiveRegion}
      />

      {/* Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-8 relative">
        {/* Region Title */}
        <motion.div
          key={activeRegion}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1 
            className="font-serif text-3xl md:text-4xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Temples in{" "}
            <motion.span 
              className="text-temple-saffron inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              key={activeRegion + "-name"}
            >
              {regions.find((r) => r.id === activeRegion)?.name}
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-white/60 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Discover sacred destinations and plan your spiritual journey
          </motion.p>
          
          {/* Decorative line */}
          <motion.div 
            className="h-0.5 bg-gradient-to-r from-temple-gold via-temple-saffron to-transparent mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>

        {/* Temple Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRegion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {temples.map((temple, index) => (
              <TempleCard
                key={temple.id}
                id={temple.id}
                name={temple.name}
                location={temple.location}
                image={temple.image}
                openTime={temple.openTime}
                closeTime={temple.closeTime}
                tagline={temple.tagline}
                isOpen={isTempleOpen(temple.openTime, temple.closeTime)}
                isSaved={savedTemples.has(temple.id)}
                onSave={handleSaveTemple}
                onViewDetails={handleViewDetails}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {temples.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-white/60 text-lg">
              No temples found for this region
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
