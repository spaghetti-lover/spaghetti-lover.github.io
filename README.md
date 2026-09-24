# Portfolio editing guide

The public portfolio is generated from [`_data/portfolio.yml`](_data/portfolio.yml). The page layout is in `index.html`; most updates only require editing the YAML file.

## Update content on GitHub

1. Open `_data/portfolio.yml` in this repository and select the pencil icon.
2. Change a value while preserving indentation. Put quotes around text containing `:` or `#`.
3. To add a project, copy one complete entry under `projects.items`. Keep the two-space indentation and the leading `-` for each item. The file order is the display order. Remove an entry to take it off the live site.
4. Choose **Commit changes** on the `main` branch. The **Publish portfolio** workflow will rebuild and publish the site after the commit. Check the **Actions** tab if the update does not appear.

For a new image, upload it to `assets/` through GitHub, then use `/assets/filename.ext` as the `path` in the content file. For a project without an image, set `media.type` to `text` and provide `media.label`. For an image, set `media.type` to `image` and provide `media.path` and `media.alt`. The existing project entries show both forms.

Only repository accounts with write access can change or remove content. Do not add collaborators with write access if you want exclusive control. Removed content remains recoverable from Git history.

## Preview locally

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open <http://127.0.0.1:4000>. Run `bundle exec jekyll build` to check that the site builds before committing.
