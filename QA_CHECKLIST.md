# Dr. Arjun Verma — Complete Website Release QA Checklist

## 0. Release rule
- [x] This package is the full multi-page PHP website, not a single-page demo.
- [x] The supplied Dr. Arjun Verma Clinic logo is used as the canonical brand asset.
- [x] No earlier generic logo is used as the visible brand mark.
- [x] The package is intended to be run as a PHP website, not opened as a static HTML file.

## 1. Brand identity
- [x] Exact supplied Dr. Arjun Verma Clinic logo copied into `assets/images/arjun-verma-clinic-logo.png`.
- [x] Supplied logo SHA-256 verified against source asset.
- [x] Header uses exact supplied logo.
- [x] Footer uses exact supplied logo.
- [x] Loader uses exact supplied logo.
- [x] Favicon uses exact supplied logo.
- [x] Mobile header uses exact supplied logo.
- [x] No generic AV replacement logo used in header/footer.
- [x] Doctor name consistently rendered as Dr. Arjun Verma.
- [x] Ramkishan Nag identity removed from project PHP/CSS/JS.

## 2. Primary pages
- [x] Home (`index.php`).
- [x] About (`about.php`).
- [x] Specialities (`services.php`).
- [x] Locations (`locations.php`).
- [x] Reviews (`reviews.php`).
- [x] Blogs / Insights (`blogs.php`).
- [x] Contact (`contact.php`).

## 3. Speciality architecture
- [x] Specialities dropdown exists on every page.
- [x] Dropdown contains exactly 14 speciality destinations.
- [x] Breast Cancer Surgery.
- [x] Gastrointestinal & Hepatobiliary Cancer Surgery.
- [x] Thoracic Cancer Surgery.
- [x] Ovarian Cancer Surgery.
- [x] Gynecologic Cancer Surgery.
- [x] Head & Neck Cancer Surgery.
- [x] Colorectal Cancer Surgery.
- [x] Pancreatic Cancer Surgery.
- [x] Laparoscopic Cancer Surgery.
- [x] Robotic Cancer Surgery.
- [x] Palliative Surgery.
- [x] Port Insertion & Day-Care Oncology Procedures.
- [x] Reconstructive & Microvascular Surgery.
- [x] Sarcoma & Peritoneal Surface Malignancy Management (HIPEC/PIPAC).
- [x] Each speciality has its own PHP URL.
- [x] Each speciality page has unique title/content.
- [x] Each speciality page has FAQ content.
- [x] Each speciality page has CTA back to consultation.
- [x] Each speciality page loads shared header/footer.
- [x] Each speciality page loads CSS correctly.
- [x] Each speciality page loads JS correctly.

## 4. Blog architecture
- [x] Blog index.
- [x] Consultation guide article.
- [x] Minimally invasive article.
- [x] Recovery guide article.
- [x] Article-to-contact CTAs.
- [x] Article-to-home navigation.
- [x] Blog cards link to real PHP destinations.

## 5. Media architecture
- [x] Clinic Gallery page.
- [x] Photos page.
- [x] Videos page.
- [x] Media dropdown on desktop.
- [x] Media dropdown on mobile.
- [x] Media links work from nested pages.

## 6. Header / navigation
- [x] Top information bar.
- [x] Branded header.
- [x] Home link.
- [x] About link.
- [x] Specialities dropdown.
- [x] Locations link.
- [x] Reviews link.
- [x] Insights/Blogs link.
- [x] Media dropdown.
- [x] Contact link.
- [x] Book Consultation CTA.
- [x] Header remains usable while scrolling.
- [x] Desktop dropdown opens on interaction.
- [x] Dropdown closes correctly.
- [x] Click-outside closes dropdown.
- [x] Escape closes dropdown.
- [x] `aria-expanded` state updates.
- [x] Mobile menu opens.
- [x] Mobile menu closes.
- [x] Mobile speciality accordion works.
- [x] Mobile media accordion works.
- [x] Navigation is keyboard accessible.
- [x] Skip-to-content link exists.

## 7. Homepage sections
- [x] Hero section.
- [x] Hero slide 1.
- [x] Hero slide 2.
- [x] Hero slide 3.
- [x] Hero autoplay.
- [x] Hero previous/next controls.
- [x] Hero dots.
- [x] Hero pause-on-hover behavior.
- [x] Hero content entrance animation.
- [x] Trust/credibility strip.
- [x] Moving speciality marquee.
- [x] Doctor/practice section.
- [x] 14 speciality cards.
- [x] Premium CTA band.
- [x] Why-choose section.
- [x] Consultation section.
- [x] Statistics/counters.
- [x] Health journal/blog section.
- [x] Patient feedback section.
- [x] Premium footer.
- [x] Floating consultation control.
- [x] Back-to-top control.

## 8. Animation system
- [x] Page loading transition.
- [x] Scroll progress indicator.
- [x] IntersectionObserver reveal system.
- [x] Fade-up reveals.
- [x] Directional reveals.
- [x] Staggered card reveals.
- [x] Hero transitions.
- [x] Counter animation.
- [x] Card hover motion.
- [x] Image hover zoom.
- [x] Dropdown animation.
- [x] Mobile menu animation.
- [x] FAQ accordion animation.
- [x] Marquee animation.
- [x] Floating CTA motion.
- [x] Back-to-top transition.
- [x] Reduced-motion fallback.
- [x] No animation requires a JS animation library.

