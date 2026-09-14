
CREATE EXTENSION IF NOT EXISTS pgcrypto;


CREATE TABLE IF NOT EXISTS PUBLIC.PROFILES(
    ID UUID PRIMARY KEY references auth.users (id) on delete cascade,
    DISPLAY_NAME TEXT NOT NULL,
    EMAIL TEXT NOT NULL,
    PHOTO_URL TEXT,
    CREATED_AT TIMESTAMPTZ NOT NULL DEFAULT now(),
    LAST_LOGIN_AT TIMESTAMPTZ NOT NULL DEFAULT now()
);


CREATE UNIQUE INDEX if not EXISTS PROFILES_EMAIL_KEY ON PUBLIC.PROFILES (lower(email));


CREATE TABLE IF NOT EXISTS PUBLIC.TRIPS(
    ID UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id uuid not null references auth.users (id) on delete cascade,
    title text not null,
    destination jsonb not null,
    start_date date not null,
    end_date date not null,
    budget numeric not null,
    currency text not null default 'INR',
    pace text not null,
    interests text[] not null default '{}',
    status text not null default 'draft',
    is_public boolean not null default false,
    share_token text unique,
    ai_meta jsonb,
    trip_title text,
    total_estimated_cost numeric,
    travel_tips text[],
    pdf_url text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),

    constraint trips_end_date_after_start check (end_date>= start_date),
    constraint trips_budget_non_negative check(budget>=0),
    constraint trips_pace_valid check (pace in('relaxed','moderate','packed')),
    constraint trips_status_valid check (status in('draft','generated','shared'))
);

create index if not exists trips_owner_updated_idx on public.trips (owner_id,updated_at desc);
create unique index if not exists trips_share_token_key on public.trips (share_token) where share_token is not null;


create table if not exists public.trip_collaborators (
    trip_id uuid not null references public.trips(id) on delete cascade,
    user_id uuid not null references auth.users (id) on delete cascade,
    added_at timestamptz not null default now(),

    primary key (trip_id,user_id)
);

create index if not exists trip_collaborators_user_idx on public.trip_collaborators (user_id);

create table if not exists public.days(
    id uuid primary key default gen_random_uuid(),
    trip_id uuid not null references public.trips (id) on delete cascade,
    day_number int not null,
    date date not null,
    theme text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),


    constraint days_day_number_positive check (day_number>= 1),
    constraint days_trip_day_number_unique unique (trip_id,day_number)
);

create index if not exists days_trip_number_idx on public.days (trip_id,day_number);

create table if not exists public.activities(
    id uuid primary key default gen_random_uuid(),
    day_id uuid not null references public.days (id) on delete cascade,
    trip_id uuid not null references public.trips (id) on delete cascade,
    order_index int not null default 0,
    type text not null,
    start_time time not null,
    end_time time not null,
    description text not null default '',
    estimated_cost numeric not null default 0,
    booking_url text,
    place jsonb,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),

    constraint activities_order_index_non_negative check (order_index>=0),
    constraint activities_type_valid check (type in ('attraction','food','transport'))
);


create index if not exists activities_day_order_idx on public.activities (day_id,order_index);
create index if not exists activities_trip_idx on public.activities(trip_id);


create table if not exists public.suggestions(
    id uuid primary key default gen_random_uuid(),
    trip_id uuid not null references public.trips (id) on delete cascade,
    author_id uuid not null references auth.users (id) on delete cascade,
    day_id uuid not null references public.days( id) on delete cascade,
    activity_id uuid references public.activities (id) on delete cascade,
    payload jsonb not null,
    status text not null default 'pending',
    created_at timestamptz not null default now(),

    constraint suggestions_status_valid check (status in('pending','accepted','rejected'))
);

create index if not exists suggestions_trips_status_idx on public.suggestions (trip_id,status);



