---
kind: FunctionDeclaration
name: ɵɵenableBindings
module: core
---

# ɵɵenableBindings

## description

Enables directive matching on elements.

- Example:

```
<my-comp my-directive>
Should match component / directive.
</my-comp>
<div ngNonBindable>
<!-- ɵɵdisableBindings() -->
<my-comp my-directive>
Should not match component / directive because we are in ngNonBindable.
</my-comp>
<!-- ɵɵenableBindings() -->
</div>
```

```ts
function ɵɵenableBindings(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/state.ts#L209-L211)

## codeGenApi
