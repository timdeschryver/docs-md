---
kind: ClassDeclaration
name: ɵNgNoValidate
module: forms
---

# ɵNgNoValidate

## description

Adds `novalidate` attribute to all forms by default.

`novalidate` is used to disable browser's native form validation.

If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:

```
<form ngNativeValidate></form>
```

```ts
class ɵNgNoValidate {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_no_validate_directive.ts#L28-L33)

## publicApi

## ngModule

ReactiveFormsModule
FormsModule
