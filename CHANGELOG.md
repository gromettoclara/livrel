# Changelog

## 4.9.3 — 2026-01-30

* Prevent late sidenotes to overflow on footer

## 4.9.2 — 2026-01-23

* Enrich titles metadata for Part too

## 4.9.1 — 2026-01-22

* Do not allow autoplay on video players by default

## 4.9.0 — 2026-01-22

* Enrich titles etc metadata for Book and Chapter

## 4.8.1 — 2025-12-11

* Loop over many locales to find the available one
* Improved documentation

## 4.8.0 — 2025-10-23

* Activate search for generation from Stylo corpus

## 4.7.0 — 2025-10-06

* Setup search by default on `init` command
* Make bib files optionnal

## 4.6.0 — 2025-09-30

* Specifically escape `!contenuadd(foo)` content only

## 4.5.0 — 2025-09-26

* Optional templates_folder option on build command

## 4.4.0 — 2025-09-10

* Switch from `title_h` to `title_f` when generating markdown (and then PDF) titles
* Update templates to improve robustness and reference correct variables

## 4.3.0 — 2025-09-08

* Make `pdfurl`, `epuburl` and `luluurl` available
* Ability to define a custom PDF source path in `book.toml` as `media.pdf_path`
  which is copied to the `pdfurl` target

## 4.2.0 — 2025-07-02

* Add `url_publisher` book setting to define custom book's homepage (default `/`) (see !13)
* Add `productor`, `productor_num` and `diffusor` for the homepage (see !12)
* Deal with single/multiple authors in the homepage (see !14)
* Fix uppercased ISBN

## 4.1.0 — 2025-06-23

* Update default `homepage.html` with dynamic metadata (see #62)
* Add CSS classes to the default `homepage.html` (see #62)
* Ability to pass a `--csl-path` parameter to `build` (see #50)

## 4.0.2 — 2025-05-28

* Add `proposed by` in video template
* Fallback to idreference for idref in termes enrichis
* Supress citeproc errors by removing keys from model
* Remove `!contenuAdd` from search index

## 4.0.1 — 2025-05-10

* Fix signature of prepare_chapter_markdown (see #60)

## 4.0.0 — 2025-05-08

* Implement search feature + JSON index file

## 3.8.0 — 2025-05-01

* Set the ability to exclude chapters from PDF export

## 3.7.4 — 2025-04-22

* Deal with chapters vs. parts in tex/pdf exports

## 3.7.3 — 2025-04-16

* Explicitely set the lang as metadata for Pandoc

## 3.7.2 — 2025-04-08

* Fix link to prev/next article in footer navigation

## 3.7.1 — 2025-04-02

* Mention Pressoir (+version) as the HTML generator

## 3.7.0 — 2025-04-02

* Optional link to a Zotero collection in references

## 3.6.6 — 2025-04-01

* Deal with inline references

## 3.6.5 — 2025-04-01

* More robust handling of complex references

## 3.6.4 — 2025-03-31

* Add `nbpages` to Book to generate the homepage

## 3.6.3 — 2025-03-31

* Deal with complex / multiple citations

## 3.6.2 — 2025-03-24

* Stop the Stylo export process if no override allowed

## 3.6.1 — 2025-03-24

* Document continuous integration with Gitlab

## 3.6.0 — 2025-03-13

* Support optional translators per chapters
* Give full room to code content not only for docs

## 3.5.0 — 2025-03-13

* Add `--keep-metadata` and `--keep-statics` options

## 3.4.1 — 2025-03-12

* (re)Fix an issue with `target_path` parameter not converted to Python’s Path

## 3.4.0 — 2025-03-12

* Deal with corpus metadata from Stylo
* Deal with contenus add from Stylo corpus contents
* Set correct options/args for PDF conversion
* Fix an issue with `target_path` parameter not converted to Python’s Path

## 3.3.1 — 2025-02-11

* Do not try to copy `img` if not present in collection

## 3.3.0 — 2025-02-01

* First step toward a book generation from Stylo

## 3.2.0 — 2025-01-21

* Better implementation of PDF exports with bibliography and references

## 3.1.0 — 2025-01-17

* Basic implementation of PDF exports

## 3.0.2 — 2025-01-11

* Fixes link to the first chapter from the homepage
* Hides ISBN from the homepage if not present in `livre.yaml`
* Fixes some HTML rendering within the documentation

## 3.0.1 — 2024-12-10

* Fixes the rendering of `code > pre` within additional contents

## 3.0.0 — 2024-12-10

* Rename the package from pressoir-cli to pressoir


## 2.2.5 — 2024-11-19

* Deal with dynamic indexes defined in `book.toml`
* Link to first chapter of the book from homepage
* Fix homepage title html tag content

## 2.2.4 — 2024-11-10

* Default blank collection for init
* Homepage is not generated if source does not exists

## 2.2.3 — 2024-09-16

* Rename couv image for docs

## 2.2.2 — 2024-09-16

* Cast a Python Path explicitely

## 2.2.1 — 2024-09-16

* Explicit target for docs generation

## 2.2.0 — 2024-09-16

* Generate a homepage when building a book

## 2.1.0 — 2024-09-16

* Generate documentation using Pressoir itself
* Do not cite directors if no collective book
* Transform citations, even out of contenus add

## 2.0.1 — 2024-03-14

* Use relative URLs for book’s navigation

## 2.0.0 — 2024-03-13

* Evolution of source YAML files format to avoid redudancies in keys
* Better empty book shell for demo purpose
* Huge refactor of internals to speed up book’s generation

## 1.6.0 — 2024-02-21

* Ability to modify chevron-related SVG colors

## 1.5.0 — 2024-02-21

* Ability to set glossaire settings for label/title

## 1.4.0 — 2024-02-07

* Better targeting of color replacemens in CSS+SVG
* Dynamically use indexes from book.toml in JS

## 1.3.0 — 2024-02-06

* Allow to display pressoir-cli’s current version

## 1.2.0 — 2024-02-06

* Automatize colors replacement for theme
* Hide the block for translation if there is none

## 1.1.0 — 2024-01-31

* Make the `repository` parameter optional

## 1.0.0 — 2024-01-18

* Extract code from the previous Pressoir to make a standalone script
