---
kind: InterfaceDeclaration
name: AbstractControlOptions
module: forms
---

# AbstractControlOptions

## description

Interface for options provided to an `AbstractControl`.

```ts
interface AbstractControlOptions {
  validators?: ValidatorFn | ValidatorFn[] | null;
  asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[] | null;
  updateOn?: "change" | "blur" | "submit";
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/model.ts#L113-L129)

## publicApi

## Properties

| Name            | Type              | Description         |
| --------------- | ----------------- | ------------------- |
| validators      | `ValidatorFn      | ValidatorFn[]`      |  |
| asyncValidators | `AsyncValidatorFn | AsyncValidatorFn[]` |  |
| updateOn        | `"change"         | "blur"              | "submit"` |  |
