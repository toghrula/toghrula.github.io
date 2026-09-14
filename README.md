# Toghrul Aghbabali — personal website

A single-page academic website. No build step, no frameworks, nothing to install.
Everything the visitor sees comes from one file: **`content.js`**.

```
index.html      page structure + rendering (you should never need to edit this)
style.css       colors, fonts, spacing (edit the :root block to change colors)
content.js      ALL your content — papers, education, awards, links  ← edit this
assets/
  Toghrul_Aghbabali_CV.pdf   your CV (replace with a new file, same name)
  photo.jpg                  your headshot (add this file; ~600×600px, square)
```

---

## 1. Publish it on GitHub Pages (one-time, ~10 minutes)

1. Create a free account at https://github.com if you don't have one.
2. Click **New repository**. Name it exactly `<your-username>.github.io`
   (for example `taghbabali.github.io`). Keep it **Public**. Click **Create**.
3. On the empty repository page click **uploading an existing file**, drag in
   `index.html`, `style.css`, `content.js`, `README.md` **and the `assets` folder**,
   then click **Commit changes**.
4. Wait about a minute. Your site is live at `https://<your-username>.github.io`.

That address is permanent and free. If you later want a custom domain such as
`toghrulaghbabali.com`, buy the domain (Namecheap, Cloudflare, Google Domains, …),
then in the repository go to **Settings → Pages → Custom domain**, type the domain,
and follow GitHub's short DNS instructions.

**Alternative:** Netlify Drop (https://app.netlify.com/drop) — drag the whole folder
onto the page and it's online instantly. Good for a quick preview, but GitHub is the
better long-term home because it keeps a full history of every change.

---

## 2. Updating the site over the years

Open `content.js` in any text editor (VS Code, Sublime, even TextEdit/Notepad in
plain-text mode). Each section is clearly labeled. Common tasks:

**Add a new paper** — copy one `{ ... },` block inside `papers: [ ... ]`, paste it at
the top, and change the fields. Set `ssrn` to the SSRN link once it exists, or `""` if not.
When a paper is accepted, change `status` to `"Forthcoming"` or `"Published"` and add
`journal: "Journal of Financial Economics"`. You can also add
`abstract: "..."` (shows as an expandable "Abstract" toggle) or `pdf: "assets/paper.pdf"`.

**Add a talk, award, or membership** — add one line to the matching list.

**Change your title** — when you become a candidate / go on the job market / take a
faculty job, edit `title` and `institution` at the top. When you graduate, also update
the `education` entry for the PhD (`year: "2029"`).

**Add profile links** — fill in the `url` for SSRN, Google Scholar, LinkedIn. Links with an
empty `url` are hidden automatically. You can add more, e.g.
`{ label: "GitHub", url: "https://github.com/you", icon: "github" },`.

**Update your CV** — export your CV to PDF and save it over
`assets/Toghrul_Aghbabali_CV.pdf`. Nothing else changes.

**Add your photo** — save a square headshot as `assets/photo.jpg`. If the file is
missing, the page simply hides the photo area.

Then upload the changed file(s) to GitHub: open the repository, click the file,
click the pencil icon (or **Add file → Upload files** to replace), and **Commit changes**.
The live site updates within a minute.

**Before uploading**, double-click `index.html` on your computer to preview the result.
If the page comes up blank, a comma or quote mark is probably missing in `content.js` —
check the line you just edited.

---

## 3. Changing the look

Colors and fonts live at the top of `style.css` in the `:root` block. Change `--accent`
to switch the navy to, say, UB blue (`#005bbb`), or any future institution's color.
Fonts are loaded from Google Fonts (Source Serif 4 + Inter) with system fallbacks, so
the page still looks right offline.

---

## 4. Tips for the academic job market

- Add a `pdf` field to each paper so committee members can download drafts directly.
- Fill in `abstract` for each paper — recruiters rarely click through to SSRN.
- Keep the `presentations` list current; it signals activity.
- Set `footerNote: "Last updated Month Year"` so visitors know the page is maintained.
