import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, IndianRupee, ChevronLeft, ChevronRight, Utensils, Camera, ShoppingBag, Coffee, X, Check, Backpack, Car, Sparkles } from "lucide-react";
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
    case 'easy': return 'bg-green-500/30 text-green-300 border-green-500/40';
    case 'moderate': return 'bg-yellow-500/30 text-yellow-300 border-yellow-500/40';
    case 'challenging': return 'bg-red-500/30 text-red-300 border-red-500/40';
    default: return 'bg-muted text-muted-foreground';
  }
};

interface DayTripDetailProps {
  trip: DayTrip;
  open: boolean;
  onClose: () => void;
}

const DayTripDetail = ({ trip, open, onClose }: DayTripDetailProps) => {
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
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden bg-temple-dark border-white/10">
        <ScrollArea className="max-h-[90vh]">
          <div className="relative h-48">
            <img
              src={getImageSrc()}
              alt={trip.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-temple-dark via-temple-dark/40 to-transparent" />
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
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <Clock className="w-5 h-5 mx-auto mb-1 text-temple-gold" />
                <p className="text-sm text-white/60">Duration</p>
                <p className="font-medium text-white">{trip.totalDuration}</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 mx-auto mb-1 text-temple-gold" />
                <p className="text-sm text-white/60">Best Time</p>
                <p className="font-medium text-white">{trip.bestTime}</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                <IndianRupee className="w-5 h-5 mx-auto mb-1 text-temple-gold" />
                <p className="text-sm text-white/60">Est. Cost</p>
                <p className="font-medium text-white">{trip.estimatedCost.comfort}</p>
              </div>
            </div>

            <Tabs defaultValue="itinerary" className="w-full">
              <TabsList className="w-full mb-4 bg-white/5">
                <TabsTrigger value="itinerary" className="flex-1 data-[state=active]:bg-temple-gold data-[state=active]:text-temple-dark">Itinerary</TabsTrigger>
                <TabsTrigger value="costs" className="flex-1 data-[state=active]:bg-temple-gold data-[state=active]:text-temple-dark">Costs</TabsTrigger>
                <TabsTrigger value="tips" className="flex-1 data-[state=active]:bg-temple-gold data-[state=active]:text-temple-dark">Tips</TabsTrigger>
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
                        {index < trip.stops.length - 1 && (
                          <div className="absolute left-3 top-10 w-0.5 h-[calc(100%-10px)] bg-white/10" />
                        )}
                        
                        <div className={`absolute left-0 top-2 w-6 h-6 rounded-full flex items-center justify-center border ${getStopColor(stop.type)}`}>
                          <Icon className="w-3 h-3" />
                        </div>
                        
                        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-white">{stop.name}</h4>
                            <Badge variant="outline" className="text-xs border-white/20 text-white/70">
                              {stop.time} • {stop.duration}
                            </Badge>
                          </div>
                          <p className="text-sm text-white/60">{stop.description}</p>
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
                    <p className="text-sm text-white/60">Public transport, street food, basic entry tickets</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-yellow-400">Comfort</h4>
                      <span className="text-lg font-bold text-yellow-400">{trip.estimatedCost.comfort}</span>
                    </div>
                    <p className="text-sm text-white/60">Auto/cab, restaurant meals, all attractions</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-purple-400">Premium</h4>
                      <span className="text-lg font-bold text-purple-400">{trip.estimatedCost.premium}</span>
                    </div>
                    <p className="text-sm text-white/60">Private car, fine dining, VIP tickets, guide</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                    <Car className="w-4 h-4 text-temple-gold" />
                    Transport Options
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {trip.transportOptions.map((option, index) => (
                      <Badge key={index} variant="outline" className="border-white/20 text-white/70">{option}</Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tips" className="space-y-4">
                <div>
                  <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                    <Backpack className="w-4 h-4 text-temple-gold" />
                    What to Pack
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {trip.whatToPack.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-white/60">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-white mb-3">Highlights</h4>
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

const DayTripsCarousel = () => {
  const [selectedTrip, setSelectedTrip] = useState<DayTrip | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollButtons);
      return () => carousel.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 340;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getImageSrc = (trip: DayTrip) => {
    try {
      const modules = import.meta.glob('/src/assets/sites/*.jpg', { eager: true, as: 'url' });
      const imagePath = trip.image.replace('/src', '');
      return modules[`/src${imagePath}`] || '/placeholder.svg';
    } catch {
      return '/placeholder.svg';
    }
  };

  return (
    <div className="mb-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-temple-gold to-temple-saffron flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-temple-dark" />
          </div>
          <div>
            <h2 className="font-serif text-xl text-white flex items-center gap-2">
              Curated Day Trips
            </h2>
            <p className="text-sm text-white/50">{dayTripsData.length} handpicked heritage experiences</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="border-white/20 text-white/70 hover:bg-white/10 disabled:opacity-30"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="border-white/20 text-white/70 hover:bg-white/10 disabled:opacity-30"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div 
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {dayTripsData.map((trip, index) => (
          <motion.div
            key={trip.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex-shrink-0 w-[320px] cursor-pointer"
            style={{ scrollSnapAlign: 'start' }}
            onClick={() => setSelectedTrip(trip)}
          >
            <div className="relative h-[200px] rounded-xl overflow-hidden group">
              <img
                src={getImageSrc(trip)}
                alt={trip.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-temple-dark via-temple-dark/30 to-transparent" />
              
              {/* Region Badge */}
              <Badge className="absolute top-3 left-3 bg-temple-gold text-temple-dark font-medium">
                {trip.region}
              </Badge>
              
              {/* Difficulty Badge */}
              <Badge className={`absolute top-3 right-3 ${getDifficultyColor(trip.difficulty)}`}>
                {trip.difficulty}
              </Badge>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-serif text-lg text-white mb-1 group-hover:text-temple-gold transition-colors">
                  {trip.name}
                </h3>
                <p className="text-sm text-white/60 line-clamp-1 mb-3">{trip.tagline}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-1 text-white/70">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{trip.totalDuration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-temple-gold font-medium">
                      <IndianRupee className="w-3.5 h-3.5" />
                      <span>{trip.estimatedCost.budget}</span>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full bg-temple-gold/20 flex items-center justify-center group-hover:bg-temple-gold transition-colors">
                    <ChevronRight className="w-4 h-4 text-temple-gold group-hover:text-temple-dark transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
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

export default DayTripsCarousel;
