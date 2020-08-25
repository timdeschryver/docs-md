---
kind: FunctionDeclaration
name: ɵɵdisableBindings
module: core
---

# ɵɵdisableBindings

## description

Disables directive matching on element.

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
function ɵɵdisableBindings(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/state.ts#L232-L234)

## codeGenApi
