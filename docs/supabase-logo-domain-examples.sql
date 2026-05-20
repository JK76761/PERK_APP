-- Bulk logo_domain updates for remote Logo.dev rendering.
-- Store only the brand domain, then let the Expo app derive https://img.logo.dev/<domain>?token=...
-- This keeps logo data lightweight and avoids hardcoding full image URLs in the database.
-- Re-run safely any time you add new perks or update provider branding.

update public.perks
set logo_domain = 'westpac.com.au'
where id = 'westpac-50-cashback';

update public.perks
set logo_domain = 'stgeorge.com.au'
where id = 'stgeorge-50-student';

update public.perks
set logo_domain = 'bankofmelbourne.com.au'
where id = 'bank-of-melbourne-50-student';

update public.perks
set logo_domain = 'banksa.com.au'
where id = 'banksa-50-student';

update public.perks
set logo_domain = 'commbank.com.au'
where id = 'commbank-40-cashback';

update public.perks
set logo_domain = 'github.com'
where id = 'github-student-developer-pack';

update public.perks
set logo_domain = 'jetbrains.com'
where id = 'jetbrains-student-pack';

update public.perks
set logo_domain = 'figma.com'
where id = 'figma-education';

update public.perks
set logo_domain = 'notion.com'
where id = 'notion-education';

update public.perks
set logo_domain = 'canva.com'
where id = 'canva-education';

update public.perks
set logo_domain = 'aws.amazon.com'
where id = 'aws-educate';

update public.perks
set logo_domain = 'adobe.com'
where id = 'adobe-creative-cloud-student-au';

update public.perks
set logo_domain = 'autodesk.com'
where id = 'autodesk-education-access';

update public.perks
set logo_domain = 'spotify.com'
where id = 'spotify-premium-student-au';

update public.perks
set logo_domain = 'apple.com'
where id = 'apple-education-pricing-au';

update public.perks
set logo_domain = 'apple.com'
where id = 'apple-creator-studio-student-au';

update public.perks
set logo_domain = 'optus.com.au'
where id = 'optus-student-plan-200gb';

update public.perks
set logo_domain = 'myunidays.com'
where id = 'unidays-au';

update public.perks
set logo_domain = 'studentedge.org'
where id = 'student-edge-au';

update public.perks
set logo_domain = 'translink.com.au'
where id = 'translink-qld-student-concession';

update public.perks
set logo_domain = 'ptv.vic.gov.au'
where id = 'ptv-international-student-travel-pass';

update public.perks
set logo_domain = 'microsoft.com'
where id = 'microsoft-365-education-free';

update public.perks
set logo_domain = 'azure.microsoft.com'
where id = 'azure-for-students-100-credit';

update public.perks
set logo_domain = 'cloud.google.com'
where id = 'google-cloud-skills-credits';

update public.perks
set logo_domain = 'samsung.com'
where id = 'samsung-education-store-au';

update public.perks
set logo_domain = 'dell.com'
where id = 'dell-student-discount-au';

update public.perks
set logo_domain = 'qut.edu.au'
where id = 'qut-microsoft-365-student';

update public.perks
set logo_domain = 'ibm.com'
where id = 'ibm-skillsbuild-free-learning';

update public.perks
set logo_domain = 'oracle.com'
where id = 'oracle-cloud-free-tier';

update public.perks
set logo_domain = 'name.com'
where id = 'name-com-github-student-domain';

update public.perks
set logo_domain = 'frontendmasters.com'
where id = 'frontend-masters-github-student';

update public.perks
set logo_domain = 'educative.io'
where id = 'educative-github-students';

update public.perks
set logo_domain = 'translink.com.au'
where id = 'translink-50-cent-fares-qld';

update public.perks
set logo_domain = 'vodafone.com.au'
where id = 'vodafone-student-plans-au';

update public.perks
set logo_domain = 'studentbeans.com'
where id = 'student-beans-au';

update public.perks
set logo_domain = 'autodesk.com'
where id = 'autodesk-fusion-education';

update public.perks
set logo_domain = 'figma.com'
where id = 'figma-education-free';

update public.perks
set logo_domain = 'notion.com'
where id = 'notion-education-plus';

update public.perks
set logo_domain = 'canva.com'
where id = 'canva-education-students';

update public.perks
set logo_domain = 'aws.amazon.com'
where id = 'aws-educate-free-learning';

update public.perks
set logo_domain = 'toogoodtogo.com'
where id = 'too-good-to-go-au';

update public.perks
set logo_domain = 'eatclub.com.au'
where id = 'eatclub-dining-deals-au';

update public.perks
set logo_domain = 'firsttable.com.au'
where id = 'first-table-half-price-dining-au';

update public.perks
set logo_domain = 'shopback.com.au'
where id = 'shopback-au-cashback';

update public.perks
set logo_domain = 'wise.com'
where id = 'wise-student-money-abroad';

update public.perks
set logo_domain = 'miro.com'
where id = 'miro-education-plan';

update public.perks
set logo_domain = 'google.com'
where id = 'notebooklm-free-ai-study';

update public.perks
set logo_domain = 'google.com'
where id = 'google-ai-pro-student-au';

update public.perks
set logo_domain = 'tableau.com'
where id = 'tableau-for-students';

update public.perks
set logo_domain = 'youtube.com'
where id = 'youtube-premium-student-au';

update public.perks
set logo_domain = 'prolific.com'
where id = 'prolific-paid-research';

update public.perks
set logo_domain = 'askable.com'
where id = 'askable-paid-research';

update public.perks
set logo_domain = 'respondent.io'
where id = 'respondent-paid-research';

update public.perks
set logo_domain = 'octopusgroup.com.au'
where id = 'octopus-group-paid-surveys-au';

update public.perks
set logo_domain = 'flybuys.com.au'
where id = 'flybuys-rewards-au';

update public.perks
set logo_domain = 'everydayrewards.com.au'
where id = 'everyday-rewards-au';

update public.perks
set logo_domain = 'onepass.com.au'
where id = 'onepass-membership-au';

update public.perks
set logo_domain = 'coles.com.au'
where id = 'coles-plus-saver-au';

update public.perks
set logo_domain = '7eleven.com.au'
where id = 'my-7-eleven-fuel-lock-au';

update public.perks
set logo_domain = 'bp.com'
where id = 'bpme-bp-rewards-au';

update public.perks
set logo_domain = 'ampol.com.au'
where id = 'ampol-everyday-rewards-au';

update public.perks
set logo_domain = 'mcdonalds.com.au'
where id = 'mymaccas-rewards-au';

update public.perks
set logo_domain = 'uber.com'
where id = 'uber-one-students-au';

update public.perks
set logo_domain = 'bunnings.com.au'
where id = 'bunnings-powerpass-apprentice-au';
