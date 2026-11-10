# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static website for the discipleship program ("Programa de discipulado") of Comunidad Cristiana Laguna Larga, published at `https://discipulado.ccll.com.ar/`. Plain HTML + one shared CSS file + one shared JS file. There is no build step, package manager, linter, or test suite — edit the HTML files directly and open them in a browser (or serve the folder, e.g. `python3 -m http.server`) to preview.

All content is in Spanish, written in Rioplatense voseo ("Realizá", "podés", "Creá"). Keep that register when writing or editing lesson text.

## Structure

- `index.html` — landing page and the **Temario** (syllabus). Every lesson is reached from here. Items without a link are planned lessons not yet written; some linked items point to files that don't exist yet (e.g. `bautismo.html`, `leccion-09.html`, `apologetica.html`, `predicacion-expositiva.html`).
- One HTML file per lesson at the repo root. Older lessons use numbered names (`leccion-01.html`, `intro-1.html`); newer ones use descriptive kebab-case slugs (`santificacion.html`, `iglesia-local.html`). New lessons should use descriptive slugs.
- `style.css` — the only stylesheet; green palette from coolors (link in the file header). Reuse its classes rather than adding inline styles.
- `scripts.js` — only configures and loads Logos RefTagger (Spanish, `NBLH` version), which auto-links Bible references inside `p`, `blockquote`, `cite`, `li`. Add class `no-reftagger` to an element to suppress tagging.
- `imagenes/` (logo, favicon), `videos/` (`videos/` is gitignored).

## Adding a new lesson (the usual task)

Recent commits each add one lesson file plus its link in `index.html`. To add one:

1. Copy the structure of a recent lesson (e.g. `oracion.html`, `santificacion.html`) — the `<head>` boilerplate, `<header>` with logo, `<footer>`, and `<script src="scripts.js">` must be identical.
2. Update the `<head>` metadata for the new page: `description`, `og:url`, `og:title`, `og:description`, `twitter:url`, `twitter:title`, `twitter:description`, and `<title>`. The `og:url`/`twitter:url` must use the page's own filename.
3. Put all content between the `<!-- Inicio contenido ¡Todo va aquí dentro! -->` and `<!-- Fin contenido -->` comments inside `.contenedor-material`.
4. Link the page from the Temario in `index.html` (replacing the plain-text placeholder item if one exists).

Standard doctrinal lesson layout, in order, separated by `<hr />`:

- `<h1>` title, optionally followed by a key-verse `<blockquote>` with `<cite>` (reference + version, e.g. `NVI`).
- The line: `Este estudio es parte del <a href="index.html">Programa de Discipulado</a> de Comunidad Cristiana Laguna Larga.`
- `<h2>Contenido</h2>` — list of the sections.
- `<h2>Desarrollo</h2>` — body, with `<h3>` per section (`<section id="...">` + anchor links in Contenido when the lesson is long).
- `<h2>Llamado al evangelio</h2>` — short gospel invitation tied to the topic, ending with a link to `https://discipulado.ccll.com.ar/evangelio.html`.
- `<h2>Tareas recomendadas</h2>` — `<div class="tareas">` containing one `<section class="tarea">` per task (videos use `<iframe class="videos">`).

Bible quotations go in `<blockquote>` with a trailing `<cite>`. External links use `target="_blank" rel="noopener noreferrer"`.