## 9. Image / visual system
- [x] Exact supplied logo asset.
- [x] Hero medical image.
- [x] Doctor/practice image.
- [x] Service visual treatment.
- [x] Consultation visual.
- [x] Why-choose visual.
- [x] Blog visual treatment.
- [x] Review visual treatment.
- [x] Local visual assets included for major sections.
- [x] Below-fold images use lazy loading where appropriate.
- [x] Images use async decoding where appropriate.
- [x] Image `alt` text is supplied for content images.
- [x] Hero image is preloaded.
- [x] No generic blue circular service placeholders.

## 10. Responsive behavior
- [x] Desktop layout.
- [x] Laptop layout.
- [x] Tablet layout.
- [x] Mobile layout.
- [x] Mobile header.
- [x] Mobile hero.
- [x] Mobile service cards.
- [x] Mobile forms.
- [x] Mobile dropdowns.
- [x] Mobile footer.
- [x] No intentional horizontal overflow.
- [x] Touch-friendly controls.
- [x] Buttons remain tappable at mobile widths.

## 11. Performance engineering
- [x] Deferred JavaScript.
- [x] IntersectionObserver instead of continuous reveal polling.
- [x] Passive scroll listener.
- [x] `requestAnimationFrame` for scroll progress/counters.
- [x] Lazy loading below-fold images.
- [x] Async image decoding.
- [x] Hero preload.
- [x] No WordPress runtime.
- [x] No WordPress plugins.
- [x] No React/Vite runtime required.
- [x] No unnecessary animation framework dependency.
- [x] Shared PHP header/footer reduces duplicated markup.
- [x] Shared speciality data reduces duplicated content logic.

## 12. Accessibility
- [x] Semantic HTML landmarks.
- [x] Skip link.
- [x] Navigation labels.
- [x] Button labels.
- [x] `aria-expanded` for menus.
- [x] `aria-controls` for mobile navigation.
- [x] `aria-current` for hero dots.
- [x] Meaningful image alt text.
- [x] Reduced-motion support.
- [x] Keyboard-oriented menu controls.
- [x] Focus-visible styling included.

## 13. Forms / security
- [x] Server-side request validation.
- [x] CSRF token generation.
- [x] CSRF validation.
- [x] Invalid CSRF requests rejected.
- [x] POST-only handling for form submission.
- [x] Email field validation.
- [x] Required-field validation.
- [x] Output escaping used for rendered user-controlled values.
- [x] No database credentials included.
- [x] No API secrets included.

## 14. SEO foundation
- [x] Page titles.
- [x] Meta descriptions.
- [x] Robots meta.
- [x] Semantic heading hierarchy.
- [x] Sitemap file included.
- [x] Robots file included.
- [ ] Production canonical domain must be inserted once the client's final domain is known.
- [ ] Production sitemap URL must be inserted once the client's final domain is known.
- [ ] Google Search Console submission is a deployment task.

## 15. Content integrity
- [x] No Ramkishan Nag personal identity copied into PHP/CSS/JS.
- [x] No Ramkishan-specific patient testimonials copied.
- [x] No invented qualifications.
- [x] No invented hospital affiliations.
- [x] No invented phone number.
- [x] No invented email address.
- [x] No fake patient names presented as real patients.
- [x] Client-specific factual fields are clearly isolated for replacement.

## 16. Route QA
- [x] Main route tested.
- [x] About route tested.
- [x] Services route tested.
- [x] Locations route tested.
- [x] Reviews route tested.
- [x] Blogs route tested.
- [x] Contact route tested.
- [x] Gallery route tested.
- [x] Photos route tested.
- [x] Videos route tested.
- [x] All 14 speciality routes tested.
- [x] All 3 blog article routes tested.
- [x] 27/27 audited routes returned HTTP 200 in local QA.

## 17. Code QA
- [x] PHP syntax checked.
- [x] Shared includes load.
- [x] Shared data loads.
- [x] Relative asset paths work on nested pages.
- [x] Relative navigation paths work on nested pages.
- [x] JS/CSS assets resolve on nested pages.
- [x] No missing required local image assets.
- [x] ZIP opens successfully.
- [x] 32 PHP files included.

## 18. Brand asset verification
- [x] Supplied logo source and packaged logo SHA-256 match.
- [x] Packaged logo file is not a regenerated substitute.
- [x] Header points to exact packaged logo.
- [x] Footer points to exact packaged logo.
- [x] Loader points to exact packaged logo.
- [x] Favicon points to exact packaged logo.

## 19. Pre-production tasks that cannot be invented
- [ ] Insert verified Dr. Arjun Verma qualifications.
- [ ] Insert verified hospital/clinic affiliations.
- [ ] Insert verified consultation locations.
- [ ] Insert verified phone number.
- [ ] Insert verified email address.
- [ ] Insert verified WhatsApp number if used.
- [ ] Insert verified social URLs.
- [ ] Insert authorized doctor photographs if the supplied prototype uses specific photographs.
- [ ] Insert authorized patient testimonials.
- [ ] Insert final production domain.
- [ ] Update sitemap to final domain.
- [ ] Add final canonical URLs.
- [ ] Configure production mail delivery.
- [ ] Configure spam protection/rate limiting for production forms.
- [ ] Run final Lighthouse/PageSpeed audit after production assets are finalized.

## 20. Release decision
The build is considered structurally ready for local review only when all checked items above remain green. Client-specific facts and production-domain tasks must be completed before public launch.
