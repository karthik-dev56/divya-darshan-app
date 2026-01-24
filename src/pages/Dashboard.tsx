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
    <div className="min-h-screen bg-temple-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-temple-dark/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <svg
              className="w-8 h-8 text-temple-gold"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L8 6H4L3 8V10L2 12V22H22V12L21 10V8L20 6H16L12 2ZM12 4.5L14.5 7H9.5L12 4.5ZM5 9H19V10H5V9ZM4 12H20V20H4V12ZM6 14V18H8V14H6ZM10 14V18H14V14H10ZM16 14V18H18V14H16Z" />
            </svg>
            <span className="font-serif text-xl font-bold text-temple-gold">
              Divya Darshan
            </span>
          </motion.a>

          {/* User Menu */}
          <UserMenu />
        </div>
      </header>

      {/* Region Tabs */}
      <RegionTabs
        regions={regions}
        activeRegion={activeRegion}
        onRegionChange={setActiveRegion}
      />

      {/* Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Region Title */}
        <motion.div
          key={activeRegion}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h1 className="font-serif text-3xl md:text-4xl text-white">
            Temples in{" "}
            <span className="text-temple-saffron">
              {regions.find((r) => r.id === activeRegion)?.name}
            </span>
          </h1>
          <p className="text-white/60 mt-2">
            Discover sacred destinations and plan your spiritual journey
          </p>
        </motion.div>

        {/* Temple Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRegion}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
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
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">
              No temples found for this region
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
