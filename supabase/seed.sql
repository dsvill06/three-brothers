-- Insert sample categories
insert into categories (name, description) values
  ('Produce', 'Fresh fruits and vegetables'),
  ('Dairy', 'Milk, cheese, and other dairy products'),
  ('Meat', 'Fresh meat and poultry'),
  ('Bakery', 'Bread, pastries, and baked goods'),
  ('Pantry', 'Dry goods and canned items'),
  ('Beverages', 'Drinks and refreshments'),
  ('Frozen', 'Frozen foods and ice cream'),
  ('Snacks', 'Chips, cookies, and other snacks');

-- Insert sample inventory items
insert into inventory_items (name, description, price, stock, unit, category_id, image_url) values
  ('Organic Bananas', 'Fresh organic bananas from local farms', '1.99', 50, 'kg', 1, 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e'),
  ('Whole Milk', 'Fresh whole milk from local dairy', '3.49', 30, 'gallon', 2, 'https://images.unsplash.com/photo-1563636619-e9143da7973b'),
  ('Chicken Breast', 'Boneless skinless chicken breast', '5.99', 25, 'kg', 3, 'https://images.unsplash.com/photo-1604503468506-a8da13d82791'),
  ('Sourdough Bread', 'Artisan sourdough bread', '4.99', 15, 'loaf', 4, 'https://images.unsplash.com/photo-1585478259715-19c2b9f0f3c9'),
  ('Pasta', 'Italian style pasta', '2.49', 40, 'kg', 5, 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8'),
  ('Orange Juice', 'Fresh squeezed orange juice', '3.99', 20, 'liter', 6, 'https://images.unsplash.com/photo-16134782237192-2b1a0a1b5c1a'),
  ('Ice Cream', 'Vanilla ice cream', '4.99', 15, 'pint', 7, 'https://images.unsplash.com/photo-1563805042-7684c019e1cb'),
  ('Potato Chips', 'Classic salted potato chips', '2.99', 35, 'bag', 8, 'https://images.unsplash.com/photo-1566478989037-eec170784d0b'),
  ('Apples', 'Fresh red delicious apples', '2.99', 45, 'kg', 1, 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6'),
  ('Cheddar Cheese', 'Aged cheddar cheese', '6.99', 20, 'kg', 2, 'https://images.unsplash.com/photo-1452195100486-9cc805987862'),
  ('Ground Beef', 'Lean ground beef', '7.99', 30, 'kg', 3, 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f'),
  ('Croissants', 'Buttery French croissants', '3.99', 25, 'piece', 4, 'https://images.unsplash.com/photo-1555507036-ab1f4038808a'),
  ('Rice', 'Long grain white rice', '3.49', 50, 'kg', 5, 'https://images.unsplash.com/photo-1586201375761-83865001e31c'),
  ('Coffee', 'Premium ground coffee', '8.99', 25, 'kg', 6, 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085'),
  ('Frozen Pizza', 'Margherita frozen pizza', '5.99', 20, 'piece', 7, 'https://images.unsplash.com/photo-1513104890138-7c749659a591'),
  ('Chocolate Cookies', 'Chocolate chip cookies', '3.49', 30, 'pack', 8, 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e'); 