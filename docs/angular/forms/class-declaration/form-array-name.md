---
kind: ClassDeclaration
name: FormArrayName
module: forms
---

# FormArrayName

## description

Syncs a nested `FormArray` to a DOM element.

This directive is designed to be used with a parent `FormGroupDirective` (selector:
`[formGroup]`).

It accepts the string name of the nested `FormArray` you want to link, and
will look for a `FormArray` registered with that name in the parent
`FormGroup` instance you passed into `FormGroupDirective`.

```ts
class FormArrayName extends ControlContainer implements OnInit, OnDestroy {
  _parent: ControlContainer;
  _validators: any[];
  _asyncValidators: any[];
  @Input("formArrayName") name!: string | number | null;

  ngOnInit(): void;
  ngOnDestroy(): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_name.ts#L134-L235)

## see

[Reactive Forms Guide](guide/reactive-forms)
`AbstractControl`

## usageNotes

### Example

{@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}

## ngModule

ReactiveFormsModule

## publicApi

## Properties

| Name              | Type               | Description |
| ----------------- | ------------------ | ----------- |
| \_parent          | `ControlContainer` |             |
| \_validators      | `any[]`            |             |
| \_asyncValidators | `any[]`            |             |
| name              | `string            | number`     |  |

## Methods

### ngOnInit

#### description (#ngOnInit-description)

A lifecycle method called when the directive's inputs are initialized. For internal use only.

```ts
ngOnInit(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_name.ts#L173-L176)

#### throws (#ngOnInit-throws)

If the directive does not have a valid parent.

### ngOnDestroy

#### description (#ngOnDestroy-description)

A lifecycle method called before the directive's instance is destroyed. For internal use only.

```ts
ngOnDestroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_name.ts#L182-L186)
