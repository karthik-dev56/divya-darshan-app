import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Trash2, GripVertical, Plus } from "lucide-react";
import { format } from "date-fns";
import { useAuth } from "@/hooks/useAuth";
import { useItinerary } from "@/hooks/useItinerary";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import UserMenu from "@/components/UserMenu";
import { cn } from "@/lib/utils";

const Itinerary = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { itinerary, loading, removeFromItinerary, updateItineraryItem } = useItinerary();
  const [editingNotes, setEditingNotes] = useState<string | null>(null);
  const [notesValue, setNotesValue] = useState("");

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  const handleDateChange = async (siteId: string, date: Date | undefined) => {
    await updateItineraryItem(siteId, {
      visit_date: date ? date.toISOString().split('T')[0] : null,
    });
  };

  const handleSaveNotes = async (siteId: string) => {
    await updateItineraryItem(siteId, { notes: notesValue });
    setEditingNotes(null);
  };

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
              <MapPin className="w-6 h-6 text-temple-gold" />
              <h1 className="font-serif text-xl text-white">My Itinerary</h1>
            </div>
          </div>
          <UserMenu />
        </div>
      </motion.header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {itinerary.length === 0 ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <MapPin className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <h2 className="text-xl text-white/60 mb-2">No itinerary planned yet</h2>
            <p className="text-white/40 mb-6">
              Add sites to your itinerary from the site details page!
            </p>
            <Button
              onClick={() => navigate("/dashboard")}
              className="bg-temple-gold text-temple-dark hover:bg-temple-gold/90"
            >
              Explore Sites
            </Button>
          </motion.div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <p className="text-white/60">
                {itinerary.length} {itinerary.length === 1 ? "site" : "sites"} in your travel plan
              </p>
            </div>

            <AnimatePresence mode="popLayout">
              {itinerary.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden border border-border/50 bg-card">
                    <div className="flex">
                      {/* Order indicator */}
                      <div className="flex flex-col items-center justify-center px-4 bg-temple-gold/10 border-r border-border/50">
                        <GripVertical className="w-4 h-4 text-white/30 mb-1" />
                        <span className="text-2xl font-bold text-temple-gold">{index + 1}</span>
                      </div>

                      {/* Image */}
                      <div className="w-32 h-32 flex-shrink-0">
                        <img
                          src={item.site_image || "/placeholder.svg"}
                          alt={item.site_name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <CardContent className="flex-1 p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <Link
                              to={`/site/${item.site_id}`}
                              className="font-serif text-lg text-foreground hover:text-temple-gold transition-colors"
                            >
                              {item.site_name}
                            </Link>
                            {item.site_location && (
                              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                <MapPin className="w-3 h-3" />
                                {item.site_location}
                              </p>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:bg-destructive/10"
                            onClick={() => removeFromItinerary(item.site_id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Date Picker */}
                        <div className="flex items-center gap-4 mt-3">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className={cn(
                                  "justify-start text-left font-normal",
                                  !item.visit_date && "text-muted-foreground"
                                )}
                              >
                                <Calendar className="w-4 h-4 mr-2" />
                                {item.visit_date
                                  ? format(new Date(item.visit_date), "PPP")
                                  : "Set visit date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <CalendarComponent
                                mode="single"
                                selected={item.visit_date ? new Date(item.visit_date) : undefined}
                                onSelect={(date) => handleDateChange(item.site_id, date)}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        {/* Notes */}
                        <div className="mt-3">
                          {editingNotes === item.site_id ? (
                            <div className="space-y-2">
                              <Textarea
                                value={notesValue}
                                onChange={(e) => setNotesValue(e.target.value)}
                                placeholder="Add notes..."
                                className="min-h-[60px] text-sm"
                              />
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  onClick={() => handleSaveNotes(item.site_id)}
                                  className="bg-temple-gold text-temple-dark hover:bg-temple-gold/90"
                                >
                                  Save
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => setEditingNotes(null)}
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={() => {
                                setEditingNotes(item.site_id);
                                setNotesValue(item.notes || "");
                              }}
                              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {item.notes || "+ Add notes"}
                            </button>
                          )}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>
    </div>
  );
};

export default Itinerary;
