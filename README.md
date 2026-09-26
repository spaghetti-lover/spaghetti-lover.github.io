# Portfolio editing guide

The portfolio content lives in Markdown files. You can edit ordinary prose, headings, links, lists, images, emphasis, and—when needed—raw HTML without changing the page template.

## Edit content on GitHub

1. Open a file in `_sections/` or `_projects/` and select the pencil icon.
2. Edit the Markdown below the closing `---` line. Markdown supports links, lists, images, quotes, bold text, and headings. Raw HTML also works for custom embeds or layout.
3. Choose **Commit changes** on `main`. The **Publish portfolio** workflow rebuilds and publishes the site. Check **Actions** if an update does not appear.

### Homepage sections

- `_sections/site.md` holds the browser title, description, favicon, and name in the masthead.
- `_sections/intro.md` holds the introduction. Its header sets the portrait image and alt text.
- `_sections/news.md` and `_sections/projects.md` hold their headings and any introductory text above their content.
- `_sections/footer.md` holds the footer area.

The short block between the opening and closing `---` lines is front matter: it provides display metadata only. Preserve its indentation and keys. Everything below it is flexible Markdown/HTML content.

### Projects

Each file in `_projects/` is one project. To add one, copy an existing file and give it a new filename. Set:

- `title`: card title.
- `order`: number controlling display order; lower numbers appear first.
- `thumbnail`: optional `/assets/...` image path.
- `thumbnail_alt`: required description when `thumbnail` is set.
- `thumbnail_label`: optional label shown when there is no thumbnail.
- `favorite: true` to include it in the default favorites tab.

Write the description and links in the Markdown body. External links open in a new tab automatically. Upload new images to `assets/` through GitHub before referring to them.

### News

Each file in `_news/` is one timeline item. Copy an existing entry, set its `date`, and write the update (including any links) below the front matter. Entries are shown newest first.

Only repository accounts with write access can change or remove content. Removed content remains recoverable from Git history.

## Preview locally

```sh
bundle install
bundle exec jekyll serve
```

Open <http://127.0.0.1:4000>. Run `bundle exec jekyll build` to check the site before committing.
