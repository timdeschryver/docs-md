---
kind: ClassDeclaration
name: AbstractControlDirective
module: forms
---

# AbstractControlDirective

## description

Base class for control directives.

This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.

```ts
class AbstractControlDirective {
  reset(value: any = undefined): void;
  hasError(errorCode: string, path?: Array<string | number> | string): boolean;
  getError(errorCode: string, path?: Array<string | number> | string): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/abstract_control_directive.ts#L21-L240)

## publicApi

## Methods

### reset

#### description (#reset-description)

Resets the control with the provided value if the control is present.

```ts
reset(value: any = undefined): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/abstract_control_directive.ts#L172-L174)

#### Parameters (#reset-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | `any` |             |

### hasError

#### description (#hasError-description)

Reports whether the control with the given path has the error specified.

```ts
hasError(errorCode: string, path?: Array<string|number>|string): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/abstract_control_directive.ts#L206-L208)

#### Parameters (#hasError-parameters)

| Name      | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| errorCode | `string` | The code of the error to check |
| path      | `string  | (string                        | number)[]` | A list of control names that designates how to move from the current control |

#### usageNotes (#hasError-usage-notes)

For example, for the following `FormGroup`:

```
form = new FormGroup({
address: new FormGroup({ street: new FormControl() })
});
```

The path to the 'street' control from the root form would be 'address' -> 'street'.

It can be provided to this method in one of two formats:

1. An array of string control names, e.g. `['address', 'street']`
1. A period-delimited list of control names in one string, e.g. `'address.street'`

If no path is given, this method checks for the error on the current control.

#### returns (#hasError-returns)

whether the given error is present in the control at the given path.

If the control is not present, false is returned.

### getError

#### description (#getError-description)

Reports error data for the control with the given path.

```ts
getError(errorCode: string, path?: Array<string|number>|string): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/abstract_control_directive.ts#L237-L239)

#### Parameters (#getError-parameters)

| Name      | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| errorCode | `string` | The code of the error to check |
| path      | `string  | (string                        | number)[]` | A list of control names that designates how to move from the current control |

#### usageNotes (#getError-usage-notes)

For example, for the following `FormGroup`:

```
form = new FormGroup({
address: new FormGroup({ street: new FormControl() })
});
```

The path to the 'street' control from the root form would be 'address' -> 'street'.

It can be provided to this method in one of two formats:

1. An array of string control names, e.g. `['address', 'street']`
1. A period-delimited list of control names in one string, e.g. `'address.street'`

#### returns (#getError-returns)

error data for that particular error. If the control or error is not present,
null is returned.
