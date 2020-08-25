---
kind: InterfaceDeclaration
name: Validator
module: forms
---

# Validator

## description

An interface implemented by classes that perform synchronous validation.

```ts
interface Validator {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L51-L70)

## usageNotes

### Provide a custom validator

The following example implements the `Validator` interface to create a
validator directive with a custom error key.

```typescript
## Directive({

selector: '[customValidator]',
providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
})
class CustomValidatorDirective implements Validator {
validate(control: AbstractControl): ValidationErrors|null {
return {'custom': true};
}
}
```

## publicApi
