SELECT * FROM snackmates.menu_table;

use snackmates;
-- Insert data into menu_table
INSERT INTO menu_table (menu_id, restaurant_id, menu_name, menu_description, menu_type, menu_price, menu_img_url) VALUES
-- Restaurant 1: Healthy Eats
(1, 1, 'Vegan Salad Bowl', 'A refreshing bowl of mixed greens, quinoa, avocado, and a lemon-tahini dressing.', 'salad', 6.99, 'img/vegan_salad_bowl.jpg'),
(2, 1, 'Classic Indian Thali', 'A wholesome platter with dal, rice, chapati, and mixed vegetable curry.', 'thali', 9.99, 'img/classic_indian_thali.jpg'),
(3, 1, 'Protein-Packed Salad', 'Grilled chicken breast served with spinach, feta cheese, and walnuts.', 'salad', 8.99, 'img/protein_packed_salad.jpg'),
(4, 1, 'South Indian Thali', 'A traditional platter with sambar, rasam, rice, and a variety of chutneys.', 'thali', 10.99, 'img/south_indian_thali.jpg'),
(5, 1, 'Caesar Salad', 'Crisp romaine lettuce with grilled chicken, croutons, and Caesar dressing.', 'salad', 7.99, 'img/caesar_salad.jpg'),

-- Restaurant 2: Bowl House
(6, 2, 'Spicy Ramen Bowl', 'Rich and flavorful broth with noodles, egg, pork, and vegetables.', 'ramen', 11.99, 'img/spicy_ramen_bowl.jpg'),
(7, 2, 'Teriyaki Chicken Bowl', 'Grilled chicken with teriyaki sauce served over steamed rice.', 'bowl', 9.99, 'img/teriyaki_chicken_bowl.jpg'),
(8, 2, 'Buddha Bowl', 'A healthy mix of quinoa, roasted vegetables, and tofu.', 'bowl', 10.99, 'img/buddha_bowl.jpg'),
(9, 2, 'Poke Bowl', 'Fresh tuna, avocado, and seaweed salad over sushi rice.', 'bowl', 12.99, 'img/poke_bowl.jpg'),
(10, 2, 'Miso Ramen', 'Creamy miso broth with noodles, mushrooms, and tofu.', 'ramen', 11.49, 'img/miso_ramen.jpg'),

-- Restaurant 3: South Indian Delights
(11, 3, 'Masala Dosa', 'A crispy dosa stuffed with spiced potato filling, served with sambar and chutneys.', 'south Indian', 6.99, 'img/masala_dosa.jpg'),
(12, 3, 'Idli Sambar', 'Steamed rice cakes served with sambar and coconut chutney.', 'south Indian', 5.49, 'img/idli_sambar.jpg'),
(13, 3, 'Medu Vada', 'Crispy lentil doughnuts served with sambar and chutneys.', 'south Indian', 4.99, 'img/medu_vada.jpg'),
(14, 3, 'Uttapam', 'A thick pancake topped with onions, tomatoes, and chilies.', 'south Indian', 7.49, 'img/uttapam.jpg'),
(15, 3, 'Rava Dosa', 'Thin and crispy dosa made with semolina, served with sambar and chutneys.', 'south Indian', 6.49, 'img/rava_dosa.jpg'),

-- Restaurant 4: Western Feast
(16, 4, 'Margherita Pizza', 'Classic pizza with fresh mozzarella, tomatoes, and basil.', 'pizza', 8.99, 'img/margherita_pizza.jpg'),
(17, 4, 'Cheeseburger', 'Juicy beef patty topped with cheddar cheese, lettuce, and tomato.', 'burger', 7.49, 'img/cheeseburger.jpg'),
(18, 4, 'Spaghetti Carbonara', 'Creamy pasta with pancetta, egg, and parmesan cheese.', 'pasta', 9.99, 'img/spaghetti_carbonara.jpg'),
(19, 4, 'Chicken Momos', 'Steamed dumplings filled with spiced chicken, served with a spicy dipping sauce.', 'momo', 6.99, 'img/chicken_momos.jpg'),
(20, 4, 'Chocolate Waffles', 'Crispy waffles drizzled with chocolate sauce and topped with whipped cream.', 'dessert', 5.99, 'img/chocolate_waffles.jpg'),

-- Restaurant 5: Grill Master
(21, 5, 'BBQ Chicken Wings', 'Juicy chicken wings coated in a tangy barbecue sauce.', 'chicken', 7.99, 'img/bbq_chicken_wings.jpg'),
(22, 5, 'Grilled Chicken Nuggets', 'Tender chicken nuggets grilled to perfection, served with a side of honey mustard.', 'chicken', 6.49, 'img/grilled_chicken_nuggets.jpg'),
(23, 5, 'Barbecue Ribs', 'Slow-cooked ribs slathered in a rich and smoky BBQ sauce.', 'chicken', 14.99, 'img/barbecue_ribs.jpg'),
(24, 5, 'Spicy Grilled Chicken', 'Spicy marinated chicken grilled to perfection, served with a side of coleslaw.', 'chicken', 10.49, 'img/spicy_grilled_chicken.jpg'),
(25, 5, 'BBQ Chicken Sandwich', 'Grilled chicken breast topped with BBQ sauce, lettuce, and tomato, served on a toasted bun.', 'burger', 8.49, 'img/bbq_chicken_sandwich.jpg'),

-- Restaurant 6: Cool Drinks
(26, 6, 'Mango Smoothie', 'A refreshing blend of ripe mangoes and yogurt, served chilled.', 'drinks', 4.99, 'img/mango_smoothie.jpg'),
(27, 6, 'Classic Lemonade', 'Freshly squeezed lemons with a hint of mint, served over ice.', 'drinks', 3.99, 'img/classic_lemonade.jpg'),
(28, 6, 'Berry Blast Smoothie', 'A mix of strawberries, blueberries, and raspberries blended with yogurt.', 'drinks', 5.49, 'img/berry_blast_smoothie.jpg'),
(29, 6, 'Mint Mojito Mocktail', 'A refreshing non-alcoholic drink with mint, lime, and soda.', 'drinks', 4.49, 'img/mint_mojito_mocktail.jpg'),
(30, 6, 'Orange Juice', 'Freshly squeezed orange juice, served with a slice of orange.', 'drinks', 3.49, 'img/orange_juice.jpg');