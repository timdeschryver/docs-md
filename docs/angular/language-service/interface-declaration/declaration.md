---
kind: InterfaceDeclaration
name: Declaration
module: language-service
---

# Declaration

## description

Information about the component declarations.

A file might contain a declaration without a template because the file contains only
templateUrl references. However, the component declaration might contain errors that
need to be reported such as the template string is missing or the component is not
declared in a module. These error should be reported on the declaration, not the
template.

A host type; see `LanguageServiceHost`.

```ts
interface Declaration {
  readonly type: StaticSymbol;
  readonly declarationSpan: Span;
  readonly metadata: CompileDirectiveMetadata;
  readonly errors: DeclarationError[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/types.ts#L90-L111)

## publicApi

## Properties

| Name            | Type                 | Description                                                                           |
| --------------- | -------------------- | ------------------------------------------------------------------------------------- |
| type            | `any`                | The static symbol of the compponent being declared.                                   |
| declarationSpan | `Span`               | The span of the declaration annotation reference (e.g. the 'Component' or 'Directive' |
| reference).     |
| metadata        | `any`                | Reference to the compiler directive metadata for the declaration.                     |
| errors          | `DeclarationError[]` | Error reported trying to get the metadata.                                            |
