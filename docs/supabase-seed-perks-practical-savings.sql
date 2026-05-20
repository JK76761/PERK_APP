-- Additional Perk seed data for practical savings, food deals, AI tools, and early-career utilities.
-- Designed for Perk Expo app Supabase structure.
-- Re-run safely because this uses upsert on id.
-- Verified around 2026-05-11.

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
  ('too-good-to-go-au', 'Too Good To Go', 'Save Surplus Food', 'Rescue unsold meals and groceries at half price or less.', 'food', '1/2 price or less', 'green', 'Ongoing', 'Varies', 'shopping', 'toogoodtogo', 'Too Good To Go lets users buy surprise bags of unsold food and drink from cafes, restaurants, bakeries, and stores in the app at half price or less.', ARRAY['Download Too Good To Go and create an account.', 'Browse nearby stores with available surprise bags.', 'Reserve a bag in the app before collection time.', 'Pick it up during the listed collection window.']::text[], ARRAY['Availability depends on participating stores and daily surplus stock.', 'Bag contents vary and are not chosen in advance.', 'Collection windows and app payment rules apply.', 'Store coverage differs by city.']::text[], 'https://www.toogoodtogo.com/en-au', 'https://www.toogoodtogo.com/en-au/how-does-the-app-work', '2026-05-11', null, true, 'Australia', false, 'Too Good To Go', true, true),

  ('eatclub-dining-deals-au', 'EatClub', 'Time-Based Dining Deals', 'Unlock restaurant discounts in the app during quieter hours.', 'food', '25-50% off', 'orange', 'Time-based offers', 'Varies', 'shopping', 'eatclub', 'EatClub helps diners claim time-based deals from participating restaurants, bars, and cafes, with discounts that often land between 25% and 50% before a small booking fee.', ARRAY['Open EatClub and choose a venue with an available deal.', 'Claim the offer before it expires in the app.', 'Arrive within the required redemption window.', 'Show the venue your active offer and pay according to the deal terms.']::text[], ARRAY['Discounts vary by venue, time slot, and demand.', 'A booking or platform fee may apply depending on the offer.', 'Deals can expire quickly if not redeemed in time.', 'Participating venues set their own exclusions and service rules.']::text[], 'https://eatclub.com.au/', 'https://www2.eatclub.com.au/knowledge-base-faq/how-do-the-deals-work', '2026-05-11', null, true, 'Australia', false, 'EatClub', false, true),

  ('first-table-half-price-dining-au', 'First Table', '50% Off Food at First Sitting', 'Book the first table and get half price food at participating venues.', 'food', '50% off food', 'orange', 'Ongoing', 'Varies', 'shopping', 'firsttable', 'First Table lets diners book the first lunch or dinner table at participating restaurants and receive 50% off the food bill, with drinks and booking fees charged separately.', ARRAY['Search participating restaurants on First Table.', 'Reserve the first available lunch or dinner table.', 'Arrive on time and dine according to the reservation terms.', 'Pay the venue directly for the meal and any non-discounted items.']::text[], ARRAY['50% off applies to food only at participating venues.', 'A booking fee applies through First Table.', 'Drinks, surcharges, and special menu items may be excluded.', 'Venue availability depends on city and seating times.']::text[], 'https://www.firsttable.com.au/', 'https://www.firsttable.com.au/', '2026-05-11', null, true, 'Australia', false, 'First Table', false, false),

  ('shopback-au-cashback', 'ShopBack', 'Cashback on Everyday Shopping', 'Earn cashback from supported stores and travel bookings.', 'shopping', 'Cashback', 'green', 'Ongoing', 'Varies', 'shopping', 'shopback', 'ShopBack Australia lets shoppers activate cashback before they buy from supported online stores, then withdraw approved cashback after the merchant confirms the order.', ARRAY['Open ShopBack and pick a supported store or travel partner.', 'Activate cashback before checking out.', 'Complete the purchase following ShopBack tracking rules.', 'Wait for the merchant to confirm the order, then withdraw approved cashback.']::text[], ARRAY['Cashback rates vary by merchant, category, and campaign.', 'Transactions can fail to track if browsing rules are not followed.', 'Cashback is not available until the merchant confirms the order.', 'Payout methods and minimum withdrawal rules apply.']::text[], 'https://www.shopback.com.au/online-cashback-how-it-works', 'https://support.shopback.com.au/hc/en-gb/articles/11918815516947-Cashback-glossary-What-the-different-terms-mean', '2026-05-11', null, true, 'Australia', false, 'ShopBack', true, true),

  ('wise-student-money-abroad', 'Wise', 'Student Money Abroad', 'Manage spending and international transfers with low-fee FX tools.', 'banking', 'Low-fee FX', 'blue', 'Ongoing', 'Varies', 'banking', 'wise', 'Wise promotes its international account and debit card as a way for students to send, spend, and receive money abroad with transparent exchange rates and lower international banking friction.', ARRAY['Create a Wise account.', 'Complete any identity checks required for your region.', 'Open the multi-currency account or order the Wise card if available.', 'Compare transfer or spending fees before using it for overseas payments.']::text[], ARRAY['Fees vary by currency, transfer type, and region.', 'Identity verification is required for many account features.', 'Card availability depends on your country.', 'Local banking and regulatory rules apply.']::text[], 'https://wise.com/gb/students/', 'https://wise.com/gb/students/', '2026-05-11', null, true, 'Global', false, 'Wise', false, true),

  ('miro-education-plan', 'Miro', 'Miro Education Plan', 'Free collaborative whiteboards for eligible students and educators.', 'tech', 'Free plan', 'blue', 'Ongoing', 'Free', 'tech', 'miro', 'Miro offers a free Education plan for eligible students and educators, giving access to collaborative whiteboards, planning tools, templates, and classroom-friendly project workspaces.', ARRAY['Visit the Miro Education plan page.', 'Create or sign in to your Miro account.', 'Apply using your education details.', 'Wait for eligibility approval before using education features.']::text[], ARRAY['Available to eligible students and educators.', 'Verification or approval may be required.', 'Plan features can change over time.', 'Education access must follow Miro terms.']::text[], 'https://help.miro.com/hc/en-us/articles/360017730473-Education-plan', 'https://help.miro.com/hc/en-us/articles/360017730473-Education-plan', '2026-05-11', null, true, 'Global', true, 'Miro', false, false),

  ('notebooklm-free-ai-study', 'Google', 'NotebookLM', 'Free AI notebook for summarising sources and study materials.', 'ai-tools', 'Free AI tool', 'blue', 'Ongoing', 'Free', 'tech', 'google', 'NotebookLM is Google''s AI-powered research and note-taking tool that helps users upload sources, ask grounded questions, create summaries, and organise study material in one place.', ARRAY['Open NotebookLM with a supported Google account.', 'Create a notebook and upload your sources or links.', 'Use grounded summaries, questions, and audio or note features as available.', 'Check region and account support before relying on it for coursework.']::text[], ARRAY['Feature availability depends on account type and supported regions.', 'NotebookLM usage is subject to Google product terms.', 'AI outputs should be reviewed before academic submission.', 'Some advanced features may change over time.']::text[], 'https://notebooklm.google/', 'https://notebooklm.google/', '2026-05-11', null, true, 'Global', false, 'Google', false, true),

  ('google-ai-pro-student-au', 'Google', 'Google AI Pro Student Trial', 'Eligible students can access Google AI Pro at no cost for 12 months.', 'ai-tools', '12 months free', 'purple', 'Ends 30 Jun 2026', 'Free', 'tech', 'google', 'Google states that eligible students in supported regions can subscribe to Google AI Pro for 12 months at no charge, with verification handled through the student offer flow.', ARRAY['Visit the Google student offer help page.', 'Check whether your country and school eligibility are supported.', 'Complete student verification when prompted.', 'Activate the Google AI Pro trial and review renewal settings before the trial ends.']::text[], ARRAY['Supported countries and school verification are required.', 'Offer is limited to eligible students and new or qualifying subscribers.', 'A renewal charge can apply after the free period unless cancelled.', 'Google One and Google AI offer terms apply.']::text[], 'https://support.google.com/googleone/answer/16417758?hl=en-AU', 'https://support.google.com/googleone/answer/16417758?hl=en-AU', '2026-05-11', '2026-06-30', true, 'Australia', true, 'Google', true, true),

  ('tableau-for-students', 'Tableau', 'Tableau for Students', 'Free data visualisation software and eLearning for eligible students.', 'tech', 'Free access', 'blue', 'Ongoing', 'Free', 'tech', 'tableau', 'Tableau offers students free access to data visualisation tools and eLearning resources through its academic program, which can be useful for coursework, portfolios, and early-career analytics skills.', ARRAY['Open the Tableau for Students page.', 'Create or sign in to a Tableau account.', 'Apply using your education details if requested.', 'Download or use the offered student resources once approved.']::text[], ARRAY['Intended for eligible students and academic learning use.', 'Verification may be required depending on the product flow.', 'Available tools and learning resources can change.', 'Commercial or production usage may not be covered by the education terms.']::text[], 'https://www.tableau.com/freeforstudents', 'https://www.tableau.com/freeforstudents', '2026-05-11', null, true, 'Global', true, 'Tableau', false, false),

  ('youtube-premium-student-au', 'YouTube', 'YouTube Premium Student', 'Eligible students can access YouTube Premium at student pricing.', 'subscriptions', 'Student pricing', 'red', 'Ongoing', 'Varies', 'subscription', 'youtube', 'YouTube offers a student membership option for eligible higher education students, letting them access Premium features at discounted student pricing while verification remains active.', ARRAY['Open the YouTube Premium student page.', 'Sign in with your Google account.', 'Complete student verification through the official verification partner.', 'Review pricing, renewal, and re-verification requirements before subscribing.']::text[], ARRAY['Only eligible students at approved higher education institutions can apply.', 'Student status must be re-verified periodically.', 'Pricing varies by market and can change.', 'Membership renews unless cancelled.']::text[], 'https://www.youtube.com/premium/student', 'https://support.google.com/youtube/answer/9158808?hl=en-AU', '2026-05-11', null, true, 'Australia', true, 'YouTube', false, false)
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
