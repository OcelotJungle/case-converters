# @ocelotjungle/case-converters
This package contains tools for changing casing.

---

## Tools

### Strategies
Each strategy encapsulates specific casing.
Strategy can:
- `parse` string to tokens
- `join` tokens to string

List of available strategies (name - casing example = tokens):
1. `Snake` - `snake_case_42` = [snake, case, 42]
2. `Const` - `CONST_CASE_42` = [CONST, CASE, 42]
3. `Kebab` - `kebab-case-42` = [kebab, case, 42]
5. `Camel` - `camelCase42` = [camel, Case, 42]
6. `Pascal` - `PascalCase42` = [Pascal, Case, 42]
7. `Unknown` - `foo_BarBaz42-buzz` = [foo, Bar, Baz, 42, buzz]

### Strategy Factory
Creates Strategy based on passed strategy name.
Throws Error on unexisting strategy.

### `CaseTransformer`
Encapsulates casing-to-casing transformation.

### Deep Transform Factory
Performs deep casing transform in passed object.
Supports:
- ignore predicate: if true, then string won't be transformed;
- type of result;

### Deep Transform Method
Uses factory to deep transform, but in single-use way.
Also supports ignore predicate and result type.

### Presets
They are functions with preconfigured transformers.
Imported from `@ocelotjungle/case-converters/presets`
