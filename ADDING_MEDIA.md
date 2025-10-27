# Adding Photos, Videos & Media to Your Portfolio

This guide shows you how to replace the placeholder visuals with your actual photos, diagrams, and videos.

## 📁 Folder Structure

Create these folders in your website directory:

```
website/
├── images/
│   ├── workshop/          # Workshop photos
│   ├── builds/            # Build progress photos
│   ├── diagrams/          # System diagrams
│   ├── gear/              # Tools and equipment
│   └── screenshots/       # Dashboard screenshots
├── videos/
│   └── demos/             # Project demonstration videos
├── index.html
├── projects.html
└── ...
```

## 🖼️ Adding Images

### Step 1: Create Folders
```bash
cd /home/jovan-blango/Projects/website
mkdir -p images/{workshop,builds,diagrams,gear,screenshots}
mkdir -p videos/demos
```

### Step 2: Add Your Photos
Copy your photos into the appropriate folders:
- Workshop setup photos → `images/workshop/`
- Solar panel installation → `images/builds/`
- Wiring diagrams → `images/diagrams/`
- Tools collection → `images/gear/`
- Dashboard screenshots → `images/screenshots/`

### Step 3: Update HTML

**In `index.html` (Homepage Gallery Section):**

Find this placeholder:
```html
<div class="gallery-placeholder" style="background: linear-gradient(...); ...">
    🔧🏗️
</div>
```

Replace with:
```html
<img src="images/workshop/setup-1.jpg" alt="Workshop Setup" style="width: 100%; height: 200px; object-fit: cover; border-radius: 12px;">
```

**In `index.html` (Project Cards):**

Find:
```html
<div class="image-placeholder" style="...">
    ⚡🔆
</div>
```

Replace with:
```html
<img src="images/builds/solar-workshop.jpg" alt="Solar-Powered Workshop" style="width: 100%; height: 100%; object-fit: cover;">
```

**In `projects.html` (Detailed Projects):**

Find:
```html
<div style="background: linear-gradient(...); ... font-size: 2rem;">
    📷
</div>
```

Replace with:
```html
<img src="images/workshop/panel-install.jpg" alt="Solar Panel Installation" style="width: 100%; height: 150px; object-fit: cover; border-radius: 12px;">
```

## 🎥 Adding Videos

### For Video Demos:

Find this in the gallery section:
```html
<div class="gallery-placeholder" style="...">
    📹▶️
</div>
```

Replace with:
```html
<video controls style="width: 100%; border-radius: 12px;">
    <source src="videos/demos/automation-demo.mp4" type="video/mp4">
    Your browser doesn't support video playback.
</video>
```

### For GIF Animations:
```html
<img src="images/demos/automation.gif" alt="Automation Demo" style="width: 100%; border-radius: 12px;">
```

## 📐 Image Recommendations

### Optimal Sizes:
- **Project cards**: 800x600px (4:3 ratio)
- **Gallery images**: 1200x800px
- **Screenshots**: Original resolution (will auto-resize)
- **Diagrams**: SVG or PNG with transparent background

### File Formats:
- Photos: `.jpg` (compressed)
- Diagrams: `.png` or `.svg`
- Animations: `.gif` or `.mp4`

### Compression:
Keep images under 500KB each for fast loading:
- Use [TinyPNG](https://tinypng.com/) for compression
- Or command line: `convert input.jpg -quality 85 output.jpg`

## 🎨 Quick Tips

1. **Consistent Style**: Use similar lighting/angles for cohesive look
2. **Before/After**: Show progression of builds
3. **Close-ups**: Detail shots of wiring, components
4. **Action Shots**: Systems running, lights working
5. **Context**: Include yourself working when comfortable

## 🚀 After Adding Media

1. Test locally:
   ```bash
   ./start-server.sh
   # Open http://localhost:8000
   ```

2. Commit and push:
   ```bash
   git add images/ videos/
   git commit -m "Add workshop photos and project media"
   git push origin master
   ```

3. GitHub Pages will automatically update in ~1 minute!

## 📝 Example: Complete Replacement

**Before:**
```html
<div class="gallery-placeholder" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; height: 200px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; font-size: 3rem;">
    🔧🏗️
</div>
```

**After:**
```html
<img src="images/workshop/main-view.jpg" 
     alt="Solar-powered workshop interior showing tool benches and electrical panels" 
     style="width: 100%; height: 200px; object-fit: cover; border-radius: 12px; margin-bottom: 1rem;">
```

## 🔍 Need Help?

- Check browser console (F12) for broken image paths
- Verify file names match exactly (case-sensitive on Linux)
- Ensure images are in correct folders
- Test one image first before replacing all

---

**Remember**: Once you replace placeholders with real images, your portfolio will look even more impressive! Take your time to curate quality photos that showcase your work.
