---
kind: ClassDeclaration
name: ɵNgSelectMultipleOption
module: forms
---

# ɵNgSelectMultipleOption

## description

Marks `<option>` as dynamic, so Angular can be notified when options change.

```ts
class ɵNgSelectMultipleOption implements OnDestroy {
  id!: string;
  _value: any;

  _setElementValue(value: string): void;
  _setSelected(selected: boolean);
  ngOnDestroy(): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_multiple_control_value_accessor.ts#L234-L298)

## see

`SelectMultipleControlValueAccessor`

## ngModule

ReactiveFormsModule
FormsModule

## publicApi

## Properties

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| id      | `string` |             |
| \_value | `any`    |             |

## Methods

### \_setElementValue

```ts
_setElementValue(value: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_multiple_control_value_accessor.ts#L279-L281)

#### Parameters (#\_setElementValue-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| value | `string` |             |

### \_setSelected

```ts
_setSelected(selected: boolean);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_multiple_control_value_accessor.ts#L284-L286)

#### Parameters (#\_setSelected-parameters)

| Name     | Type      | Description |
| -------- | --------- | ----------- |
| selected | `boolean` |             |

### ngOnDestroy

#### description (#ngOnDestroy-description)

Lifecycle method called before the directive's instance is destroyed. For internal use only.

```ts
ngOnDestroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_multiple_control_value_accessor.ts#L292-L297)
