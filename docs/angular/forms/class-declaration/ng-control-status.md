---
kind: ClassDeclaration
name: NgControlStatus
module: forms
---

# NgControlStatus

## description

Directive automatically applied to Angular form controls that sets CSS classes
based on control status.

```ts
class NgControlStatus extends AbstractControlStatus {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/ng_control_status.ts#L78-L83)

## usageNotes

### CSS classes applied

The following classes are applied as the properties become true:

- ng-valid
- ng-invalid
- ng-pending
- ng-pristine
- ng-dirty
- ng-untouched
- ng-touched

## ngModule

ReactiveFormsModule
FormsModule

## publicApi
