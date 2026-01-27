-- Create saved_sites table for saving temples/heritage sites
CREATE TABLE public.saved_sites (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  site_id TEXT NOT NULL,
  site_name TEXT NOT NULL,
  site_image TEXT,
  site_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, site_id)
);

-- Enable Row Level Security
ALTER TABLE public.saved_sites ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view their own saved sites"
ON public.saved_sites FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own saved sites"
ON public.saved_sites FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own saved sites"
ON public.saved_sites FOR DELETE
USING (auth.uid() = user_id);

-- Create itinerary table
CREATE TABLE public.itinerary (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  site_id TEXT NOT NULL,
  site_name TEXT NOT NULL,
  site_image TEXT,
  site_location TEXT,
  visit_date DATE,
  visit_order INTEGER DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, site_id)
);

-- Enable Row Level Security
ALTER TABLE public.itinerary ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view their own itinerary"
ON public.itinerary FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert into their own itinerary"
ON public.itinerary FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own itinerary"
ON public.itinerary FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete from their own itinerary"
ON public.itinerary FOR DELETE
USING (auth.uid() = user_id);

-- Create trigger for updating updated_at
CREATE TRIGGER update_itinerary_updated_at
BEFORE UPDATE ON public.itinerary
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();