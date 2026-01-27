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
  CheckCircle2,
  Navigation,
  Utensils,
  ShoppingBag,
  Hotel,
  MapPinned,
  Plus,
  Check,
  Users,
  Camera,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getSiteById, isSiteOpen, HeritageSite } from "@/data/heritageSitesData";
import { useSavedSites } from "@/hooks/useSavedSites";
import { useItinerary } from "@/hooks/useItinerary";
import { useToast } from "@/hooks/use-toast";

const SiteDetail = () => {
  const { siteId } = useParams<{ siteId: string }>();
  const navigate = useNavigate();
  const { toggleSaveSite, isSiteSaved } = useSavedSites();
  const { addToItinerary, isInItinerary } = useItinerary();
  const { toast } = useToast();
  const [site, setSite] = useState<HeritageSite | null>(null);

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
    if (site) {
      toggleSaveSite(site.id, site.name, site.image, site.type);
    }
  };

  const handleAddToItinerary = () => {
    if (site) {
      addToItinerary(site.id, site.name, site.image, site.location);
    }
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
      <div className="relative h-[45vh] md:h-[55vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-temple-dark z-10" />
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
            <Heart className={`w-5 h-5 ${site && isSiteSaved(site.id) ? "fill-temple-red text-temple-red" : ""}`} />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToItinerary}
            className={`p-3 backdrop-blur-sm rounded-full text-white transition-colors ${
              site && isInItinerary(site.id) 
                ? "bg-green-500/70 hover:bg-green-500/90" 
                : "bg-black/50 hover:bg-black/70"
            }`}
          >
            {site && isInItinerary(site.id) ? (
              <Check className="w-5 h-5" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
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
              <Badge className={`${
                site.category === 'drone-show' ? 'bg-blue-500' : 
                site.category === 'light-show' ? 'bg-purple-500' : 
                site.type === 'temple' ? 'bg-temple-saffron' : 'bg-amber-600'
              } text-white`}>
                {site.category === 'drone-show' ? <Camera className="w-3 h-3 mr-1" /> :
                 site.category === 'light-show' ? <Sparkles className="w-3 h-3 mr-1" /> :
                 site.type === 'temple' ? <Building2 className="w-3 h-3 mr-1" /> : 
                 <Landmark className="w-3 h-3 mr-1" />}
                {site.category === 'drone-show' ? 'Drone Show' : 
                 site.category === 'light-show' ? 'Light Show' :
                 site.type.charAt(0).toUpperCase() + site.type.slice(1)}
              </Badge>
              <Badge className={`${isOpen ? 'bg-green-500' : 'bg-gray-500'} text-white`}>
                <span className={`w-2 h-2 rounded-full mr-2 ${isOpen ? 'bg-white animate-pulse' : 'bg-white/60'}`} />
                {isOpen ? 'Open Now' : 'Closed'}
              </Badge>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl text-white font-bold mb-2 drop-shadow-lg">
              {site.name}
            </h1>
            <div className="flex items-center gap-4 text-white/90">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {site.location}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-temple-gold text-temple-gold" />
                {site.rating}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 -mt-4 relative z-30">
        {/* Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <Card className="bg-card/80 backdrop-blur border-border/50">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/40">
                  <div className="p-2 rounded-lg bg-temple-saffron/20">
                    <Clock className="w-5 h-5 text-temple-saffron" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Timings</p>
                    <p className="text-sm font-semibold text-foreground">{site.openTime} - {site.closeTime}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/40">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <Ticket className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Entry Fee</p>
                    <p className="text-sm font-semibold text-foreground">
                      {site.entryFee.indian === 0 ? 'Free' : `₹${site.entryFee.indian}`}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/40">
                  <div className="p-2 rounded-lg bg-amber-500/20">
                    <Crown className={`w-5 h-5 ${site.vipPassAvailable ? 'text-amber-500' : 'text-gray-500'}`} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">VIP Pass</p>
                    <p className="text-sm font-semibold text-foreground">
                      {site.vipPassAvailable ? `₹${site.vipPassPrice}` : 'Not Available'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/40">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Users className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Foreign Entry</p>
                    <p className="text-sm font-semibold text-foreground">₹{site.entryFee.foreign}</p>
                  </div>
                </div>

                <div className="col-span-2 md:col-span-1">
                  <Button
                    onClick={() => window.open(site.googleMapsUrl, '_blank')}
                    className="w-full h-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full grid grid-cols-4 bg-card/80 backdrop-blur border border-border/50 rounded-xl p-1 h-auto">
              <TabsTrigger value="overview" className="rounded-lg py-3 data-[state=active]:bg-temple-gold data-[state=active]:text-black">
                <Info className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="visit" className="rounded-lg py-3 data-[state=active]:bg-temple-gold data-[state=active]:text-black">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Visit Info</span>
              </TabsTrigger>
              <TabsTrigger value="explore" className="rounded-lg py-3 data-[state=active]:bg-temple-gold data-[state=active]:text-black">
                <MapPinned className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Explore</span>
              </TabsTrigger>
              <TabsTrigger value="tips" className="rounded-lg py-3 data-[state=active]:bg-temple-gold data-[state=active]:text-black">
                <Lightbulb className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Tips</span>
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* About */}
                <Card className="bg-card/80 backdrop-blur border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-temple-gold/20">
                        <Info className="w-5 h-5 text-temple-gold" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">About & Significance</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{site.importance}</p>
                  </CardContent>
                </Card>

                {/* History */}
                <Card className="bg-card/80 backdrop-blur border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-temple-saffron/20">
                        <Landmark className="w-5 h-5 text-temple-saffron" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">History</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{site.history}</p>
                  </CardContent>
                </Card>

                {/* Architecture (if available) */}
                {site.architecture && (
                  <Card className="bg-card/80 backdrop-blur border-border/50 lg:col-span-2">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <Building2 className="w-5 h-5 text-purple-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">Architecture</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{site.architecture}</p>
                    </CardContent>
                  </Card>
                )}

                {/* Facilities */}
                {site.facilities && site.facilities.length > 0 && (
                  <Card className="bg-card/80 backdrop-blur border-border/50 lg:col-span-2">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-green-500/20">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">Facilities Available</h3>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {site.facilities.map((facility, index) => (
                          <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/40">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-foreground">{facility}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Visit Info Tab */}
            <TabsContent value="visit" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Entry Fees */}
                <Card className="bg-card/80 backdrop-blur border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-green-500/20">
                        <IndianRupee className="w-5 h-5 text-green-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Entry Fees</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/40">
                        <span className="text-muted-foreground">Indian Citizens</span>
                        <span className="font-semibold text-foreground">
                          {site.entryFee.indian === 0 ? 'Free' : `₹${site.entryFee.indian}`}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/40">
                        <span className="text-muted-foreground">Foreign Nationals</span>
                        <span className="font-semibold text-foreground">₹{site.entryFee.foreign}</span>
                      </div>
                      {site.entryFee.children !== undefined && (
                        <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/40">
                          <span className="text-muted-foreground">Children</span>
                          <span className="font-semibold text-foreground">
                            {site.entryFee.children === 0 ? 'Free' : `₹${site.entryFee.children}`}
                          </span>
                        </div>
                      )}
                      {site.vipPassAvailable && (
                        <div className="flex justify-between items-center p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
                          <span className="text-amber-400 flex items-center gap-2">
                            <Crown className="w-4 h-4" />
                            VIP Pass
                          </span>
                          <span className="font-semibold text-amber-400">₹{site.vipPassPrice}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Timings */}
                <Card className="bg-card/80 backdrop-blur border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-temple-saffron/20">
                        <Clock className="w-5 h-5 text-temple-saffron" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Timings</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="p-4 rounded-lg bg-secondary/40">
                        <p className="text-sm text-muted-foreground mb-1">General Hours</p>
                        <p className="text-lg font-semibold text-foreground">{site.openTime} - {site.closeTime}</p>
                      </div>
                      {site.darshanTimings && (
                        <div className="p-4 rounded-lg bg-temple-saffron/10 border border-temple-saffron/30">
                          <p className="text-sm text-temple-saffron mb-1">
                            {site.category === 'drone-show' || site.category === 'light-show' ? 'Show Timings' : 'Darshan Timings'}
                          </p>
                          <p className="text-foreground">{site.darshanTimings}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Best Time & Budget */}
                <Card className="bg-card/80 backdrop-blur border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <Calendar className="w-5 h-5 text-blue-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Planning</h3>
                    </div>
                    <div className="space-y-3">
                      {site.bestTimeToVisit && (
                        <div className="p-3 rounded-lg bg-secondary/40">
                          <p className="text-xs text-muted-foreground mb-1">Best Time to Visit</p>
                          <p className="text-sm font-medium text-foreground">{site.bestTimeToVisit}</p>
                        </div>
                      )}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-3 rounded-lg bg-green-500/10 text-center">
                          <p className="text-xs text-muted-foreground">Budget</p>
                          <p className="text-sm font-semibold text-green-400">{site.averageExpenses.budget}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-amber-500/10 text-center">
                          <p className="text-xs text-muted-foreground">Mid</p>
                          <p className="text-sm font-semibold text-amber-400">{site.averageExpenses.mid}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-purple-500/10 text-center">
                          <p className="text-xs text-muted-foreground">Premium</p>
                          <p className="text-sm font-semibold text-purple-400">{site.averageExpenses.premium}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Explore Tab */}
            <TabsContent value="explore" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Food */}
                {site.food && site.food.length > 0 && (
                  <Card className="bg-card/80 backdrop-blur border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-orange-500/20">
                          <Utensils className="w-5 h-5 text-orange-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">Food & Cuisine</h3>
                      </div>
                      <ul className="space-y-2">
                        {site.food.map((item, index) => (
                          <li key={index} className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30">
                            <span className="w-2 h-2 rounded-full bg-orange-500" />
                            <span className="text-sm text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Shopping */}
                {site.shopping && site.shopping.length > 0 && (
                  <Card className="bg-card/80 backdrop-blur border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-pink-500/20">
                          <ShoppingBag className="w-5 h-5 text-pink-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">Shopping</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {site.shopping.map((item, index) => (
                          <Badge key={index} className="bg-pink-500/10 text-pink-400 hover:bg-pink-500/20">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Accommodation */}
                {site.accommodation && site.accommodation.length > 0 && (
                  <Card className="bg-card/80 backdrop-blur border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-cyan-500/20">
                          <Hotel className="w-5 h-5 text-cyan-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">Stay Options</h3>
                      </div>
                      <ul className="space-y-2">
                        {site.accommodation.map((item, index) => (
                          <li key={index} className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30">
                            <span className="w-2 h-2 rounded-full bg-cyan-500" />
                            <span className="text-sm text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Nearby Attractions */}
                {site.nearbyAttractions && site.nearbyAttractions.length > 0 && (
                  <Card className="bg-card/80 backdrop-blur border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-emerald-500/20">
                          <MapPin className="w-5 h-5 text-emerald-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">Nearby Attractions</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {site.nearbyAttractions.map((attraction, index) => (
                          <Badge key={index} className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20">
                            {attraction}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Places Nearby with Distance */}
                {site.placesNearby && site.placesNearby.length > 0 && (
                  <Card className="bg-card/80 backdrop-blur border-border/50 md:col-span-2">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-violet-500/20">
                          <MapPinned className="w-5 h-5 text-violet-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">Places Nearby</h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {site.placesNearby.map((place, index) => (
                          <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-secondary/40">
                            <div>
                              <p className="font-medium text-foreground">{place.name}</p>
                              <p className="text-xs text-muted-foreground">{place.type}</p>
                            </div>
                            <Badge className="bg-violet-500/20 text-violet-400">
                              {place.distance}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Tips Tab */}
            <TabsContent value="tips" className="mt-6">
              <Card className="bg-card/80 backdrop-blur border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-amber-500/20">
                      <Lightbulb className="w-5 h-5 text-amber-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Visitor Tips & Recommendations</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {site.tips.map((tip, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-secondary/40"
                      >
                        <div className="p-1.5 rounded-full bg-green-500/20 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        </div>
                        <span className="text-foreground">{tip}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default SiteDetail;
