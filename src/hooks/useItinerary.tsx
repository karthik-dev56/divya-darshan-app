import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

export interface ItineraryItem {
  id: string;
  user_id: string;
  site_id: string;
  site_name: string;
  site_image: string | null;
  site_location: string | null;
  visit_date: string | null;
  visit_order: number;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export const useItinerary = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [itinerary, setItinerary] = useState<ItineraryItem[]>([]);
  const [itinerarySiteIds, setItinerarySiteIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  const fetchItinerary = useCallback(async () => {
    if (!user) {
      setItinerary([]);
      setItinerarySiteIds(new Set());
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('itinerary')
        .select('*')
        .eq('user_id', user.id)
        .order('visit_order', { ascending: true });

      if (error) throw error;

      setItinerary(data || []);
      setItinerarySiteIds(new Set((data || []).map(s => s.site_id)));
    } catch (error) {
      console.error('Error fetching itinerary:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchItinerary();
  }, [fetchItinerary]);

  const addToItinerary = async (
    siteId: string,
    siteName: string,
    siteImage?: string,
    siteLocation?: string,
    visitDate?: Date
  ) => {
    if (!user) {
      toast({
        title: "Please sign in",
        description: "You need to be signed in to add to itinerary",
        variant: "destructive",
      });
      return false;
    }

    if (itinerarySiteIds.has(siteId)) {
      toast({
        title: "Already in itinerary",
        description: "This site is already in your itinerary",
      });
      return false;
    }

    try {
      const { data, error } = await supabase
        .from('itinerary')
        .insert({
          user_id: user.id,
          site_id: siteId,
          site_name: siteName,
          site_image: siteImage || null,
          site_location: siteLocation || null,
          visit_date: visitDate ? visitDate.toISOString().split('T')[0] : null,
          visit_order: itinerary.length,
        })
        .select()
        .single();

      if (error) throw error;

      setItinerarySiteIds(prev => new Set(prev).add(siteId));
      if (data) {
        setItinerary(prev => [...prev, data]);
      }

      toast({
        title: "Added to itinerary!",
        description: "Site added to your travel plan",
      });
      return true;
    } catch (error) {
      console.error('Error adding to itinerary:', error);
      toast({
        title: "Error",
        description: "Failed to add to itinerary",
        variant: "destructive",
      });
      return false;
    }
  };

  const removeFromItinerary = async (siteId: string) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('itinerary')
        .delete()
        .eq('user_id', user.id)
        .eq('site_id', siteId);

      if (error) throw error;

      setItinerarySiteIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(siteId);
        return newSet;
      });
      setItinerary(prev => prev.filter(i => i.site_id !== siteId));

      toast({
        title: "Removed from itinerary",
        description: "Site removed from your travel plan",
      });
      return true;
    } catch (error) {
      console.error('Error removing from itinerary:', error);
      toast({
        title: "Error",
        description: "Failed to remove from itinerary",
        variant: "destructive",
      });
      return false;
    }
  };

  const updateItineraryItem = async (
    siteId: string,
    updates: { visit_date?: string | null; notes?: string | null; visit_order?: number }
  ) => {
    if (!user) return false;

    try {
      const { error } = await supabase
        .from('itinerary')
        .update(updates)
        .eq('user_id', user.id)
        .eq('site_id', siteId);

      if (error) throw error;

      setItinerary(prev =>
        prev.map(item =>
          item.site_id === siteId ? { ...item, ...updates } : item
        )
      );

      toast({
        title: "Updated",
        description: "Itinerary updated successfully",
      });
      return true;
    } catch (error) {
      console.error('Error updating itinerary:', error);
      toast({
        title: "Error",
        description: "Failed to update itinerary",
        variant: "destructive",
      });
      return false;
    }
  };

  const isInItinerary = (siteId: string) => itinerarySiteIds.has(siteId);

  return {
    itinerary,
    itinerarySiteIds,
    loading,
    addToItinerary,
    removeFromItinerary,
    updateItineraryItem,
    isInItinerary,
    refetch: fetchItinerary,
  };
};
