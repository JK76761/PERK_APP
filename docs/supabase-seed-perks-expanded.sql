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
