# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Before exploring, read these

- **`GLOSSARY.md`** at the repo root.
- **`docs/adr/`**: read ADRs that touch the area you're about to work in.

If these files don't exist, **proceed silently**. Don't suggest creating them upfront. The `/domain-modeling` skill creates them when terms or decisions get resolved.

## File structure

This is a single-context repo. Domain docs belong at the root:

- `GLOSSARY.md` for domain vocabulary
- `docs/adr/` for architectural decisions

## Use the glossary's vocabulary

When your output names a domain concept, use the term defined in `GLOSSARY.md`. Don't use synonyms the glossary explicitly avoids.

If a needed concept isn't in the glossary, reconsider the term or note the gap for `/domain-modeling`.

## Flag ADR conflicts

If your output contradicts an existing ADR, surface the conflict explicitly rather than silently overriding it.
