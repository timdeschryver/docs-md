---
kind: ClassDeclaration
name: NgSelectOption
module: forms
---

# NgSelectOption

## description

Marks `<option>` as dynamic, so Angular can be notified when options change.

```ts
class NgSelectOption implements OnDestroy {
  id!: string;

  _setElementValue(value: string): void;
  ngOnDestroy(): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_control_value_accessor.ts#L206-L260)

## see

`SelectControlValueAccessor`

## ngModule

ReactiveFormsModule
FormsModule

## publicApi

## Properties

| Name | Type     | Description |
| ---- | -------- | ----------- |
| id   | `string` |             |

## Methods

### \_setElementValue

```ts
_setElementValue(value: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_control_value_accessor.ts#L246-L248)

#### Parameters (#\_setElementValue-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| value | `string` |             |

### ngOnDestroy

#### description (#ngOnDestroy-description)

Lifecycle method called before the directive's instance is destroyed. For internal use only.

```ts
ngOnDestroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_control_value_accessor.ts#L254-L259)
