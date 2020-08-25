---
kind: ClassDeclaration
name: RadioControlValueAccessor
module: forms
---

# RadioControlValueAccessor

## description

The `ControlValueAccessor` for writing radio control values and listening to radio control
changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
`NgModel` directives.

```ts
class RadioControlValueAccessor
  implements ControlValueAccessor, OnDestroy, OnInit {
  _state!: boolean;
  _control!: NgControl;
  _fn!: Function;
  onChange = () => {};
  onTouched = () => {};
  @Input() name!: string;
  @Input() formControlName!: string;
  @Input() value: any;

  ngOnInit(): void;
  ngOnDestroy(): void;
  writeValue(value: any): void;
  registerOnChange(fn: (_: any) => {}): void;
  fireUncheck(value: any): void;
  registerOnTouched(fn: () => {}): void;
  setDisabledState(isDisabled: boolean): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/radio_control_value_accessor.ts#L90-L228)

## usageNotes

### Using radio buttons with reactive form directives

The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
a reactive form, radio buttons in the same group should have the same `formControlName`.
Providing a `name` attribute is optional.

{@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}

## ngModule

ReactiveFormsModule
FormsModule

## publicApi

## Properties

| Name            | Type         | Description |
| --------------- | ------------ | ----------- |
| \_state         | `boolean`    |             |
| \_control       | `NgControl`  |             |
| \_fn            | `Function`   |             |
| onChange        | `() => void` |             |
| onTouched       | `() => void` |             |
| name            | `string`     |             |
| formControlName | `string`     |             |
| value           | `any`        |             |

## Methods

### ngOnInit

#### description (#ngOnInit-description)

A lifecycle method called when the directive is initialized. For internal use only.

```ts
ngOnInit(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/radio_control_value_accessor.ts#L148-L152)

### ngOnDestroy

#### description (#ngOnDestroy-description)

Lifecycle method called before the directive's instance is destroyed. For internal use only.

```ts
ngOnDestroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/radio_control_value_accessor.ts#L158-L160)

### writeValue

#### description (#writeValue-description)

Sets the "checked" property value on the radio input element.

```ts
writeValue(value: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/radio_control_value_accessor.ts#L168-L171)

#### Parameters (#writeValue-parameters)

| Name  | Type  | Description       |
| ----- | ----- | ----------------- |
| value | `any` | The checked value |

### registerOnChange

#### description (#registerOnChange-description)

Registers a function called when the control value changes.

```ts
registerOnChange(fn: (_: any) => {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/radio_control_value_accessor.ts#L179-L185)

#### Parameters (#registerOnChange-parameters)

| Name | Type             | Description           |
| ---- | ---------------- | --------------------- |
| fn   | `(_: any) => {}` | The callback function |

### fireUncheck

#### description (#fireUncheck-description)

Sets the "value" on the radio input element and unchecks it.

```ts
fireUncheck(value: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/radio_control_value_accessor.ts#L192-L194)

#### Parameters (#fireUncheck-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | `any` |             |

### registerOnTouched

#### description (#registerOnTouched-description)

Registers a function called when the control is touched.

```ts
registerOnTouched(fn: () => {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/radio_control_value_accessor.ts#L202-L204)

#### Parameters (#registerOnTouched-parameters)

| Name | Type       | Description           |
| ---- | ---------- | --------------------- |
| fn   | `() => {}` | The callback function |

### setDisabledState

#### description (#setDisabledState-description)

Sets the "disabled" property on the input element.

```ts
setDisabledState(isDisabled: boolean): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/radio_control_value_accessor.ts#L211-L213)

#### Parameters (#setDisabledState-parameters)

| Name       | Type      | Description        |
| ---------- | --------- | ------------------ |
| isDisabled | `boolean` | The disabled value |
