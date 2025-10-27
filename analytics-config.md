# Analytics Configuration Guide

This website includes privacy-focused analytics setup ready for deployment.

## Recommended Analytics Solutions

### 1. **Plausible Analytics** (Recommended)
- **Privacy-Focused:** No cookies, GDPR compliant
- **Lightweight:** < 1KB script size
- **Open Source:** Self-hostable or cloud-hosted
- **Setup:**
  1. Sign up at https://plausible.io
  2. Add your domain
  3. Uncomment the script tag in `index.html` and `projects.html`
  4. Replace `yourdomain.com` with your actual domain

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

### 2. **Fathom Analytics**
- Privacy-first, cookie-free
- Beautiful dashboard
- Paid service (starting at $14/month)
- Setup: https://usefathom.com

### 3. **Self-Hosted Matomo**
- Complete control over your data
- Free and open source
- Requires server infrastructure
- Setup: https://matomo.org

### 4. **Simple Analytics**
- Privacy-first alternative
- Clean interface
- EU-based servers
- Setup: https://simpleanalytics.com

## Custom Event Tracking

The website includes built-in event tracking for:
- **Contact Form Submissions**: Tracks when users submit the contact form
- **Project Views**: Monitors which projects get the most attention
- **Navigation**: Tracks smooth scroll interactions
- **External Links**: Monitors clicks to social profiles

### Custom Event Examples

```javascript
// Track project views
window.plausible('Project View', {props: {project: 'Solar Workshop'}});

// Track contact form submissions
window.plausible('Contact Form', {props: {method: 'Email'}});

// Track external link clicks
window.plausible('External Link', {props: {destination: 'LinkedIn'}});
```

## Implementation Status

✅ Analytics script placeholder added to HTML
✅ Custom event tracking integrated in `script.js`
✅ Privacy-compliant (no cookies, no personal data collection)
⏸️ **Waiting for domain deployment** to activate

## Activation Checklist

- [ ] Choose analytics provider (Plausible recommended)
- [ ] Sign up and add your domain
- [ ] Uncomment analytics script in `index.html`
- [ ] Replace `yourdomain.com` with actual domain
- [ ] Uncomment analytics script in `projects.html`
- [ ] Test analytics are working (check dashboard after deployment)
- [ ] Add privacy policy page (optional but recommended)

## Privacy Considerations

All recommended solutions are:
- ✅ Cookie-free (no consent banners needed)
- ✅ GDPR, CCPA, PECR compliant
- ✅ No personal data collection
- ✅ No cross-site tracking
- ✅ Lightweight and fast

## Alternative: Google Analytics 4 (GA4)

If you prefer Google Analytics:
1. Requires cookie consent banner
2. More complex privacy implications
3. Heavier script (larger performance impact)
4. Not recommended for privacy-conscious users

**Script:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Cost Comparison

| Provider | Cost | Privacy | Setup Difficulty |
|----------|------|---------|------------------|
| Plausible | $9/mo | ⭐⭐⭐⭐⭐ | Easy |
| Fathom | $14/mo | ⭐⭐⭐⭐⭐ | Easy |
| Simple Analytics | €19/mo | ⭐⭐⭐⭐⭐ | Easy |
| Matomo (Self-hosted) | Free | ⭐⭐⭐⭐⭐ | Medium |
| Google Analytics | Free | ⭐⭐ | Easy |

## Next Steps

Once you deploy the website to a domain:
1. Activate your chosen analytics solution
2. Monitor traffic and user behavior
3. Use insights to improve content and UX
4. Track goal conversions (contact form submissions, project views)
