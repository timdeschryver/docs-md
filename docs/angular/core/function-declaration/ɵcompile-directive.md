---
kind: FunctionDeclaration
name: ɵcompileDirective
module: core
---

# ɵcompileDirective

## description

Compile an Angular directive according to its decorator metadata, and patch the resulting
directive def onto the component type.

In the event that compilation is not immediate, `compileDirective` will return a `Promise` which
will resolve when compilation completes and the directive becomes usable.

```ts
function compileDirective(type: Type<any>, directive: Directive | null): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/jit/directive.ts#L150-L170)

## Parameters

| Name      | Type        | Description |
| --------- | ----------- | ----------- |
| type      | `Type<any>` |             |
| directive | `Directive` |             |
