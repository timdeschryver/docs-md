---
kind: ClassDeclaration
name: SelectControlValueAccessor
module: forms
---

# SelectControlValueAccessor

## description

The `ControlValueAccessor` for writing select control values and listening to select control
changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
`NgModel` directives.

```ts
class SelectControlValueAccessor implements ControlValueAccessor {
  value: any;
  _optionMap: Map<string, any> = new Map<string, any>();
  _idCounter: number = 0;
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any): void;
  registerOnChange(fn: (value: any) => any): void;
  registerOnTouched(fn: () => any): void;
  setDisabledState(isDisabled: boolean): void;
  _registerOption(): string;
  _getOptionId(value: any): string | null;
  _getOptionValue(valueString: string): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_control_value_accessor.ts#L86-L194)

## usageNotes

### Using select controls in a reactive form

The following examples show how to use a select control in a reactive form.

{@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}

### Using select controls in a template-driven form

To use a select in a template-driven form, simply add an `ngModel` and a `name`
attribute to the main `<select>` tag.

{@example forms/ts/selectControl/select_control_example.ts region='Component'}

### Customizing option selection

Angular uses object identity to select option. It's possible for the identities of items
to change while the data does not. This can happen, for example, if the items are produced
from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
second response will produce objects with different identities.

To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
`compareWith` takes a **function** which has two arguments: `option1` and `option2`.
If `compareWith` is given, Angular selects option by the return value of the function.

```ts
const selectedCountriesControl = new FormControl();
```

```
<select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
<option *ngFor="let country of countries" [ngValue]="country">
{{country.name}}
</option>
</select>

compareFn(c1: Country, c2: Country): boolean {
return c1 && c2 ? c1.id === c2.id : c1 === c2;
}
```

**Note:** We listen to the 'change' event because 'input' events aren't fired
for selects in Firefox and IE:
https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/

## ngModule

ReactiveFormsModule
FormsModule

## publicApi

## Properties

| Name        | Type               | Description |
| ----------- | ------------------ | ----------- |
| value       | `any`              |             |
| \_optionMap | `any`              |             |
| \_idCounter | `number`           |             |
| onChange    | `(_: any) => void` |             |
| onTouched   | `() => void`       |             |

## Methods

### writeValue

#### description (#writeValue-description)

Sets the "value" property on the input element. The "selectedIndex"
property is also set if an ID is provided on the option element.

```ts
writeValue(value: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_control_value_accessor.ts#L134-L142)

#### Parameters (#writeValue-parameters)

| Name  | Type  | Description       |
| ----- | ----- | ----------------- |
| value | `any` | The checked value |

### registerOnChange

#### description (#registerOnChange-description)

Registers a function called when the control value changes.

```ts
registerOnChange(fn: (value: any) => any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_control_value_accessor.ts#L150-L155)

#### Parameters (#registerOnChange-parameters)

| Name | Type                  | Description           |
| ---- | --------------------- | --------------------- |
| fn   | `(value: any) => any` | The callback function |

### registerOnTouched

#### description (#registerOnTouched-description)

Registers a function called when the control is touched.

```ts
registerOnTouched(fn: () => any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_control_value_accessor.ts#L163-L165)

#### Parameters (#registerOnTouched-parameters)

| Name | Type        | Description           |
| ---- | ----------- | --------------------- |
| fn   | `() => any` | The callback function |

### setDisabledState

#### description (#setDisabledState-description)

Sets the "disabled" property on the select input element.

```ts
setDisabledState(isDisabled: boolean): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_control_value_accessor.ts#L172-L174)

#### Parameters (#setDisabledState-parameters)

| Name       | Type      | Description        |
| ---------- | --------- | ------------------ |
| isDisabled | `boolean` | The disabled value |

### \_registerOption

```ts
_registerOption(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_control_value_accessor.ts#L177-L179)

### \_getOptionId

```ts
_getOptionId(value: any): string|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_control_value_accessor.ts#L182-L187)

#### Parameters (#\_getOptionId-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | `any` |             |

### \_getOptionValue

```ts
_getOptionValue(valueString: string): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/select_control_value_accessor.ts#L190-L193)

#### Parameters (#\_getOptionValue-parameters)

| Name        | Type     | Description |
| ----------- | -------- | ----------- |
| valueString | `string` |             |
