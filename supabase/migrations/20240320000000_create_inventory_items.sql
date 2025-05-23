create table if not exists inventory_items (
  id bigint primary key generated always as identity,
  name text not null,
  description text not null,
  price decimal(10,2) not null,
  stock integer not null default 0,
  unit text not null default 'piece',
  category_id bigint references categories(id),
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add RLS policies
alter table inventory_items enable row level security;

create policy "Enable read access for all users" on inventory_items
  for select using (true);

create policy "Enable insert for authenticated users only" on inventory_items
  for insert with check (auth.role() = 'authenticated');

create policy "Enable update for authenticated users only" on inventory_items
  for update using (auth.role() = 'authenticated');

create policy "Enable delete for authenticated users only" on inventory_items
  for delete using (auth.role() = 'authenticated'); 