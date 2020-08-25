---
kind: ClassDeclaration
name: NgPluralCase
module: common
---

# NgPluralCase

## description

Creates a view that will be added/removed from the parent {@link NgPlural} when the
given expression matches the plural expression according to CLDR rules.

```ts
class NgPluralCase {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_plural.ts#L107-L115)

## ngModule

CommonModule

## usageNotes

```
<some-element [ngPlural]="value">
<ng-template ngPluralCase="=0">...</ng-template>
<ng-template ngPluralCase="other">...</ng-template>
</some-element>
``

See {@link NgPlural} for more details and example.

## publicApi
```
