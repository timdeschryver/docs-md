---
kind: InterfaceDeclaration
name: AsyncValidator
module: forms
---

# AsyncValidator

## description

An interface implemented by classes that perform asynchronous validation.

```ts
interface AsyncValidator {
  // inherited from Validator
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/validators.ts#L100-L112)

## usageNotes

### Provide a custom async validator directive

The following example implements the `AsyncValidator` interface to create an
async validator directive with a custom error key.

```typescript
import { of } from 'rxjs';

## Directive({

selector: '[customAsyncValidator]',
providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: CustomAsyncValidatorDirective, multi:
true}]
})
class CustomAsyncValidatorDirective implements AsyncValidator {
validate(control: AbstractControl): Observable<ValidationErrors|null> {
return of({'custom': true});
}
}
```

## publicApi
