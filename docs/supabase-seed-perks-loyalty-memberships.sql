-- Additional Perk seed data for loyalty programs, cashback-style memberships, and everyday savings utilities.
-- Designed for Perk Expo app Supabase structure.
-- Re-run safely because this uses upsert on id.
-- Verified around 2026-05-16.

insert into public.perks (
  id,
  company,
  title,
  subtitle,
  category,
  badge_text,
  badge_tone,
  expiry_text,
  savings_value,
  logo_type,
  logo_key,
  description,
  how_to_claim,
  terms,
  external_url,
  source_url,
  verified_at,
  expires_at,
  is_verified,
  region,
  student_only,
  provider,
  is_featured,
  is_trending
)
values
  ('flybuys-rewards-au', 'Flybuys', 'Flybuys Rewards Program', 'Collect points across major Australian retailers and partners.', 'shopping', 'Free signup', 'green', 'Ongoing', 'Varies', 'shopping', 'flybuys', 'Flybuys is a major Australian rewards program that lets members collect points when shopping at participating retailers such as Coles, Bunnings Warehouse, Target, Kmart, Officeworks, and Liquorland, then redeem those points for rewards and savings.', ARRAY['Join Flybuys online or in the app.', 'Link or scan your Flybuys card at participating partners.', 'Collect points on eligible purchases.', 'Redeem points through Flybuys offers, rewards, or partner savings when available.']::text[], ARRAY['Participating partners and eligible purchases vary.', 'Point earn rates and redemption options depend on partner terms.', 'You usually need to scan or link your account correctly to collect points.', 'Flybuys terms and exclusions apply.']::text[], 'https://www.flybuys.com.au/', 'https://help.flybuys.com.au/hc/en-gb/articles/9103580417039-What-is-Flybuys', '2026-05-16', null, true, 'Australia', false, 'Flybuys', true, true),

  ('everyday-rewards-au', 'Everyday Rewards', 'Everyday Rewards Program', 'Collect points on groceries, fuel, and partner shopping.', 'shopping', 'Free signup', 'green', 'Ongoing', 'Varies', 'shopping', 'everydayrewards', 'Everyday Rewards lets members collect at least 1 point per eligible dollar at participating partners, then choose $10 off a future shop or convert points to Qantas Points once they reach the redemption threshold.', ARRAY['Join Everyday Rewards online or in the app.', 'Scan your Everyday Rewards card when shopping with participating partners.', 'Collect points on eligible purchases.', 'Redeem points for Rewards dollars or convert them to Qantas Points when eligible.']::text[], ARRAY['Eligible purchases, exclusions, and partner rules apply.', 'At least 1 point per eligible dollar applies at participating partners, not every purchase.', 'Rewards redemption settings can differ by member account preferences.', 'Everyday Rewards terms and partner conditions apply.']::text[], 'https://www.everydayrewards.com.au/', 'https://www.everydayrewards.com.au/', '2026-05-16', null, true, 'Australia', false, 'Everyday Rewards', true, true),

  ('onepass-membership-au', 'OnePass', 'OnePass Membership', 'Retail membership with delivery, Flybuys, returns, and partner perks.', 'shopping', '$4/mo or $40/yr', 'purple', 'Ongoing', 'Varies', 'shopping', 'onepass', 'OnePass is a paid retail membership that bundles free delivery on eligible items or orders, 5x Flybuys points at selected retailers, 365-day change of mind returns at participating brands, Express Click & Collect, and partner benefits such as InstantScripts discounts.', ARRAY['Start a OnePass free trial or membership online.', 'Create your OnePass account and activate participating brand benefits.', 'Link Flybuys if you want Flybuys-based member benefits.', 'Use eligible partner stores and services through your active membership.']::text[], ARRAY['Benefits vary by participating brand and product eligibility.', 'Some postcodes and oversized items are excluded from free delivery.', 'Membership renews automatically unless cancelled.', 'OnePass partner, delivery, and benefit exclusions apply.']::text[], 'https://onepass.com.au/', 'https://onepass.com.au/getting-started', '2026-05-16', null, true, 'Australia', false, 'OnePass', true, true),

  ('coles-plus-saver-au', 'Coles', 'Coles Plus Saver', 'Membership with monthly 10% off and extra delivery-style perks.', 'shopping', '10% off monthly', 'green', 'Ongoing', 'Up to $50', 'shopping', 'coles', 'Coles Plus Saver is a Coles membership that includes a 10 percent monthly discount on one big shop, capped savings, and additional membership benefits for regular Coles shoppers.', ARRAY['Open Coles memberships online.', 'Choose Coles Plus Saver and join the membership.', 'Use the monthly discount on an eligible Coles shop.', 'Check your current plan details and exclusions before relying on the discount.']::text[], ARRAY['The monthly 10 percent discount has a cap and eligibility rules.', 'Membership fees apply unless you are on a valid trial or offer.', 'Some products and purchase types are excluded.', 'Coles membership terms and exclusions apply.']::text[], 'https://www.coles.com.au/ways-to-shop/membership/coles-plus-saver', 'https://www.coles.com.au/ways-to-shop/membership', '2026-05-16', null, true, 'Australia', false, 'Coles', false, true),

  ('my-7-eleven-fuel-lock-au', '7-Eleven', 'My 7-Eleven Fuel Lock', 'Lock in a local fuel price for up to 7 days in the app.', 'travel', 'Fuel Lock', 'orange', 'Ongoing', 'Varies', 'travel', '7eleven', 'The My 7-Eleven app gives users access to rewards and a Fuel Lock feature that lets them lock in their best local fuel price for 7 days and redeem it at participating 7-Eleven fuel stores in Australia.', ARRAY['Download the My 7-Eleven app.', 'Create or sign in to your account.', 'Use Fuel Lock in the app to save a local fuel price.', 'Redeem the Fuel Lock before it expires at an eligible 7-Eleven fuel store.']::text[], ARRAY['Fuel Lock availability, fuel types, and redemption conditions apply.', 'Locked prices expire if not redeemed in time.', '7-Eleven loyalty, rewards, and location rules may vary by store.', 'App and loyalty terms apply.']::text[], 'https://www.7eleven.com.au/my-7-eleven.html', 'https://app.7eleven.com.au/mobile/Fuel-App-FAQ.html', '2026-05-16', null, true, 'Australia', false, '7-Eleven', true, true),

  ('bpme-bp-rewards-au', 'bp', 'BPme and BP Rewards', 'Fuel payment app, rewards points, and bonus offers at bp.', 'travel', 'Rewards app', 'blue', 'Ongoing', 'Varies', 'travel', 'bp', 'BPme is bp Australia’s app for paying for fuel from your car, pre-ordering coffee and food, and accessing a digital BP Rewards card with exclusive bonus point offers and rewards tracking.', ARRAY['Download the BPme app.', 'Create an account and add a payment method if you want to pay in-app.', 'Register or activate your BP Rewards card in BPme.', 'Use BPme or scan your digital card at participating bp stores to earn rewards.']::text[], ARRAY['BPme and BP Rewards are only available at participating bp locations.', 'Point offers, coffee offers, and reward mechanics can change over time.', 'Payment and in-app ordering depend on store participation.', 'bp terms and exclusions apply.']::text[], 'https://www.bp.com/en_au/australia/home/products-services/bpme.html', 'https://www.bp.com/en_au/australia/home/products-services/bpme/faqs.html', '2026-05-16', null, true, 'Australia', false, 'bp Australia', false, false),

  ('ampol-everyday-rewards-au', 'Ampol Foodary', 'Ampol Everyday Rewards Savings', 'Collect Everyday Rewards points and unlock fuel discounts.', 'travel', '4c/L fuel save', 'green', 'Ongoing', '4c/L', 'travel', 'ampol', 'Ampol Foodary participates in Everyday Rewards, letting members collect points on eligible purchases and redeem a 4 cents per litre fuel discount at participating locations after qualifying Woolworths spending.', ARRAY['Join Everyday Rewards if you do not already have an account.', 'Scan your Everyday Rewards card at participating Ampol Foodary locations.', 'Spend with eligible Everyday Rewards partners when needed to unlock fuel discounts.', 'Redeem your fuel discount within the eligible timeframe at a participating Ampol location.']::text[], ARRAY['Fuel discount eligibility depends on qualifying partner spend and timing.', 'Not every Ampol location participates in every Everyday Rewards benefit.', 'Everyday Rewards exclusions apply to some purchases.', 'Ampol and Everyday Rewards terms apply.']::text[], 'https://www.ampol.com.au/convenience/everyday-rewards', 'https://www.ampol.com.au/convenience/everyday-rewards', '2026-05-16', null, true, 'Australia', false, 'Ampol Foodary', true, true),

  ('mymaccas-rewards-au', 'McDonald''s', 'MyMacca''s Rewards', 'Earn points, unlock rewards, and access app deals.', 'food', 'App rewards', 'orange', 'Ongoing', 'Varies', 'food', 'mymaccas', 'MyMacca’s Rewards in the McDonald’s Australia app lets customers access rewards, deals, bonuses, and app-based ordering, with points earned and redeemed through the rewards section of the app.', ARRAY['Download the MyMacca''s app and sign in.', 'Open the Rewards and Deals section.', 'Earn points on eligible orders made through supported app flows.', 'Redeem rewards or deals when they become available in the app.']::text[], ARRAY['Eligible earn and redemption flows depend on app ordering rules.', 'Not every deal can be stacked with another offer.', 'Some promotions are limited-time or product-specific.', 'MyMacca''s app terms and McDonald''s promotional conditions apply.']::text[], 'https://mcdonalds.com.au/', 'https://mcdonalds.com.au/help-centre/article/kA02s00000000uHCAQ', '2026-05-16', null, true, 'Australia', false, 'McDonald''s Australia', false, true),

  ('uber-one-students-au', 'Uber', 'Uber One for Students', 'Discounted student membership for Uber and Uber Eats perks.', 'subscriptions', 'Student plan', 'purple', 'Ongoing', 'Varies', 'subscription', 'uber', 'Uber One for Students gives eligible students discounted access to Uber and Uber Eats perks, including reduced delivery fees, order savings at eligible merchants, and ride-related Uber One credits.', ARRAY['Open the Uber Eats app and go to Uber One.', 'Choose the Student option if it is available to you.', 'Verify your student status through Uber''s verification flow.', 'Start the membership and check your current student pricing in the app before confirming.']::text[], ARRAY['Student verification is required.', 'Pricing and trial availability can change over time.', 'Membership renews automatically unless cancelled.', 'Uber One eligibility, order minimums, fees, and exclusions apply.']::text[], 'https://www.uber.com/au/en/u/uber-one/', 'https://help.uber.com/en-AU/riders/article/uber%C2%A0one-for-students?nodeId=1054d70b-fcfa-40c7-853e-1d9f9e1fb3b9', '2026-05-16', null, true, 'Australia', true, 'Uber', true, true),

  ('bunnings-powerpass-apprentice-au', 'Bunnings', 'PowerPass Apprentice', 'Trade-style benefits for apprentices before they finish training.', 'shopping', 'Apprentice perks', 'blue', 'Ongoing', 'Varies', 'shopping', 'bunnings', 'PowerPass Apprentice gives apprentices access to selected Bunnings Trade-style benefits before they complete their apprenticeship, including useful account features such as next day Click & Collect or delivery options.', ARRAY['Open the PowerPass Apprentice page on Bunnings Trade.', 'Apply for the apprentice account if you are eligible.', 'Set up your PowerPass access once approved.', 'Use eligible PowerPass Apprentice benefits in-store or through supported trade flows.']::text[], ARRAY['Apprenticeship eligibility is required.', 'Benefits depend on account type, trade status, and participating services.', 'Delivery and Click & Collect access depend on order and location rules.', 'Bunnings Trade and PowerPass terms apply.']::text[], 'https://trade.bunnings.com.au/powerpass/apprentice', 'https://trade.bunnings.com.au/powerpass/apprentice', '2026-05-16', null, true, 'Australia', false, 'Bunnings Trade', false, false)
on conflict (id) do update set
  company = excluded.company,
  title = excluded.title,
  subtitle = excluded.subtitle,
  category = excluded.category,
  badge_text = excluded.badge_text,
  badge_tone = excluded.badge_tone,
  expiry_text = excluded.expiry_text,
  savings_value = excluded.savings_value,
  logo_type = excluded.logo_type,
  logo_key = excluded.logo_key,
  description = excluded.description,
  how_to_claim = excluded.how_to_claim,
  terms = excluded.terms,
  external_url = excluded.external_url,
  source_url = excluded.source_url,
  verified_at = excluded.verified_at,
  expires_at = excluded.expires_at,
  is_verified = excluded.is_verified,
  region = excluded.region,
  student_only = excluded.student_only,
  provider = excluded.provider,
  is_featured = excluded.is_featured,
  is_trending = excluded.is_trending;
