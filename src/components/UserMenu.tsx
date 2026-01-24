import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { User, Heart, MapPin, LogOut, ChevronDown } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserMenu = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const menuItems = [
    { icon: User, label: "Profile", action: () => navigate("/profile") },
    { icon: Heart, label: "Saved Temples", action: () => navigate("/saved") },
    { icon: MapPin, label: "My Itinerary", action: () => navigate("/itinerary") },
  ];

  // Get initials for avatar
  const getInitials = () => {
    if (!user?.email) return "U";
    return user.email.charAt(0).toUpperCase();
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <motion.button
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 transition-colors duration-300 border border-white/20"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-temple-gold flex items-center justify-center text-temple-dark font-semibold text-sm">
            {getInitials()}
          </div>
          <span className="text-white/90 text-sm hidden sm:block max-w-[120px] truncate">
            {user?.email?.split("@")[0]}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4 text-white/70" />
          </motion.div>
        </motion.button>
      </DropdownMenuTrigger>

      <AnimatePresence>
        {isOpen && (
          <DropdownMenuContent
            align="end"
            className="w-56 bg-card border border-border shadow-xl z-50"
            sideOffset={8}
            asChild
            forceMount
          >
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {/* User Info Header */}
              <div className="px-3 py-3 border-b border-border">
                <p className="text-sm font-medium text-foreground truncate">
                  {user?.email}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Devotee Account
                </p>
              </div>

              {/* Menu Items */}
              {menuItems.map((item) => (
                <DropdownMenuItem
                  key={item.label}
                  onClick={item.action}
                  className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-accent focus:bg-accent"
                >
                  <item.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{item.label}</span>
                </DropdownMenuItem>
              ))}

              <DropdownMenuSeparator className="bg-border" />

              {/* Logout */}
              <DropdownMenuItem
                onClick={handleSignOut}
                className="flex items-center gap-3 px-3 py-2.5 cursor-pointer text-destructive hover:bg-destructive/10 focus:bg-destructive/10"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Logout</span>
              </DropdownMenuItem>
            </motion.div>
          </DropdownMenuContent>
        )}
      </AnimatePresence>
    </DropdownMenu>
  );
};

export default UserMenu;
