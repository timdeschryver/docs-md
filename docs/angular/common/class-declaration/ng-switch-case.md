---
kind: ClassDeclaration
name: NgSwitchCase
module: common
---

# NgSwitchCase

## description

Provides a switch case expression to match against an enclosing `ngSwitch` expression.
When the expressions match, the given `NgSwitchCase` template is rendered.
If multiple match expressions match the switch expression value, all of them are displayed.

```ts
class NgSwitchCase implements DoCheck {
  @Input() ngSwitchCase: any;

  ngDoCheck();
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_switch.ts#L190-L211)

## ngModule

CommonModule

## usageNotes

Within a switch container, `*ngSwitchCase` statements specify the match expressions
as attributes. Include `*ngSwitchDefault` as the final case.

```
<container-element [ngSwitch]="switch_expression">
<some-element *ngSwitchCase="match_expression_1">...</some-element>
...
<some-element *ngSwitchDefault>...</some-element>
</container-element>
```

Each switch-case statement contains an in-line HTML template or template reference
that defines the subtree to be selected if the value of the match expression
matches the value of the switch expression.

Unlike JavaScript, which uses strict equality, Angular uses loose equality.
This means that the empty string, `""` matches 0.

## publicApi

## see

`NgSwitch`
`NgSwitchDefault`

## Properties

| Name         | Type  | Description                                       |
| ------------ | ----- | ------------------------------------------------- |
| ngSwitchCase | `any` | Stores the HTML template to be selected on match. |

## Methods

### ngDoCheck

#### description (#ngDoCheck-description)

Performs case matching. For internal use only.

```ts
ngDoCheck();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_switch.ts#L208-L210)
