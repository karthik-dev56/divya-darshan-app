import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TempleCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
  openTime: string;
  closeTime: string;
  tagline: string;
  isOpen: boolean;
  isSaved?: boolean;
  onSave?: (id: string) => void;
  onViewDetails?: (id: string) => void;
  index: number;
}

const TempleCard = ({
  id,
  name,
  location,
  image,
  openTime,
  closeTime,
  tagline,
  isOpen,
  isSaved = false,
  onSave,
  onViewDetails,
  index,
}: TempleCardProps) => {
  const [saved, setSaved] = useState(isSaved);

  const handleSave = () => {
    setSaved(!saved);
    onSave?.(id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.08, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      className="h-full"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="h-full"
      >
        <Card className="group overflow-hidden border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-temple-gold/20 transition-all duration-500 bg-card h-full flex flex-col">
          {/* Image Section */}
          <div className="relative overflow-hidden h-48">
            <motion.img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            
            {/* Gradient Overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Status Badge */}
            <div className="absolute top-3 left-3">
              <motion.span
                initial={{ opacity: 0, scale: 0.5, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: index * 0.08 + 0.3, duration: 0.4, type: "spring", stiffness: 200 }}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm ${
                  isOpen
                    ? "bg-green-500/90 text-white"
                    : "bg-gray-500/90 text-white"
                }`}
              >
                <motion.span 
                  className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-white" : "bg-white/60"}`}
                  animate={isOpen ? { scale: [1, 1.3, 1], opacity: [1, 0.7, 1] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                {isOpen ? "Open Now" : "Closed"}
              </motion.span>
            </div>

            {/* Save Button */}
            <motion.button
              onClick={handleSave}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors backdrop-blur-sm"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.85 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 + 0.4, duration: 0.3 }}
            >
              <motion.div
                animate={saved ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    saved ? "fill-temple-red text-temple-red" : "text-gray-600"
                  }`}
                />
              </motion.div>
            </motion.button>

            {/* Temple Name Overlay */}
            <motion.div 
              className="absolute bottom-3 left-3 right-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 + 0.2, duration: 0.4 }}
            >
              <h3 className="font-serif text-white text-lg font-semibold drop-shadow-lg line-clamp-1">
                {name}
              </h3>
              <div className="flex items-center gap-1 text-white/90 text-sm mt-0.5">
                <MapPin className="w-3 h-3" />
                <span>{location}</span>
              </div>
            </motion.div>
          </div>

          {/* Content Section */}
          <CardContent className="p-4 flex flex-col flex-1 bg-gradient-to-b from-card to-secondary/20">
            {/* Timings */}
            <motion.div 
              className="flex items-center gap-2 text-sm text-muted-foreground mb-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 + 0.35, duration: 0.3 }}
            >
              <Clock className="w-4 h-4" />
              <span>
                <span className="text-foreground font-medium">{openTime}</span>
                <span className="mx-1">–</span>
                <span className="text-foreground font-medium">{closeTime}</span>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p 
              className="text-sm text-muted-foreground line-clamp-2 flex-1 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.08 + 0.4, duration: 0.4 }}
            >
              {tagline}
            </motion.p>

            {/* View Details Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 + 0.45, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                onClick={() => onViewDetails?.(id)}
                className="w-full border-temple-gold text-temple-gold hover:bg-temple-gold hover:text-temple-dark transition-all duration-300 group/btn"
              >
                <span className="relative">
                  View Details
                  <motion.span 
                    className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-temple-gold group-hover/btn:w-full transition-all duration-300"
                  />
                </span>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default TempleCard;
