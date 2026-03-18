# TODOS

## About page content
**What:** Write the bio and story for `/about`.
**Why:** The About page is currently an empty placeholder — visitors who want to learn more about you hit a blank page, which undermines the site's purpose.
**Pros:** Completes the site's core value proposition; gives context to the projects list.
**Cons:** Requires the author's time to draft; no code changes needed, just content.
**Context:** `src/pages/about.astro` has `class="prose text-muted"` with an empty `<p>` and a comment `<!-- Write your story here. -->`. The `@tailwindcss/typography` plugin will be wired in as part of the current PR, so prose styling will work once content is added.
**Depends on:** `@tailwindcss/typography` plugin (being added in current PR).
