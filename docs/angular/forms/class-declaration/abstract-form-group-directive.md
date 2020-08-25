---
kind: ClassDeclaration
name: AbstractFormGroupDirective
module: forms
---

# AbstractFormGroupDirective

## description

A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.

```ts
class AbstractFormGroupDirective
  extends ControlContainer
  implements OnInit, OnDestroy {
  _parent!: ControlContainer;
  _validators!: any[];
  _asyncValidators!: any[];

  ngOnInit(): void;
  ngOnDestroy(): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/abstract_form_group_directive.ts#L26-L118)

## publicApi

## Properties

| Name              | Type               | Description |
| ----------------- | ------------------ | ----------- |
| \_parent          | `ControlContainer` |             |
| \_validators      | `any[]`            |             |
| \_asyncValidators | `any[]`            |             |

## Methods

### ngOnInit

#### description (#ngOnInit-description)

An internal callback method triggered on the instance after the inputs are set.
Registers the group with its parent group.

```ts
ngOnInit(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/abstract_form_group_directive.ts#L60-L63)

### ngOnDestroy

#### description (#ngOnDestroy-description)

An internal callback method triggered before the instance is destroyed.
Removes the group from its parent group.

```ts
ngOnDestroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/abstract_form_group_directive.ts#L70-L74)

### \_checkParentType

```ts
_checkParentType(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/abstract_form_group_directive.ts#L117-L117)
