# Dr. Arjun Verma — Static Vercel Build

This version contains **no PHP** and requires no server runtime. It is designed to be deployed directly to Vercel as a static site.

## Deploy
1. Upload the contents of this folder to a GitHub repository.
2. In Vercel, import the repository.
3. Framework Preset: **Other** (or leave automatic).
4. Build Command: **None / empty**.
5. Output Directory: **`.`**.
6. Deploy.

The site uses folder-based `index.html` routes, so links such as `/about/`, `/services/robotic-surgery/`, `/blog/recovery-guide/` work without PHP.

## Deliberate QA decisions
- No PHP files.
- No WordPress.
- No screenshots of forms or website UI used as content imagery.
- Exact supplied Dr. Arjun Verma Clinic logo is retained.
- No fabricated doctor credentials, hospital affiliations, phone numbers, addresses, star ratings, patient names or testimonials.
- Reviews page uses an honest patient-experience framework rather than invented testimonials.
- Contact form is explicitly front-end-only so it cannot silently fail through a missing PHP mail backend. Connect it to the practice's preferred form provider before production launch.
- Responsive navigation, speciality dropdown, media dropdown, hero slider, scroll reveals, counters, FAQ accordions, sticky header, scroll progress, back-to-top and reduced-motion support are included.
- Images are real medical/clinical imagery referenced from Unsplash. A CSS fallback background remains visible if an external image is unavailable.

## Important
Replace the Vercel project URL in `robots.txt` and `sitemap.xml` if the final deployment URL changes.
