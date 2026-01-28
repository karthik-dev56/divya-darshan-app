import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, IndianRupee, ChevronRight, Utensils, Camera, ShoppingBag, Coffee, X, Check, Backpack, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dayTripsData, DayTrip, DayTripStop } from "@/data/dayTripsData";

const getStopIcon = (type: DayTripStop['type']) => {
  switch (type) {
    case 'site': return Camera;
    case 'food': return Utensils;
    case 'shopping': return ShoppingBag;
    case 'rest': return Coffee;
    default: return MapPin;
  }
};

const getStopColor = (type: DayTripStop['type']) => {
  switch (type) {
    case 'site': return 'bg-temple-gold/20 text-temple-gold border-temple-gold/30';
    case 'food': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    case 'shopping': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    case 'rest': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    default: return 'bg-muted text-muted-foreground';
  }
};

const getDifficultyColor = (difficulty: DayTrip['difficulty']) => {
  switch (difficulty) {
    case 'easy': return 'bg-green-500/20 text-green-400';
    case 'moderate': return 'bg-yellow-500/20 text-yellow-400';
    case 'challenging': return 'bg-red-500/20 text-red-400';
    default: return 'bg-muted text-muted-foreground';
  }
};

interface DayTripCardProps {
  trip: DayTrip;
  onClick: () => void;
}

const DayTripCard = ({ trip, onClick }: DayTripCardProps) => {
  // Import image dynamically
  const getImageSrc = () => {
    try {
      const modules = import.meta.glob('/src/assets/sites/*.jpg', { eager: true, as: 'url' });
      const imagePath = trip.image.replace('/src', '');
      return modules[`/src${imagePath}`] || '/placeholder.svg';
    } catch {
      return '/placeholder.svg';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className="overflow-hidden cursor-pointer border border-border/50 bg-card hover:border-temple-gold/50 transition-all duration-300 group"
        onClick={onClick}
      >
        <div className="relative h-40 overflow-hidden">
          <img
            src={getImageSrc()}
            alt={trip.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <Badge className={`absolute top-3 left-3 ${getDifficultyColor(trip.difficulty)}`}>
            {trip.difficulty}
          </Badge>
          <Badge className="absolute top-3 right-3 bg-temple-gold/90 text-temple-dark">
            {trip.region}
          </Badge>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-temple-gold transition-colors">
            {trip.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{trip.tagline}</p>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{trip.totalDuration}</span>
            </div>
            <div className="flex items-center gap-1 text-temple-gold">
              <IndianRupee className="w-4 h-4" />
              <span>{trip.estimatedCost.budget}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1 mt-3 text-sm text-temple-gold">
            <span>View itinerary</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface DayTripDetailProps {
  trip: DayTrip;
  open: boolean;
  onClose: () => void;
}

const DayTripDetail = ({ trip, open, onClose }: DayTripDetailProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden bg-card">
        <ScrollArea className="max-h-[90vh]">
          <div className="relative h-48">
            <img
              src={trip.image.replace('/src', '')}
              alt={trip.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </Button>
            <div className="absolute bottom-4 left-6 right-6">
              <Badge className={`mb-2 ${getDifficultyColor(trip.difficulty)}`}>{trip.difficulty}</Badge>
              <DialogTitle className="text-2xl font-serif text-white">{trip.name}</DialogTitle>
              <p className="text-white/70">{trip.tagline}</p>
            </div>
          </div>

          <div className="p-6">
            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 rounded-lg bg-muted/50">
                <Clock className="w-5 h-5 mx-auto mb-1 text-temple-gold" />
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium text-foreground">{trip.totalDuration}</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-muted/50">
                <MapPin className="w-5 h-5 mx-auto mb-1 text-temple-gold" />
                <p className="text-sm text-muted-foreground">Best Time</p>
                <p className="font-medium text-foreground">{trip.bestTime}</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-muted/50">
                <IndianRupee className="w-5 h-5 mx-auto mb-1 text-temple-gold" />
                <p className="text-sm text-muted-foreground">Est. Cost</p>
                <p className="font-medium text-foreground">{trip.estimatedCost.comfort}</p>
              </div>
            </div>

            <Tabs defaultValue="itinerary" className="w-full">
              <TabsList className="w-full mb-4">
                <TabsTrigger value="itinerary" className="flex-1">Itinerary</TabsTrigger>
                <TabsTrigger value="costs" className="flex-1">Costs</TabsTrigger>
                <TabsTrigger value="tips" className="flex-1">Tips</TabsTrigger>
              </TabsList>

              <TabsContent value="itinerary" className="space-y-4">
                <div className="space-y-3">
                  {trip.stops.map((stop, index) => {
                    const Icon = getStopIcon(stop.type);
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="relative pl-8"
                      >
                        {/* Timeline line */}
                        {index < trip.stops.length - 1 && (
                          <div className="absolute left-3 top-10 w-0.5 h-[calc(100%-10px)] bg-border" />
                        )}
                        
                        {/* Timeline dot */}
                        <div className={`absolute left-0 top-2 w-6 h-6 rounded-full flex items-center justify-center border ${getStopColor(stop.type)}`}>
                          <Icon className="w-3 h-3" />
                        </div>
                        
                        <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-foreground">{stop.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              {stop.time} • {stop.duration}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{stop.description}</p>
                          {stop.tips && (
                            <p className="text-xs text-temple-gold mt-2 flex items-start gap-1">
                              <Check className="w-3 h-3 mt-0.5 flex-shrink-0" />
                              {stop.tips}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="costs" className="space-y-4">
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-green-400">Budget Friendly</h4>
                      <span className="text-lg font-bold text-green-400">{trip.estimatedCost.budget}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Public transport, street food, basic entry tickets</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-yellow-400">Comfort</h4>
                      <span className="text-lg font-bold text-yellow-400">{trip.estimatedCost.comfort}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Auto/cab, restaurant meals, all attractions</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-purple-400">Premium</h4>
                      <span className="text-lg font-bold text-purple-400">{trip.estimatedCost.premium}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Private car, fine dining, VIP tickets, guide</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <Car className="w-4 h-4 text-temple-gold" />
                    Transport Options
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {trip.transportOptions.map((option, index) => (
                      <Badge key={index} variant="outline">{option}</Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tips" className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <Backpack className="w-4 h-4 text-temple-gold" />
                    What to Pack
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {trip.whatToPack.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-foreground mb-3">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {trip.highlights.map((highlight, index) => (
                      <Badge key={index} className="bg-temple-gold/20 text-temple-gold border-temple-gold/30">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

interface DayTripsSectionProps {
  region?: string;
}

const DayTripsSection = ({ region }: DayTripsSectionProps) => {
  const [selectedTrip, setSelectedTrip] = useState<DayTrip | null>(null);
  
  const filteredTrips = region 
    ? dayTripsData.filter(trip => trip.region.toLowerCase() === region.toLowerCase())
    : dayTripsData;

  if (filteredTrips.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-serif text-foreground flex items-center gap-2">
            <MapPin className="w-5 h-5 text-temple-gold" />
            One Day Trips
          </h2>
          <p className="text-sm text-muted-foreground">Curated full-day heritage experiences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {filteredTrips.map((trip) => (
            <DayTripCard 
              key={trip.id} 
              trip={trip} 
              onClick={() => setSelectedTrip(trip)} 
            />
          ))}
        </AnimatePresence>
      </div>

      {selectedTrip && (
        <DayTripDetail
          trip={selectedTrip}
          open={!!selectedTrip}
          onClose={() => setSelectedTrip(null)}
        />
      )}
    </div>
  );
};

export default DayTripsSection;
