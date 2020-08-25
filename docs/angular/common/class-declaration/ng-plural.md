---
kind: ClassDeclaration
name: NgPlural
module: common
---

# NgPlural

## description

Adds / removes DOM sub-trees based on a numeric value. Tailored for pluralization.

Displays DOM sub-trees that match the switch expression value, or failing that, DOM sub-trees
that match the switch expression's pluralization category.

To use this directive you must provide a container element that sets the `[ngPlural]` attribute
to a switch expression. Inner elements with a `[ngPluralCase]` will display based on their
expression:

- if `[ngPluralCase]` is set to a value starting with `=`, it will only display if the value
  matches the switch expression exactly,
- otherwise, the view will be treated as a "category match", and will only display if exact
  value matches aren't found and the value maps to its category for the defined locale.

See http://cldr.unicode.org/index/cldr-spec/plural-rules

```ts
class NgPlural {
  addCase(value: string, switchView: SwitchView): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_plural.ts#L47-L85)

## ngModule

CommonModule

## usageNotes

```
<some-element [ngPlural]="value">
<ng-template ngPluralCase="=0">there is nothing</ng-template>
<ng-template ngPluralCase="=1">there is one</ng-template>
<ng-template ngPluralCase="few">there are a few</ng-template>
</some-element>
```

## publicApi

## Methods

### addCase

```ts
addCase(value: string, switchView: SwitchView): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_plural.ts#L63-L65)

#### Parameters (#addCase-parameters)

| Name       | Type         | Description |
| ---------- | ------------ | ----------- |
| value      | `string`     |             |
| switchView | `SwitchView` |             |
