---
kind: ClassDeclaration
name: FormBuilder
module: forms
---

# FormBuilder

## description

Creates an `AbstractControl` from a user-specified configuration.

The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
`FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
forms.

```ts
class FormBuilder {
  group(
    controlsConfig: { [key: string]: any },
    options: AbstractControlOptions | { [key: string]: any } | null = null
  ): FormGroup;
  control(
    formState: any,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ): FormControl;
  array(
    controlsConfig: any[],
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ): FormArray;
  _reduceControls(controlsConfig: {
    [k: string]: any;
  }): { [key: string]: AbstractControl };
  _createControl(controlConfig: any): AbstractControl;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/form_builder.ts#L33-L157)

## see

[Reactive Forms Guide](/guide/reactive-forms)

## publicApi

## Methods

### group

#### description (#group-description)

Construct a new `FormGroup` instance.

```ts
group(   controlsConfig: {[key: string]: any},   options: AbstractControlOptions|{[key: string]: any}|null = null): FormGroup;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/form_builder.ts#L56-L79)

#### Parameters (#group-parameters)

| Name           | Type                      | Description                                                        |
| -------------- | ------------------------- | ------------------------------------------------------------------ |
| controlsConfig | `{ [key: string]: any; }` | A collection of child controls. The key for each child is the name |
| options        | `AbstractControlOptions   | { [key: string]: any; }`                                           | Configuration options object for the `FormGroup`. The object can |

### control

#### description (#control-description)

Construct a new `FormControl` with the given state, validators and options.

```ts
control(   formState: any, validatorOrOpts?: ValidatorFn|ValidatorFn[]|AbstractControlOptions|null,   asyncValidator?: AsyncValidatorFn|AsyncValidatorFn[]|null): FormControl;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/form_builder.ts#L104-L108)

#### Parameters (#control-parameters)

| Name            | Type              | Description                                             |
| --------------- | ----------------- | ------------------------------------------------------- |
| formState       | `any`             | Initializes the control with an initial state value, or |
| validatorOrOpts | `ValidatorFn      | ValidatorFn[]                                           | AbstractControlOptions` | A synchronous validator function, or an array of |
| asyncValidator  | `AsyncValidatorFn | AsyncValidatorFn[]`                                     | A single async validator or array of async validator |

#### usageNotes (#control-usage-notes)

### Initialize a control as disabled

The following example returns a control with an initial value in a disabled state.

<code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
</code-example>
### array
#### description (#array-description)
Constructs a new `FormArray` from the given array of configurations,
validators and options.

```ts
array(   controlsConfig: any[],   validatorOrOpts?: ValidatorFn|ValidatorFn[]|AbstractControlOptions|null,   asyncValidator?: AsyncValidatorFn|AsyncValidatorFn[]|null): FormArray;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/form_builder.ts#L124-L130)

#### Parameters (#array-parameters)

| Name            | Type              | Description                                         |
| --------------- | ----------------- | --------------------------------------------------- |
| controlsConfig  | `any[]`           | An array of child controls or control configs. Each |
| validatorOrOpts | `ValidatorFn      | ValidatorFn[]                                       | AbstractControlOptions` | A synchronous validator function, or an array of |
| asyncValidator  | `AsyncValidatorFn | AsyncValidatorFn[]`                                 | A single async validator or array of async validator |

### \_reduceControls

```ts
_reduceControls(controlsConfig: {[k: string]: any}): {[key: string]: AbstractControl};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/form_builder.ts#L133-L139)

#### Parameters (#\_reduceControls-parameters)

| Name           | Type                    | Description |
| -------------- | ----------------------- | ----------- |
| controlsConfig | `{ [k: string]: any; }` |             |

### \_createControl

```ts
_createControl(controlConfig: any): AbstractControl;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/form_builder.ts#L142-L156)

#### Parameters (#\_createControl-parameters)

| Name          | Type  | Description |
| ------------- | ----- | ----------- |
| controlConfig | `any` |             |
