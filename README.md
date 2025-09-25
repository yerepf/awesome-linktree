# Awesome Linktree

This repository lets you create your own Linktree-style links page using Markdown files, making it easy to personalize and manage your links. Below you'll find steps for forking the repo, prerequisites, setup, and how to add your own links and icons.

---

## 1. Fork the Repository

Click the **Fork** button at the top right of this page to create a copy of this repository in your GitHub account.

---

## 2. Prerequisites

- A GitHub account.
- Basic knowledge of editing Markdown (`.md`) files.
- Optional: Know how to deploy with GitHub Pages to publish your Linktree.

---

## 3. Initial Setup

### a. Clone your Fork

```bash
git clone https://github.com/your-username/awesome-linktree.git
cd awesome-linktree
```

### b. Personalize your Information

1. **Edit the `content/persona;/you.md` file**  
   This file is your presentation card. Add your name, a short bio, photo, etc. Open it and replace the sample data with your own.

2. **Add your Links**

   - For each link, create a new `.md` file in `content/links` based on the `link-template.md` file.
   - Rename your file meaningfully (for example: `github.md`, `twitter.md`, etc).
   - Fill in the template fields with your link information: title, URL, description, and icon.

   **Example:**
   ```markdown
   ---
   title: GitHub
   url: https://github.com/your-username
   icon: mdi:github
   description: Follow me on GitHub!
   ---
   ```

---

## 4. Adding Icons

Icons are taken from [Iconify - Material Design Icons](https://icon-sets.iconify.design/mdi/).

- Search for the icon you want to use.
- Copy the icon name (for example, `mdi:twitter`).
- Paste that name into the `icon` field in your `.md` file.

---

## 5. Publish your Linktree (Optional)

If you want to publish your Linktree, you can use **GitHub Pages**:

1. Go to your repository settings (`Settings > Pages`).
2. Select the main branch and the `/root` or `/docs` folder depending on your setup.
3. Done! Your Linktree will be online at your GitHub Pages URL.

---

## 6. Credits

Icons by [Iconify](https://icon-sets.iconify.design/mdi/).

---

Personalize, share, and grow your own link tree!