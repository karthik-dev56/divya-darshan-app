import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  Star, 
  IndianRupee, 
  Ticket, 
  Crown, 
  Lightbulb, 
  Calendar,
  Building2,
  Landmark,
  Heart,
  Share2,
  Info,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getSiteById, isSiteOpen, HeritageSite } from "@/data/heritageSitesData";
import { useToast } from "@/hooks/use-toast";

const SiteDetail = () => {
  const { siteId } = useParams<{ siteId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [site, setSite] = useState<HeritageSite | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (siteId) {
      const foundSite = getSiteById(siteId);
      if (foundSite) {
        setSite(foundSite);
      } else {
        navigate("/dashboard");
      }
    }
  }, [siteId, navigate]);

  const handleSave = () => {
    setSaved(!saved);
    toast({
      title: saved ? "Removed from saved" : "Saved!",
      description: saved ? "Removed from your saved list" : "Added to your saved list",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: site?.name,
        text: `Check out ${site?.name} - ${site?.tagline}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Share link copied to clipboard",
      });
    }
  };

  if (!site) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-temple-dark">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-temple-gold"></div>
      </div>
    );
  }

  const isOpen = isSiteOpen(site.openTime, site.closeTime);

  return (
    <div className="min-h-screen bg-temple-dark">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-temple-dark z-10" />
        <img
          src={site.image}
          alt={site.name}
          className="w-full h-full object-cover"
        />
        
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 z-20 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </motion.button>

        {/* Actions */}
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSave}
            className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <Heart className={`w-5 h-5 ${saved ? "fill-temple-red text-temple-red" : ""}`} />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleShare}
            className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <Share2 className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Badge className={`${site.type === 'temple' ? 'bg-temple-saffron' : 'bg-amber-600'} text-white`}>
                {site.type === 'temple' ? <Building2 className="w-3 h-3 mr-1" /> : <Landmark className="w-3 h-3 mr-1" />}
                {site.type.charAt(0).toUpperCase() + site.type.slice(1)}
              </Badge>
              <Badge className={`${isOpen ? 'bg-green-500' : 'bg-gray-500'} text-white`}>
                <span className={`w-2 h-2 rounded-full mr-2 ${isOpen ? 'bg-white animate-pulse' : 'bg-white/60'}`} />
                {isOpen ? 'Open Now' : 'Closed'}
              </Badge>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl text-white font-bold mb-2 drop-shadow-lg">
              {site.name}
            </h1>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-4 h-4" />
              <span>{site.location}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 -mt-8 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Rating */}
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <div className="flex items-center justify-center gap-1 text-temple-gold mb-1">
                        <Star className="w-5 h-5 fill-temple-gold" />
                        <span className="text-2xl font-bold">{site.rating}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Rating</p>
                    </div>
                    
                    {/* Timing */}
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Clock className="w-5 h-5 mx-auto text-temple-saffron mb-1" />
                      <p className="text-sm font-medium text-foreground">{site.openTime} - {site.closeTime}</p>
                      <p className="text-xs text-muted-foreground">Timings</p>
                    </div>
                    
                    {/* Entry Fee */}
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Ticket className="w-5 h-5 mx-auto text-green-500 mb-1" />
                      <p className="text-sm font-medium text-foreground">
                        {site.entryFee.indian === 0 ? 'Free' : `₹${site.entryFee.indian}`}
                      </p>
                      <p className="text-xs text-muted-foreground">Entry (Indian)</p>
                    </div>
                    
                    {/* VIP Pass */}
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Crown className={`w-5 h-5 mx-auto mb-1 ${site.vipPassAvailable ? 'text-amber-500' : 'text-gray-500'}`} />
                      <p className="text-sm font-medium text-foreground">
                        {site.vipPassAvailable ? `₹${site.vipPassPrice}` : 'N/A'}
                      </p>
                      <p className="text-xs text-muted-foreground">VIP Pass</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Importance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-temple-gold">
                    <Info className="w-5 h-5" />
                    Importance & Significance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{site.importance}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-temple-saffron">
                    <Landmark className="w-5 h-5" />
                    History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{site.history}</p>
                  {site.architecture && (
                    <>
                      <Separator className="my-4" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Architecture</h4>
                        <p className="text-muted-foreground">{site.architecture}</p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-500">
                    <Lightbulb className="w-5 h-5" />
                    Visitor Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {site.tips.map((tip, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{tip}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Entry Fees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-500">
                    <IndianRupee className="w-5 h-5" />
                    Entry Fees
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                    <span className="text-muted-foreground">Indian Citizens</span>
                    <span className="font-semibold text-foreground">
                      {site.entryFee.indian === 0 ? 'Free' : `₹${site.entryFee.indian}`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                    <span className="text-muted-foreground">Foreign Nationals</span>
                    <span className="font-semibold text-foreground">₹{site.entryFee.foreign}</span>
                  </div>
                  {site.entryFee.children !== undefined && (
                    <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                      <span className="text-muted-foreground">Children</span>
                      <span className="font-semibold text-foreground">
                        {site.entryFee.children === 0 ? 'Free' : `₹${site.entryFee.children}`}
                      </span>
                    </div>
                  )}
                  {site.vipPassAvailable && (
                    <div className="flex justify-between items-center p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                      <span className="text-amber-500 flex items-center gap-2">
                        <Crown className="w-4 h-4" />
                        VIP Pass
                      </span>
                      <span className="font-semibold text-amber-500">₹{site.vipPassPrice}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Average Expenses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-foreground">Average Expenses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Budget</span>
                    <Badge variant="outline" className="text-green-500 border-green-500">
                      {site.averageExpenses.budget}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Mid-range</span>
                    <Badge variant="outline" className="text-amber-500 border-amber-500">
                      {site.averageExpenses.mid}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Premium</span>
                    <Badge variant="outline" className="text-purple-500 border-purple-500">
                      {site.averageExpenses.premium}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Darshan Timings (for temples) */}
            {site.darshanTimings && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <Card className="bg-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-temple-saffron">
                      <Clock className="w-5 h-5" />
                      Darshan Timings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{site.darshanTimings}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Best Time to Visit */}
            {site.bestTimeToVisit && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="bg-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-500">
                      <Calendar className="w-5 h-5" />
                      Best Time to Visit
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{site.bestTimeToVisit}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Nearby Attractions */}
            {site.nearbyAttractions && site.nearbyAttractions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                <Card className="bg-card border-border/50">
                  <CardHeader>
                    <CardTitle className="text-foreground">Nearby Attractions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {site.nearbyAttractions.map((attraction, index) => (
                        <Badge key={index} variant="secondary" className="bg-secondary/50">
                          {attraction}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Facilities */}
            {site.facilities && site.facilities.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="bg-card border-border/50">
                  <CardHeader>
                    <CardTitle className="text-foreground">Facilities Available</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {site.facilities.map((facility, index) => (
                        <Badge key={index} variant="outline" className="text-green-500 border-green-500/50">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteDetail;
