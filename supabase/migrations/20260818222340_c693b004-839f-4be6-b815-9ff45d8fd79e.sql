ALTER TABLE public.carnet_submissions
  ADD COLUMN IF NOT EXISTS ai_analysis jsonb,
  ADD COLUMN IF NOT EXISTS intensity_level text,
  ADD COLUMN IF NOT EXISTS analysed_at timestamptz,
  ADD COLUMN IF NOT EXISTS client_resonance text,
  ADD COLUMN IF NOT EXISTS client_intention text;