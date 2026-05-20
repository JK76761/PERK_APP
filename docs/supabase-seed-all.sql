-- Combined Perk seed bundle for Supabase.
-- This file concatenates the current ordered seed files for easier setup.
-- Re-run safely because each section uses upsert on id.

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
  ('westpac-50-cashback', 'Westpac', '$50 Choice Account Cashback', 'Open Choice + eligible savings, then deposit $50 within 10 days.', 'banking', '$50 cashback', 'green', 'Ends 8 Jun 2026', '$50', 'bank', 'westpac', 'Westpac offers $50 cashback for eligible new customers who open a new Choice everyday account and an eligible savings account together, then deposit $50 or more into the Choice account within 10 days.', ARRAY['Open a new Westpac Choice everyday account.', 'Open an eligible Westpac savings account in the same name.', 'Deposit $50 or more into the Choice account within 10 calendar days.', 'Check the official terms before applying.']::text[], ARRAY['New customers only.', 'Must not have held a Westpac transaction or savings account in the last 2 years.', 'Offer runs from 1 February 2026 to 8 June 2026.', 'Terms and conditions apply.']::text[], 'https://www.westpac.com.au/personal-banking/bank-accounts/transaction/students-and-young-adults/', 'https://www.westpac.com.au/personal-banking/bank-accounts/transaction/students-and-young-adults/', '2026-05-08', '2026-06-08', true, 'Australia', false, 'Westpac', true, true),
  ('stgeorge-50-student', 'St.George', '$50 Student Banking Bonus', 'Open Complete Freedom + eligible savings and deposit $50.', 'banking', '$50 bonus', 'green', 'Ends 8 Jun 2026', '$50', 'bank', 'stgeorge', 'St.George offers $50 when eligible customers open a Complete Freedom account and an eligible savings account together, then deposit $50 or more within 10 days.', ARRAY['Open a St.George Complete Freedom account.', 'Open an eligible savings account in the same name.', 'Deposit $50 or more within 10 days.', 'Confirm current eligibility on the official page.']::text[], ARRAY['New account holders only.', 'Must not have held a St.George Complete Freedom or savings account in the past 2 years.', 'Offer ends 8 June 2026.', 'Terms and conditions apply.']::text[], 'https://www.stgeorge.com.au/personal/bank-accounts/transaction-accounts/complete-freedom-student', 'https://www.stgeorge.com.au/personal/bank-accounts/transaction-accounts/complete-freedom-student', '2026-05-08', '2026-06-08', true, 'Australia', true, 'St.George', false, false),
  ('bank-of-melbourne-50-student', 'Bank of Melbourne', '$50 Student Account Bonus', 'Open Complete Freedom + eligible savings and deposit $50.', 'banking', '$50 bonus', 'green', 'Ends 8 Jun 2026', '$50', 'bank', 'bankofmelbourne', 'Bank of Melbourne offers $50 to eligible new customers who open a Complete Freedom account and an eligible savings account together, then deposit $50 or more within 10 days.', ARRAY['Open a Complete Freedom everyday account.', 'Open an eligible savings account in the same name.', 'Deposit $50 or more into the Complete Freedom account within 10 days.', 'Read the official terms before applying.']::text[], ARRAY['New account holders only.', 'Must not have held a Bank of Melbourne Complete Freedom or savings account in the past 2 years.', 'Offer ends 8 June 2026.', 'Terms and conditions apply.']::text[], 'https://www.bankofmelbourne.com.au/personal/bank-accounts/transaction-accounts/complete-freedom-student', 'https://www.bankofmelbourne.com.au/personal/bank-accounts/transaction-accounts/complete-freedom-student', '2026-05-08', '2026-06-08', true, 'Australia', true, 'Bank of Melbourne', false, false),
  ('banksa-50-student', 'BankSA', '$50 Student Account Bonus', 'Open Complete Freedom + eligible savings and deposit $50.', 'banking', '$50 bonus', 'green', 'Ends 8 Jun 2026', '$50', 'bank', 'banksa', 'BankSA offers $50 to eligible new customers who open a Complete Freedom account and an eligible savings account together, then deposit $50 or more within 10 days.', ARRAY['Open a Complete Freedom everyday account.', 'Open an eligible savings account in the same name.', 'Deposit $50 or more into the Complete Freedom account within 10 days.', 'Check the official BankSA terms before applying.']::text[], ARRAY['New account holders only.', 'Must not have held a BankSA Complete Freedom or savings account in the past 2 years.', 'Offer ends 8 June 2026.', 'Terms and conditions apply.']::text[], 'https://www.banksa.com.au/personal/bank-accounts/transaction-accounts/complete-freedom-student', 'https://www.banksa.com.au/personal/bank-accounts/transaction-accounts/complete-freedom-student', '2026-05-08', '2026-06-08', true, 'Australia', true, 'BankSA', false, false),
  ('commbank-40-cashback', 'CommBank', 'Up to $40 Cashback', 'First Everyday Smart Access account before 30 Jun 2026.', 'banking', 'Up to $40', 'green', 'Ends 30 Jun 2026', '$40', 'bank', 'commbank', 'CommBank offers eligible new customers up to $40 cashback after opening their first Everyday Smart Access account before 30 June 2026 and spending with selected merchants.', ARRAY['Open your first CommBank Everyday Smart Access account.', 'Check the current cashback offer terms.', 'Spend with eligible merchants such as Amazon, Chemist Warehouse, Uber, or Uber Eats if the offer is still active.', 'Confirm cashback conditions on the official CommBank page.']::text[], ARRAY['Available to eligible customers aged 18+.', 'Must open the first CommBank Everyday Smart Access account before 30 June 2026.', 'Cashback conditions and merchant eligibility apply.', 'Terms and conditions may change.']::text[], 'https://www.commbank.com.au/moving-to-australia/banking.html', 'https://www.commbank.com.au/moving-to-australia/banking.html', '2026-05-08', '2026-06-30', true, 'Australia', false, 'CommBank', false, true),
  ('github-student-developer-pack', 'GitHub', 'Student Developer Pack', 'Free developer tools and education benefits.', 'tech', 'Dev tools', 'blue', 'Ongoing', '$2,000+ value', 'github', 'github', 'GitHub Student Developer Pack gives verified students access to developer tools, learning platforms, cloud credits, GitHub benefits, and partner offers.', ARRAY['Create or sign in to a GitHub account.', 'Visit GitHub Education.', 'Verify student status using school email or proof of enrolment.', 'Claim available partner offers from the pack.']::text[], ARRAY['Student verification required.', 'Partner offers may change over time.', 'Some benefits may have separate eligibility rules.']::text[], 'https://education.github.com/pack', 'https://education.github.com/pack', '2026-05-08', null, true, 'Global', true, 'GitHub', true, true),
  ('jetbrains-student-pack', 'JetBrains', 'Free Student Developer Tools', 'Access professional IDEs for study.', 'tech', 'Free license', 'purple', 'Student status required', 'Free', 'code', 'jetbrains', 'JetBrains offers free access to professional developer tools for students, including IntelliJ IDEA, PyCharm, WebStorm, CLion, DataGrip, and more.', ARRAY['Visit the JetBrains Student Pack page.', 'Apply with an eligible student email or student verification method.', 'Wait for approval.', 'Download and activate the tools through your JetBrains account.']::text[], ARRAY['Must be a student at an accredited educational institution or otherwise meet JetBrains education eligibility.', 'Educational licenses cannot be used for commercial work.', 'License validity depends on education status and renewal rules.']::text[], 'https://www.jetbrains.com/academy/student-pack/', 'https://www.jetbrains.com/academy/student-pack/', '2026-05-08', null, true, 'Global', true, 'JetBrains', false, false),
  ('figma-education', 'Figma', 'Figma for Education', 'Free design tools for students and educators.', 'tech', 'Free plan', 'purple', 'Ongoing', 'Free', 'design', 'figma', 'Figma provides free tools for students and educators, including design, prototyping, and collaboration features for classroom and higher education use.', ARRAY['Create or sign in to a Figma account.', 'Visit the Figma Education page.', 'Apply for education access.', 'Verify student or educator status if required.']::text[], ARRAY['Available to eligible students and educators.', 'Verification may be required.', 'Plan features may change over time.']::text[], 'https://www.figma.com/education/', 'https://www.figma.com/education/', '2026-05-08', null, true, 'Global', true, 'Figma', false, false),
  ('notion-education', 'Notion', 'Notion for Education', 'Free Plus plan for individual students.', 'tech', 'Free Plus', 'blue', 'Ongoing', 'Free', 'tech', 'notion', 'Notion offers a free Plus Plan for individual students and teachers using an eligible education institution email.', ARRAY['Sign in to Notion.', 'Use your education institution email address.', 'Upgrade through the Notion for Education flow.', 'Confirm eligibility inside Notion.']::text[], ARRAY['Individual student or teacher education plan is for a one-member workspace.', 'Must use an eligible education email.', 'Offer terms apply.']::text[], 'https://www.notion.com/product/notion-for-education', 'https://www.notion.com/help/notion-for-education', '2026-05-08', null, true, 'Global', true, 'Notion', false, false),
  ('canva-education', 'Canva', 'Canva for Education', 'Free design tools for eligible education users.', 'tech', 'Free', 'blue', 'Ongoing', 'Free', 'design', 'canva', 'Canva for Education provides design tools and education resources for eligible teachers and students at eligible schools.', ARRAY['Visit Canva Education.', 'Sign in or create a Canva account.', 'Follow the student or education verification process.', 'Confirm eligibility before relying on the offer.']::text[], ARRAY['Eligibility depends on school or institution.', 'Some access may be managed through teachers, schools, or campuses.', 'Terms and availability may vary.']::text[], 'https://www.canva.com/education/', 'https://www.canva.com/education/', '2026-05-08', null, true, 'Global', true, 'Canva', false, false),
  ('aws-educate', 'AWS', 'AWS Educate', 'Free cloud learning and hands-on labs.', 'tech', 'Free training', 'orange', 'Ongoing', 'Free', 'tech', 'aws', 'AWS Educate provides students and educators with no-cost access to cloud computing learning resources, beginner-friendly content, and hands-on labs.', ARRAY['Visit AWS Educate.', 'Register with an email address.', 'Access free learning content and labs.', 'Use AWS Educate resources for cloud skill development.']::text[], ARRAY['Learners as young as 13 may register.', 'No credit card is needed for AWS Educate registration.', 'Some features may have eligibility rules.']::text[], 'https://aws.amazon.com/education/awseducate/', 'https://aws.amazon.com/education/awseducate/', '2026-05-08', null, true, 'Global', true, 'AWS', false, false),
  ('adobe-creative-cloud-student-au', 'Adobe', 'Creative Cloud Student', 'Creative Cloud Pro student pricing in Australia.', 'tech', 'A$23.99/mo', 'red', 'First year pricing', 'Varies', 'design', 'adobe', 'Adobe Australia offers Creative Cloud Pro student and teacher pricing, advertised as A$23.99/month for the first year on the annual billed monthly plan.', ARRAY['Visit Adobe Creative Cloud student pricing Australia.', 'Check student or teacher eligibility.', 'Start the student plan or free trial if eligible.', 'Review renewal pricing before subscribing.']::text[], ARRAY['Student or teacher eligibility required.', 'Introductory pricing applies for the first year.', 'Renewal price may increase after the first year.', 'Adobe terms apply.']::text[], 'https://www.adobe.com/au/creativecloud/buy/students.html', 'https://www.adobe.com/au/creativecloud/buy/students.html', '2026-05-08', null, true, 'Australia', true, 'Adobe', false, false),
  ('autodesk-education-access', 'Autodesk', 'Education Access', 'Free one-year access to Autodesk software.', 'tech', 'Free', 'blue', 'Renewable yearly', 'Free', 'design', 'autodesk', 'Autodesk provides eligible students and educators free one-year single-user access to Autodesk software for educational purposes, renewable annually while eligible.', ARRAY['Visit Autodesk Education.', 'Create or sign in to an Autodesk account.', 'Verify student or educator eligibility.', 'Download eligible software through Autodesk Education.']::text[], ARRAY['For eligible students and educators.', 'One-year educational access.', 'Renewable while eligible.', 'Educational use only.']::text[], 'https://www.autodesk.com/education/edu-software/overview', 'https://www.autodesk.com/education/edu-software/overview', '2026-05-08', null, true, 'Global', true, 'Autodesk', false, false),
  ('spotify-premium-student-au', 'Spotify', 'Premium Student', 'Student Premium for $7.99/month in Australia.', 'subscriptions', '$7.99/mo', 'green', 'Ongoing', '$7.99/month', 'spotify', 'spotify', 'Spotify Premium Student in Australia gives eligible higher education students Premium access at $7.99 per month, with student verification required.', ARRAY['Visit Spotify Premium Student Australia.', 'Sign in or create a Spotify account.', 'Verify your student status.', 'Start the student subscription if eligible.']::text[], ARRAY['Offer reserved for students enrolled in an eligible accredited institution.', 'Not available to users who have already tried Premium.', 'Student access may require re-verification after 12 months.']::text[], 'https://www.spotify.com/au/student/', 'https://www.spotify.com/au/student/', '2026-05-08', null, true, 'Australia', true, 'Spotify', true, true),
  ('apple-education-pricing-au', 'Apple', 'Education Pricing', 'Save on Mac, iPad, and selected Apple services.', 'shopping', 'Education pricing', 'blue', 'Ongoing', 'Varies', 'shopping', 'apple', 'Apple Education Pricing in Australia offers special pricing on eligible Mac and iPad purchases for current and newly accepted university students, parents buying for university students, and education staff.', ARRAY['Visit the Apple Education Store Australia.', 'Choose an eligible Mac or iPad.', 'Confirm education eligibility if asked.', 'Review current pricing and terms before purchase.']::text[], ARRAY['Available to current and newly accepted university students, parents buying for university students, and education staff.', 'Product eligibility and savings may vary.', 'Apple terms and quantity limits apply.']::text[], 'https://www.apple.com/au-edu/store', 'https://www.apple.com/au-edu/store', '2026-05-08', null, true, 'Australia', true, 'Apple', true, false),
  ('apple-creator-studio-student-au', 'Apple', 'Apple Creator Studio Student Plan', 'Creative apps bundle for students and educators.', 'subscriptions', 'A$4.99/mo', 'purple', 'Limited-time / may end', 'A$4.99/month', 'subscription', 'apple', 'Apple Creator Studio is offered to verified university students and educators at A$4.99 per month or A$49 per year, including creative apps such as Final Cut Pro, Logic Pro, and more.', ARRAY['Visit the Apple Education Store Australia.', 'Review Apple Creator Studio eligibility.', 'Verify student or educator status if required.', 'Start the plan if eligible.']::text[], ARRAY['New subscribers only.', 'University students and educators only.', 'Verification required.', 'Offer may end at any time.']::text[], 'https://www.apple.com/au-edu/shop/buy-mac', 'https://www.apple.com/au-edu/shop/buy-mac', '2026-05-08', null, true, 'Australia', true, 'Apple', false, false),
  ('optus-student-plan-200gb', 'Optus', 'Student Mobile Plan', '200GB for $39/month for 12 months.', 'subscriptions', '$39/mo', 'yellow', 'Until withdrawn', 'Varies', 'mobile', 'optus', 'Optus advertises a student mobile offer with 200GB for $39/month for 12 months for eligible students on a new student plan.', ARRAY['Visit the Optus Student Hub.', 'Verify student eligibility if required.', 'Review the current student plan terms.', 'Sign up only after confirming the latest offer details.']::text[], ARRAY['Australian tertiary student eligibility may be required.', 'New student plan conditions apply.', 'Offer available until withdrawn.', 'Plan inclusions and pricing may change.']::text[], 'https://www.optus.com.au/studenthub', 'https://www.optus.com.au/studenthub', '2026-05-08', null, true, 'Australia', true, 'Optus', false, false),
  ('unidays-au', 'UNiDAYS', 'Student Discounts Platform', 'Access student discounts across brands.', 'student-deals', 'Free signup', 'green', 'Ongoing', 'Varies', 'student', 'unidays', 'UNiDAYS lets eligible students verify their student status and access student discounts across brands in Australia.', ARRAY['Sign up to UNiDAYS.', 'Verify your student status.', 'Browse available brand discounts.', 'Follow each brand''s redemption instructions.']::text[], ARRAY['Student verification required.', 'Discounts vary by brand.', 'Availability changes frequently.']::text[], 'https://www.myunidays.com/AU/en-AU', 'https://www.myunidays.com/AU/en-AU', '2026-05-08', null, true, 'Australia', true, 'UNiDAYS', false, true),
  ('student-edge-au', 'Student Edge', 'Student Deals Australia', 'Student discounts, offers, and limited-time deals.', 'student-deals', 'Free access', 'green', 'Ongoing', 'Varies', 'student', 'studentedge', 'Student Edge provides Australian students access to student discounts, deals, limited-time offers, study tools, jobs, and other student resources.', ARRAY['Sign up for Student Edge.', 'Verify eligibility if required.', 'Browse student deals.', 'Follow the claim instructions for each offer.']::text[], ARRAY['Offers vary by brand and location.', 'Some offers may require verification or membership.', 'Availability changes frequently.']::text[], 'https://studentedge.org/au/deals', 'https://studentedge.org/au/deals', '2026-05-08', null, true, 'Australia', true, 'Student Edge', false, false),
  ('translink-qld-student-concession', 'Translink', 'QLD Student Concession Fares', 'Tertiary students may be eligible for concession fares.', 'travel', '50c fares', 'blue', 'Current policy', 'Varies', 'travel', 'translink', 'Translink Queensland states that tertiary students are included in concession groups and public transport fares are 50 cents per journey under the current fare policy.', ARRAY['Check your tertiary student concession eligibility.', 'Register or update your go card if needed.', 'Apply concession details through Translink or go card channels.', 'Always confirm the current fare policy before relying on it.']::text[], ARRAY['Eligibility rules apply.', 'Fare policy may change.', 'Must follow Translink go card and concession requirements.']::text[], 'https://translink.com.au/tickets-and-fares/concessions/tertiary', 'https://translink.com.au/tickets-and-fares/concessions', '2026-05-08', null, true, 'Queensland, Australia', true, 'Translink', false, false),
  ('ptv-international-student-travel-pass', 'PTV', 'International Student Travel Pass', 'Save 50% on eligible Victorian public transport passes.', 'travel', '50% off', 'blue', 'Check provider', 'Varies', 'travel', 'ptv', 'PTV''s International Student Travel Pass lets eligible international undergraduate students from participating education providers save 50% on selected public transport passes.', ARRAY['Confirm your education provider participates.', 'Visit the PTV International Student Travel Pass portal.', 'Check whether you are eligible.', 'Purchase the relevant 90-day, 180-day, or 365-day pass if eligible.']::text[], ARRAY['Participating education providers only.', 'International undergraduate student eligibility applies.', 'Pass options and savings depend on location and duration.']::text[], 'https://internationalstudent.ptv.vic.gov.au/', 'https://internationalstudent.ptv.vic.gov.au/', '2026-05-08', null, true, 'Victoria, Australia', true, 'Public Transport Victoria', false, false)
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
-- Additional Perk seed data for stable / ongoing student benefits.
-- Designed for Perk Expo app Supabase structure.
-- Re-run safely because this uses upsert on id.
-- Verified around 2026-05-11.
-- Excludes short-term offers likely to expire before 2026-06-01.

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
  ('microsoft-365-education-free', 'Microsoft', 'Microsoft 365 Education', 'Free Office apps for eligible students with school email.', 'tech', 'Free', 'blue', 'Ongoing', 'Free', 'tech', 'microsoft', 'Microsoft 365 Education gives eligible students access to Office tools such as Word, Excel, PowerPoint, OneNote, Teams, and OneDrive through a valid school email address.', ARRAY['Visit Microsoft 365 Education.', 'Enter your school email address.', 'Verify eligibility.', 'Use the web apps or install available Office apps if your institution supports it.']::text[], ARRAY['Eligible school email required.', 'Access depends on institution eligibility.', 'Eligibility may be re-verified by Microsoft.', 'Features may vary by school plan.']::text[], 'https://www.microsoft.com/en-au/education/products/office', 'https://www.microsoft.com/en-au/education/products/office', '2026-05-11', null, true, 'Australia', true, 'Microsoft', true, true),

  ('azure-for-students-100-credit', 'Microsoft Azure', 'Azure for Students', '$100 Azure cloud credit with no credit card required.', 'tech', '$100 credit', 'blue', '12-month credit', '$100', 'cloud', 'azure', 'Azure for Students gives eligible higher education students $100 in Azure credits for 12 months and selected free cloud services without requiring a credit card at sign-up.', ARRAY['Visit Azure for Students.', 'Sign in with a Microsoft account.', 'Verify student status using your school email or institution details.', 'Activate the credit and monitor usage carefully.']::text[], ARRAY['Eligible students only.', 'Credit is valid for 12 months.', 'No credit card required for the student offer.', 'Charges may apply if upgraded to paid services.']::text[], 'https://azure.microsoft.com/en-us/free/students', 'https://azure.microsoft.com/en-us/free/students', '2026-05-11', null, true, 'Global', true, 'Microsoft Azure', true, true),

  ('google-cloud-skills-credits', 'Google Cloud', 'Google Skills Credits for Students', 'Free Google Cloud learning credits and skill badges.', 'tech', '200 credits', 'blue', 'Credits expire after issue', '200 credits', 'cloud', 'googlecloud', 'Google Cloud for Education lets students request free Google Skills credits for online labs, skill badges, and cloud learning pathways.', ARRAY['Visit Google Cloud for Education Students.', 'Request Google Skills access.', 'Use the credits for labs, courses, and skill badges.', 'Track expiry after credits are issued.']::text[], ARRAY['Student access required.', 'Credits expire one year after issue.', 'Availability and eligibility may vary by region or program.', 'Google terms apply.']::text[], 'https://cloud.google.com/edu/students', 'https://cloud.google.com/edu/students', '2026-05-11', null, true, 'Global', true, 'Google Cloud', false, true),

  ('samsung-education-store-au', 'Samsung', 'Samsung Education Store', 'Student and education discounts through UNiDAYS or education email.', 'shopping', 'Education pricing', 'blue', 'Ongoing', 'Varies', 'shopping', 'samsung', 'Samsung Australia provides education store access for eligible students and education users, allowing them to access student and education discounts on selected Samsung products.', ARRAY['Visit Samsung Education Store Australia.', 'Log in using UNiDAYS or an education email.', 'Verify student or education status.', 'Browse eligible education store pricing.']::text[], ARRAY['Student or education verification required.', 'Discounts vary by product and campaign.', 'Offer availability may change.', 'Samsung terms apply.']::text[], 'https://www.samsung.com/au/offer/samsung-education-store/', 'https://www.samsung.com/au/offer/samsung-education-store/', '2026-05-11', null, true, 'Australia', true, 'Samsung', true, true),

  ('dell-student-discount-au', 'Dell', 'Dell Student Discount', 'Up to 15% off for students, teachers, and staff after verification.', 'shopping', 'Up to 15%', 'green', 'Ongoing', 'Up to 15%', 'shopping', 'dell', 'Dell Australia offers exclusive discounts for students, teachers, and staff after verification, with eligible users able to access education pricing and Dell Rewards.', ARRAY['Visit Dell Australia Student Discounts.', 'Create or sign in to a Dell account.', 'Verify student, teacher, or staff status.', 'Shop eligible products through the student discount flow.']::text[], ARRAY['Verification required.', 'Discount level may vary by product.', 'Dell Rewards and other terms may apply.', 'Not all products may be eligible.']::text[], 'https://www.dell.com/en-au/lp/students', 'https://www.dell.com/en-au/lp/students', '2026-05-11', null, true, 'Australia', true, 'Dell', false, false),

  ('qut-microsoft-365-student', 'QUT', 'QUT Microsoft 365 Access', 'QUT students can access Microsoft 365 through their student account.', 'tech', 'Free access', 'blue', 'While enrolled', 'Free', 'tech', 'qut', 'QUT provides students with access to Microsoft 365 tools for study, including Office apps and collaboration tools through student email and QUT systems.', ARRAY['Log in to your QUT student account.', 'Open QUT software or Microsoft 365 access.', 'Sign in with your QUT email.', 'Install or use Microsoft 365 tools as available.']::text[], ARRAY['QUT students only.', 'Access depends on active enrolment.', 'Availability may change according to QUT IT policy.', 'Use must follow QUT acceptable use rules.']::text[], 'https://www.qut.edu.au/study/student-life/technology', 'https://www.qut.edu.au/study/student-life/technology', '2026-05-11', null, true, 'Queensland, Australia', true, 'QUT', true, false),

  ('ibm-skillsbuild-free-learning', 'IBM', 'IBM SkillsBuild', 'Free technology courses and digital credentials.', 'tech', 'Free courses', 'blue', 'Ongoing', 'Free', 'tech', 'ibm', 'IBM SkillsBuild offers free online learning resources, technology courses, career pathways, and digital credentials for students and learners building tech skills.', ARRAY['Visit IBM SkillsBuild.', 'Create or sign in with an IBM account.', 'Choose a learning pathway or course.', 'Complete courses and earn digital credentials where available.']::text[], ARRAY['Free account required.', 'Course availability may vary.', 'Some programs may have eligibility requirements.', 'IBM terms apply.']::text[], 'https://skillsbuild.org/students', 'https://skillsbuild.org/students', '2026-05-11', null, true, 'Global', false, 'IBM', false, false),

  ('oracle-cloud-free-tier', 'Oracle', 'Oracle Cloud Free Tier', 'Always Free cloud services plus trial credits.', 'tech', 'Free tier', 'orange', 'Ongoing', 'Free tier', 'cloud', 'oracle', 'Oracle Cloud Free Tier lets learners and developers build, test, and deploy applications using Always Free cloud services, with trial credits for broader OCI services.', ARRAY['Visit Oracle Cloud Free Tier.', 'Create an Oracle Cloud account.', 'Activate Free Tier access.', 'Use Always Free services carefully and monitor usage.']::text[], ARRAY['Not student-only.', 'One free trial or Always Free account per person.', 'Trial credits may expire.', 'Paid charges may apply if upgraded or using paid resources.']::text[], 'https://www.oracle.com/anz/cloud/free/', 'https://www.oracle.com/anz/cloud/free/', '2026-05-11', null, true, 'Australia', false, 'Oracle', false, false),

  ('name-com-github-student-domain', 'Name.com', 'Free Student Domain', 'One-year domain registration through GitHub Student Developer Pack.', 'tech', 'Free domain', 'purple', '1 year', 'Free', 'tech', 'namecom', 'Name.com offers students in the GitHub Student Developer Pack a free one-year domain registration on eligible TLDs, including developer-friendly options such as .codes, .software, .engineer, .app, and .dev.', ARRAY['Get verified for GitHub Student Developer Pack.', 'Open the Name.com GitHub Students offer.', 'Log in with GitHub.', 'Choose an eligible domain extension.', 'Complete the domain registration.']::text[], ARRAY['Requires GitHub Student Developer Pack.', 'One-year registration only.', 'Eligible TLDs only.', 'Renewal fees may apply after the free period.']::text[], 'https://www.name.com/partner/github-students', 'https://www.name.com/partner/github-students', '2026-05-11', null, true, 'Global', true, 'Name.com', false, true),

  ('frontend-masters-github-student', 'Frontend Masters', '6 Months Free Frontend Masters', 'Free web development training through GitHub Student Developer Pack.', 'tech', '6 months free', 'purple', '6 months', 'Free', 'tech', 'frontendmasters', 'Frontend Masters offers six months of free access to students enrolled in the GitHub Student Developer Pack, covering JavaScript, React, TypeScript, full-stack development, and more.', ARRAY['Join GitHub Student Developer Pack.', 'Visit the Frontend Masters GitHub student page.', 'Create or sign in to a Frontend Masters account.', 'Activate six months of free access.']::text[], ARRAY['Requires GitHub Student Developer Pack.', 'Free access lasts six months.', 'Subscription may require cancellation or renewal decision after the free period.', 'Frontend Masters terms apply.']::text[], 'https://frontendmasters.com/welcome/github-student-developers/', 'https://frontendmasters.com/welcome/github-student-developers/', '2026-05-11', null, true, 'Global', true, 'Frontend Masters', false, true),

  ('educative-github-students', 'Educative', '6 Months Free Educative', 'Free access to developer courses plus subscription discount.', 'tech', '6 months free', 'blue', '6 months', '$2,000+ value', 'tech', 'educative', 'Educative offers GitHub Student Developer Pack members free access to 70+ courses for six months, plus discounts on paid subscriptions.', ARRAY['Join GitHub Student Developer Pack.', 'Visit Educative GitHub Students.', 'Create or sign in to Educative.', 'Activate student access.']::text[], ARRAY['Requires GitHub Student Developer Pack.', 'Free period is limited.', 'Course list and discounts may change.', 'Educative terms apply.']::text[], 'https://www.educative.io/github-students', 'https://www.educative.io/github-students', '2026-05-11', null, true, 'Global', true, 'Educative', false, true),

  ('translink-50-cent-fares-qld', 'Translink', 'Queensland 50 Cent Public Transport', '50 cent fares across Translink services.', 'travel', '50c fares', 'green', 'Current policy', '50c per trip', 'travel', 'translink', 'Translink Queensland states that all fares on Translink services are now 50 cents per journey, regardless of distance or payment method, making this highly useful for students in Brisbane and Queensland.', ARRAY['Use a go card, contactless card, digital wallet, or paper ticket where accepted.', 'Check service availability for your route.', 'Tap on and off correctly when required.', 'Confirm current Translink fare policy before travel.']::text[], ARRAY['Applies to Translink services under the current fare policy.', 'Policy may change.', 'Regional service rules may differ.', 'Always check Translink before relying on fare information.']::text[], 'https://translink.com.au/tickets-and-fares/concessions/tertiary', 'https://translink.com.au/tickets-and-fares/concessions/tertiary', '2026-05-11', null, true, 'Queensland, Australia', false, 'Translink', true, true),

  ('vodafone-student-plans-au', 'Vodafone', 'Vodafone Student Mobile Deals', 'Student mobile plan discounts in Australia.', 'subscriptions', 'Student deal', 'red', 'Check provider', 'Varies', 'mobile', 'vodafone', 'Vodafone Australia has a student deals page with discounted mobile plan offers for eligible students, including temporary discounted SIM-only plan pricing.', ARRAY['Visit Vodafone Australia Students.', 'Check current student offers.', 'Verify student eligibility if required.', 'Compare total monthly cost after any introductory period.']::text[], ARRAY['Offer details may change.', 'Introductory pricing may end after the stated period.', 'Student verification may be required.', 'Vodafone terms apply.']::text[], 'https://www.vodafone.com.au/students', 'https://www.vodafone.com.au/students', '2026-05-11', null, true, 'Australia', true, 'Vodafone', false, false),

  ('student-beans-au', 'Student Beans', 'Student Beans Australia', 'Student discount marketplace with app-exclusive offers.', 'student-deals', 'Free signup', 'green', 'Ongoing', 'Varies', 'student', 'studentbeans', 'Student Beans Australia is a student discount platform where verified students can access offers across shopping, health, travel, and lifestyle brands.', ARRAY['Create a Student Beans account.', 'Verify your student status.', 'Browse available Australian offers.', 'Follow each brand redemption flow.']::text[], ARRAY['Student verification required.', 'Offers vary by brand.', 'Availability changes frequently.', 'Some discounts may be app-exclusive.']::text[], 'https://www.studentbeans.com/au', 'https://www.studentbeans.com/au', '2026-05-11', null, true, 'Australia', true, 'Student Beans', false, true),

  ('autodesk-fusion-education', 'Autodesk', 'Autodesk Fusion Education Access', 'Free educational access to Autodesk design tools.', 'tech', 'Free', 'blue', 'Renewable yearly', 'Free', 'design', 'autodesk', 'Autodesk Education Access provides eligible students and educators with free educational access to Autodesk software, useful for design, engineering, architecture, and 3D modelling study.', ARRAY['Visit Autodesk Education.', 'Create or sign in to an Autodesk account.', 'Verify education eligibility.', 'Download eligible software for educational use.']::text[], ARRAY['Educational use only.', 'Eligibility verification required.', 'Access is usually renewed while eligible.', 'Commercial use is not allowed under education access.']::text[], 'https://www.autodesk.com/education/edu-software/overview', 'https://www.autodesk.com/education/edu-software/overview', '2026-05-11', null, true, 'Global', true, 'Autodesk', false, false),

  ('figma-education-free', 'Figma', 'Figma Education', 'Free design and collaboration tools for eligible students.', 'tech', 'Free', 'purple', 'Ongoing', 'Free', 'design', 'figma', 'Figma Education gives eligible students and educators free access to design and collaboration features for learning, prototyping, UI design, and class projects.', ARRAY['Create or sign in to Figma.', 'Visit Figma Education.', 'Apply with education details.', 'Verify eligibility if requested.']::text[], ARRAY['Students and educators only.', 'Verification may be required.', 'Plan features may change.', 'Figma terms apply.']::text[], 'https://www.figma.com/education/', 'https://www.figma.com/education/', '2026-05-11', null, true, 'Global', true, 'Figma', false, false),

  ('notion-education-plus', 'Notion', 'Notion Plus for Education', 'Free Plus plan for individual students and teachers.', 'tech', 'Free Plus', 'blue', 'Ongoing', 'Free', 'tech', 'notion', 'Notion offers eligible students and teachers free access to the Plus plan for individual education use, useful for notes, coursework, planning, and project tracking.', ARRAY['Sign in to Notion.', 'Use your eligible education email.', 'Open Notion for Education.', 'Upgrade or verify education access.']::text[], ARRAY['Education email required.', 'Usually applies to individual one-member workspaces.', 'Team or commercial use may not be covered.', 'Notion terms apply.']::text[], 'https://www.notion.com/product/notion-for-education', 'https://www.notion.com/help/notion-for-education', '2026-05-11', null, true, 'Global', true, 'Notion', false, false),

  ('canva-education-students', 'Canva', 'Canva for Education', 'Free education design tools for eligible users.', 'tech', 'Free', 'blue', 'Ongoing', 'Free', 'design', 'canva', 'Canva for Education provides design, presentation, and classroom tools for eligible education users, useful for student presentations, visual documents, and project materials.', ARRAY['Visit Canva for Education.', 'Create or sign in to Canva.', 'Check student or education eligibility.', 'Verify through the required flow if available.']::text[], ARRAY['Eligibility depends on education status and institution type.', 'Some access may be school-managed.', 'Feature availability may vary.', 'Canva terms apply.']::text[], 'https://www.canva.com/education/', 'https://www.canva.com/education/', '2026-05-11', null, true, 'Global', true, 'Canva', false, false),

  ('aws-educate-free-learning', 'AWS', 'AWS Educate', 'Free cloud learning and hands-on labs.', 'tech', 'Free training', 'orange', 'Ongoing', 'Free', 'tech', 'aws', 'AWS Educate gives learners access to free cloud learning content, beginner-friendly cloud resources, and hands-on labs without needing a credit card for registration.', ARRAY['Visit AWS Educate.', 'Register for an AWS Educate account.', 'Choose cloud learning pathways or labs.', 'Use free learning resources to build cloud skills.']::text[], ARRAY['AWS Educate eligibility and features may vary.', 'Some resources may have age or account requirements.', 'Separate AWS service usage can have costs outside AWS Educate.', 'AWS terms apply.']::text[], 'https://aws.amazon.com/education/awseducate/', 'https://aws.amazon.com/education/awseducate/', '2026-05-11', null, true, 'Global', true, 'AWS', false, false)
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
