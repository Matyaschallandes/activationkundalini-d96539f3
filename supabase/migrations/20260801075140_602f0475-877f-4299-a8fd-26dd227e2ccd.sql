create table if not exists public.suivi_seance (
  id uuid primary key default gen_random_uuid(),
  prenom text not null,
  nom text not null,
  email text not null,
  telephone text,
  moment text,
  ressenti_physique text,
  ressenti_emotionnel text,
  changements text,
  intensite int,
  message text,
  created_at timestamptz not null default now()
);

grant all on public.suivi_seance to service_role;
alter table public.suivi_seance enable row level security;

alter table public.carnet_submissions add column if not exists followup_sent_at timestamptz;

create extension if not exists pg_cron;
create extension if not exists pg_net;

select cron.unschedule('carnet-followup-daily') where exists (select 1 from cron.job where jobname = 'carnet-followup-daily');

select cron.schedule(
  'carnet-followup-daily',
  '0 8 * * *',
  $$select net.http_post(
      url := 'https://wchaptnajxqvfidwmccl.supabase.co/functions/v1/send-followups',
      headers := '{"Content-Type": "application/json"}'::jsonb,
      body := '{}'::jsonb
  );$$
);