import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { useSavedSites } from "@/hooks/useSavedSites";
import UserMenu from "@/components/UserMenu";
import RegionTabs from "@/components/dashboard/RegionTabs";
import HeritageSiteCard from "@/components/dashboard/HeritageSiteCard";
import DayTripsSection from "@/components/dashboard/DayTripsSection";
import { regions, getSitesByRegion, isSiteOpen } from "@/data/heritageSitesData";
import { Building2, Landmark, Filter, Sparkles, Eye, Zap, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

type FilterType = "all" | "temple" | "fort" | "must-visit" | "hidden-gem" | "drone-show" | "light-show";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toggleSaveSite, isSiteSaved } = useSavedSites();
  const [activeRegion, setActiveRegion] = useState("nagpur");
  const [filter, setFilter] = useState<FilterType>("all");

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  const handleSaveSite = (siteId: string, siteName: string, siteImage?: string, siteType?: string) => {
    toggleSaveSite(siteId, siteName, siteImage, siteType);
  };

  const allSites = getSitesByRegion(activeRegion);
  const sites = filter === "all" 
    ? allSites 
    : filter === "must-visit" || filter === "hidden-gem" || filter === "drone-show" || filter === "light-show"
    ? allSites.filter(site => site.category === filter)
    : allSites.filter(site => site.type === filter);

  const templeCount = allSites.filter(s => s.type === "temple").length;
  const fortCount = allSites.filter(s => s.type === "fort").length;
  const mustVisitCount = allSites.filter(s => s.category === "must-visit").length;
  const hiddenGemCount = allSites.filter(s => s.category === "hidden-gem").length;
  const droneShowCount = allSites.filter(s => s.category === "drone-show").length;
  const lightShowCount = allSites.filter(s => s.category === "light-show").length;

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
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/3 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
            <div className="flex flex-col">
              <motion.span 
                className="font-serif text-xl font-bold text-temple-gold"
                whileHover={{ letterSpacing: "0.02em" }}
                transition={{ duration: 0.2 }}
              >
                Heritage India
              </motion.span>
              <span className="text-[10px] text-white/50 -mt-1">Discover • Explore • Preserve</span>
            </div>
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
        {/* Region Title & Description */}
        <motion.div
          key={activeRegion}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-6"
        >
          <motion.h1 
            className="font-serif text-3xl md:text-4xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Heritage Sites in{" "}
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
            className="text-white/60 mt-2 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {regions.find((r) => r.id === activeRegion)?.description}
          </motion.p>
          
          {/* Decorative line */}
          <motion.div 
            className="h-0.5 bg-gradient-to-r from-temple-gold via-temple-saffron to-transparent mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>

        {/* Day Trips Section */}
        <DayTripsSection region={regions.find((r) => r.id === activeRegion)?.name} />

        {/* Filter Tabs */}
        <motion.div 
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <Filter className="w-4 h-4 text-white/60" />
          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-temple-gold text-temple-dark hover:bg-temple-gold/90" : "border-white/20 text-white/70 hover:bg-white/10"}
            >
              All ({allSites.length})
            </Button>
            <Button
              variant={filter === "temple" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("temple")}
              className={filter === "temple" ? "bg-temple-saffron text-white hover:bg-temple-saffron/90" : "border-white/20 text-white/70 hover:bg-white/10"}
            >
              <Building2 className="w-4 h-4 mr-1" />
              Temples ({templeCount})
            </Button>
            <Button
              variant={filter === "fort" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("fort")}
              className={filter === "fort" ? "bg-amber-600 text-white hover:bg-amber-600/90" : "border-white/20 text-white/70 hover:bg-white/10"}
            >
              <Landmark className="w-4 h-4 mr-1" />
              Forts ({fortCount})
            </Button>
            <Button
              variant={filter === "must-visit" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("must-visit")}
              className={filter === "must-visit" ? "bg-green-600 text-white hover:bg-green-600/90" : "border-white/20 text-white/70 hover:bg-white/10"}
            >
              <Sparkles className="w-4 h-4 mr-1" />
              Must Visit ({mustVisitCount})
            </Button>
            <Button
              variant={filter === "hidden-gem" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("hidden-gem")}
              className={filter === "hidden-gem" ? "bg-purple-600 text-white hover:bg-purple-600/90" : "border-white/20 text-white/70 hover:bg-white/10"}
            >
              <Eye className="w-4 h-4 mr-1" />
              Hidden Gems ({hiddenGemCount})
            </Button>
            <Button
              variant={filter === "drone-show" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("drone-show")}
              className={filter === "drone-show" ? "bg-cyan-600 text-white hover:bg-cyan-600/90" : "border-white/20 text-white/70 hover:bg-white/10"}
            >
              <Plane className="w-4 h-4 mr-1" />
              Drone Shows ({droneShowCount})
            </Button>
            <Button
              variant={filter === "light-show" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("light-show")}
              className={filter === "light-show" ? "bg-yellow-600 text-white hover:bg-yellow-600/90" : "border-white/20 text-white/70 hover:bg-white/10"}
            >
              <Zap className="w-4 h-4 mr-1" />
              Light Shows ({lightShowCount})
            </Button>
          </div>
        </motion.div>

        {/* Sites Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeRegion}-${filter}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {sites.map((site, index) => (
              <HeritageSiteCard
                key={site.id}
                site={site}
                isOpen={isSiteOpen(site.openTime, site.closeTime)}
                isSaved={isSiteSaved(site.id)}
                onSave={(id) => handleSaveSite(id, site.name, site.image, site.type)}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {sites.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-white/60 text-lg">
              No {filter === "all" ? "heritage sites" : filter + "s"} found for this region
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
