import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

export interface SavedSite {
  id: string;
  user_id: string;
  site_id: string;
  site_name: string;
  site_image: string | null;
  site_type: string | null;
  created_at: string;
}

export const useSavedSites = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [savedSites, setSavedSites] = useState<SavedSite[]>([]);
  const [savedSiteIds, setSavedSiteIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  const fetchSavedSites = useCallback(async () => {
    if (!user) {
      setSavedSites([]);
      setSavedSiteIds(new Set());
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('saved_sites')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setSavedSites(data || []);
      setSavedSiteIds(new Set((data || []).map(s => s.site_id)));
    } catch (error) {
      console.error('Error fetching saved sites:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchSavedSites();
  }, [fetchSavedSites]);

  const toggleSaveSite = async (siteId: string, siteName: string, siteImage?: string, siteType?: string) => {
    if (!user) {
      toast({
        title: "Please sign in",
        description: "You need to be signed in to save sites",
        variant: "destructive",
      });
      return false;
    }

    const isSaved = savedSiteIds.has(siteId);

    try {
      if (isSaved) {
        // Remove from saved
        const { error } = await supabase
          .from('saved_sites')
          .delete()
          .eq('user_id', user.id)
          .eq('site_id', siteId);

        if (error) throw error;

        setSavedSiteIds(prev => {
          const newSet = new Set(prev);
          newSet.delete(siteId);
          return newSet;
        });
        setSavedSites(prev => prev.filter(s => s.site_id !== siteId));

        toast({
          title: "Removed from saved",
          description: "Site removed from your saved list",
        });
      } else {
        // Add to saved
        const { data, error } = await supabase
          .from('saved_sites')
          .insert({
            user_id: user.id,
            site_id: siteId,
            site_name: siteName,
            site_image: siteImage || null,
            site_type: siteType || null,
          })
          .select()
          .single();

        if (error) throw error;

        setSavedSiteIds(prev => new Set(prev).add(siteId));
        if (data) {
          setSavedSites(prev => [data, ...prev]);
        }

        toast({
          title: "Saved!",
          description: "Site added to your saved list",
        });
      }
      return true;
    } catch (error) {
      console.error('Error toggling save:', error);
      toast({
        title: "Error",
        description: "Failed to update saved sites",
        variant: "destructive",
      });
      return false;
    }
  };

  const isSiteSaved = (siteId: string) => savedSiteIds.has(siteId);

  return {
    savedSites,
    savedSiteIds,
    loading,
    toggleSaveSite,
    isSiteSaved,
    refetch: fetchSavedSites,
  };
};
