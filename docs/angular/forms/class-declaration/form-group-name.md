---
kind: ClassDeclaration
name: FormGroupName
module: forms
---

# FormGroupName

## description

Syncs a nested `FormGroup` to a DOM element.

This directive can only be used with a parent `FormGroupDirective`.

It accepts the string name of the nested `FormGroup` to link, and
looks for a `FormGroup` registered with that name in the parent
`FormGroup` instance you passed into `FormGroupDirective`.

Use nested form groups to validate a sub-group of a
form separately from the rest or to group the values of certain
controls into their own nested object.

```ts
class FormGroupName
  extends AbstractFormGroupDirective
  implements OnInit, OnDestroy {
  @Input("formGroupName") name!: string | number | null;

  _checkParentType(): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_name.ts#L73-L103)

## see

[Reactive Forms Guide](guide/reactive-forms)

## usageNotes

### Access the group by name

The following example uses the {@link AbstractControl#get get} method to access the
associated `FormGroup`

```ts
this.form.get("name");
```

### Access individual controls in the group

The following example uses the {@link AbstractControl#get get} method to access
individual controls within the group using dot syntax.

```ts
this.form.get("name.first");
```

### Register a nested `FormGroup`.

The following example registers a nested _name_ `FormGroup` within an existing `FormGroup`,
and provides methods to retrieve the nested `FormGroup` and individual controls.

{@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}

## ngModule

ReactiveFormsModule

## publicApi

## Properties

| Name | Type    | Description |
| ---- | ------- | ----------- |
| name | `string | number`     |  |

## Methods

### \_checkParentType

```ts
_checkParentType(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/reactive_directives/form_group_name.ts#L98-L102)
