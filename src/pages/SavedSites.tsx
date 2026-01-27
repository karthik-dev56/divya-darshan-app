import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Heart, Trash2, MapPin } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useSavedSites } from "@/hooks/useSavedSites";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import UserMenu from "@/components/UserMenu";

const SavedSites = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { savedSites, loading, toggleSaveSite } = useSavedSites();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  if (authLoading || loading) {
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
      <motion.header
        className="sticky top-0 z-50 bg-temple-dark/95 backdrop-blur-md border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-temple-red fill-temple-red" />
              <h1 className="font-serif text-xl text-white">Saved Temples</h1>
            </div>
          </div>
          <UserMenu />
        </div>
      </motion.header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {savedSites.length === 0 ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Heart className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <h2 className="text-xl text-white/60 mb-2">No saved sites yet</h2>
            <p className="text-white/40 mb-6">
              Start exploring and save your favorite temples and forts!
            </p>
            <Button
              onClick={() => navigate("/dashboard")}
              className="bg-temple-gold text-temple-dark hover:bg-temple-gold/90"
            >
              Explore Sites
            </Button>
          </motion.div>
        ) : (
          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {savedSites.map((site, index) => (
                <motion.div
                  key={site.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="group overflow-hidden border border-border/50 bg-card hover:shadow-xl transition-all duration-300">
                    <div className="relative h-40">
                      <img
                        src={site.site_image || "/placeholder.svg"}
                        alt={site.site_name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-white/90 hover:bg-white text-temple-red"
                        onClick={() => toggleSaveSite(site.site_id, site.site_name, site.site_image || undefined, site.site_type || undefined)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-serif text-lg text-foreground mb-2 line-clamp-1">
                        {site.site_name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground capitalize">
                          {site.site_type || "Heritage Site"}
                        </span>
                        <Link
                          to={`/site/${site.site_id}`}
                          className="text-sm text-temple-gold hover:underline"
                        >
                          View Details →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        )}
      </main>
    </div>
  );
};

export default SavedSites;
