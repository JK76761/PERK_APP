-- Additional Perk seed data for research and rewards opportunities.
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
  ('prolific-paid-research', 'Prolific', 'Paid Research Studies', 'Earn money by participating in academic and product research online.', 'research-rewards', 'Earn cash', 'green', 'Ongoing', 'Varies', 'research', 'prolific', 'Prolific connects participants with paid online research studies from universities, startups, and established organizations, with account verification and direct cash-out options.', ARRAY['Join the Prolific participant waitlist.', 'Verify your account when invited.', 'Complete your participant profile.', 'Log in to accept studies you qualify for and cash out approved rewards.']::text[], ARRAY['Joining may require a waitlist and ID verification.', 'Payment depends on study availability and eligibility.', 'Cash-out rules and minimum thresholds apply.', 'Researchers set study-specific requirements and rewards.']::text[], 'https://app.prolific.com/', 'https://www.prolific.com/participants-how-it-works', '2026-05-11', null, true, 'Global', false, 'Prolific', false, true),

  ('askable-paid-research', 'Askable', 'Get Paid to Participate', 'Complete surveys, tasks, and interviews for cash or gift cards.', 'research-rewards', 'Up to $100/hr', 'green', 'Ongoing', 'Varies', 'research', 'askable', 'Askable runs participant research opportunities including remote conversations, recorded tasks, and quick surveys, with payments available through PayPal or gift cards.', ARRAY['Create an Askable participant account.', 'Answer profile questions so you can match with research studies.', 'Apply for surveys, tasks, or interviews that fit your experience.', 'Complete accepted sessions and choose your payment method.']::text[], ARRAY['Availability varies by country, profile fit, and researcher needs.', 'Payment may be sent by PayPal or gift card.', 'Some opportunities may have age or consent requirements.', 'Reward amounts vary by study format and duration.']::text[], 'https://www.askable.com/earn/participants', 'https://www.askable.com/earn/participants', '2026-05-11', null, true, 'Global', false, 'Askable', false, false),

  ('respondent-paid-research', 'Respondent', 'Paid Research Studies', 'Apply for remote and in-person research projects with participant incentives.', 'research-rewards', '$95 avg incentive', 'purple', 'Ongoing', 'Varies', 'research', 'respondent', 'Respondent matches participants with paid research studies, surveys, interviews, and focus groups from brands and researchers, with incentives that vary by project.', ARRAY['Create your Respondent participant profile.', 'Add your background, interests, and relevant details.', 'Apply for projects you match with.', 'Complete accepted sessions and receive payment after the project finishes.']::text[], ARRAY['Project availability depends on screening fit and location.', 'Incentives vary by study type and duration.', 'Payments are handled after project completion.', 'Researchers may require specific demographics or professional backgrounds.']::text[], 'https://www.respondent.io/become-a-participant', 'https://www.respondent.io/become-a-participant', '2026-05-11', null, true, 'Global', false, 'Respondent', false, true),

  ('octopus-group-paid-surveys-au', 'Octopus Group', 'Paid Surveys Australia', 'Australian-owned survey panel with real cash payouts.', 'research-rewards', 'Real cash', 'green', 'Ongoing', 'Varies', 'research', 'octopus', 'Octopus Group is an Australian and New Zealand survey panel offering paid survey invites, cash payouts, and refer-a-friend rewards for members who complete opinion research.', ARRAY['Join Octopus Group for free.', 'Complete your member profile.', 'Wait for survey invitations that match your background.', 'Finish eligible surveys and cash out available rewards.']::text[], ARRAY['Designed primarily for Australia and New Zealand members.', 'Survey invites depend on profile fit and availability.', 'Cash rates and referral rewards may change.', 'Cash-out and membership rules apply.']::text[], 'https://octopusgroup.com.au/', 'https://octopusgroup.com.au/', '2026-05-11', null, true, 'Australia & New Zealand', false, 'Octopus Group', false, false)
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
