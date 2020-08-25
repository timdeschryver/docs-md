---
kind: ClassDeclaration
name: NgSwitch
module: common
---

# NgSwitch

## description

The `[ngSwitch]` directive on a container specifies an expression to match against.
The expressions to match are provided by `ngSwitchCase` directives on views within the container.

- Every view that matches is rendered.
- If there are no matches, a view with the `ngSwitchDefault` directive is rendered.
- Elements within the `[NgSwitch]` statement but outside of any `NgSwitchCase`
  or `ngSwitchDefault` directive are preserved at the location.

```ts
class NgSwitch {
  _addCase(): number;
  _addDefault(view: SwitchView);
  _matchCase(value: any): boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_switch.ts#L102-L155)

## ngModule

CommonModule

## usageNotes

Define a container element for the directive, and specify the switch expression
to match against as an attribute:

```
<container-element [ngSwitch]="switch_expression">
```

Within the container, `*ngSwitchCase` statements specify the match expressions
as attributes. Include `*ngSwitchDefault` as the final case.

```
<container-element [ngSwitch]="switch_expression">
<some-element *ngSwitchCase="match_expression_1">...</some-element>
...
<some-element *ngSwitchDefault>...</some-element>
</container-element>
```

### Usage Examples

The following example shows how to use more than one case to display the same view:

```
<container-element [ngSwitch]="switch_expression">
<!-- the same view can be shown in more than one case -->
<some-element *ngSwitchCase="match_expression_1">...</some-element>
<some-element *ngSwitchCase="match_expression_2">...</some-element>
<some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
<!--default case when there are no matches -->
<some-element *ngSwitchDefault>...</some-element>
</container-element>
```

The following example shows how cases can be nested:

```
<container-element [ngSwitch]="switch_expression">
<some-element *ngSwitchCase="match_expression_1">...</some-element>
<some-element *ngSwitchCase="match_expression_2">...</some-element>
<some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
<ng-container *ngSwitchCase="match_expression_3">
<!-- use a ng-container to group multiple root nodes -->
<inner-element></inner-element>
<inner-other-element></inner-other-element>
</ng-container>
<some-element *ngSwitchDefault>...</some-element>
</container-element>
```

## publicApi

## see

`NgSwitchCase`
`NgSwitchDefault`
[Structural Directives](guide/structural-directives)

## Methods

### \_addCase

```ts
_addCase(): number;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_switch.ts#L121-L123)

### \_addDefault

```ts
_addDefault(view: SwitchView);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_switch.ts#L126-L131)

#### Parameters (#\_addDefault-parameters)

| Name | Type         | Description |
| ---- | ------------ | ----------- |
| view | `SwitchView` |             |

### \_matchCase

```ts
_matchCase(value: any): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_switch.ts#L134-L144)

#### Parameters (#\_matchCase-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | `any` |             |
