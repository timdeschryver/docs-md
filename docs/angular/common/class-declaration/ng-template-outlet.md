---
kind: ClassDeclaration
name: NgTemplateOutlet
module: common
---

# NgTemplateOutlet

## description

Inserts an embedded view from a prepared `TemplateRef`.

You can attach a context object to the `EmbeddedViewRef` by setting `[ngTemplateOutletContext]`.
`[ngTemplateOutletContext]` should be an object, the object's keys will be available for binding
by the local template `let` declarations.

```ts
class NgTemplateOutlet implements OnChanges {
  @Input() public ngTemplateOutletContext: Object | null = null;
  @Input() public ngTemplateOutlet: TemplateRef<any> | null = null;

  ngOnChanges(changes: SimpleChanges);
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_template_outlet.ts#L35-L107)

## ngModule

CommonModule

## usageNotes

```
<ng-container *ngTemplateOutlet="templateRefExp; context: contextExp"></ng-container>
```

Using the key `$implicit` in the context object will set its value as default.

### Example

{@example common/ngTemplateOutlet/ts/module.ts region='NgTemplateOutlet'}

## publicApi

## Properties

| Name                    | Type     | Description                                                                  |
| ----------------------- | -------- | ---------------------------------------------------------------------------- |
| ngTemplateOutletContext | `Object` | A context object to attach to the {@link EmbeddedViewRef}. This should be an |

object, the object's keys will be available for binding by the local template `let`
declarations.
Using the key `$implicit` in the context object will set its value as default. |
| ngTemplateOutlet | `any` | A string defining the template reference and optionally the context object for the template. |

## Methods

### ngOnChanges

```ts
ngOnChanges(changes: SimpleChanges);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_template_outlet.ts#L54-L70)

#### Parameters (#ngOnChanges-parameters)

| Name    | Type  | Description |
| ------- | ----- | ----------- |
| changes | `any` |             |
