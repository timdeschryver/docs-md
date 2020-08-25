---
kind: ClassDeclaration
name: NgComponentOutlet
module: common
---

# NgComponentOutlet

## description

Instantiates a single {@link Component} type and inserts its Host View into current View.
`NgComponentOutlet` provides a declarative approach for dynamic component creation.

`NgComponentOutlet` requires a component type, if a falsy value is set the view will clear and
any existing component will get destroyed.

```ts
class NgComponentOutlet implements OnChanges, OnDestroy {
  @Input() ngComponentOutlet!: Type<any>;
  @Input() ngComponentOutletInjector!: Injector;
  @Input() ngComponentOutletContent!: any[][];
  @Input() ngComponentOutletNgModuleFactory!: NgModuleFactory<any>;

  ngOnChanges(changes: SimpleChanges);
  ngOnDestroy();
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_component_outlet.ts#L67-L116)

## usageNotes

### Fine tune control

You can control the component creation process by using the following optional attributes:

- `ngComponentOutletInjector`: Optional custom {@link Injector} that will be used as parent for
  the Component. Defaults to the injector of the current view container.

- `ngComponentOutletContent`: Optional list of projectable nodes to insert into the content
  section of the component, if exists.

- `ngComponentOutletNgModuleFactory`: Optional module factory to allow dynamically loading other
  module, then load a component from that module.

### Syntax

Simple

```
<ng-container *ngComponentOutlet="componentTypeExpression"></ng-container>
```

Customized injector/content

```
<ng-container *ngComponentOutlet="componentTypeExpression;
injector: injectorExpression;
content: contentNodesExpression;">
</ng-container>
```

Customized ngModuleFactory

```
<ng-container *ngComponentOutlet="componentTypeExpression;
ngModuleFactory: moduleFactory;">
</ng-container>
```

### A simple example

{@example common/ngComponentOutlet/ts/module.ts region='SimpleExample'}

A more complete example with additional options:

{@example common/ngComponentOutlet/ts/module.ts region='CompleteExample'}

## publicApi

## ngModule

CommonModule

## Properties

| Name                             | Type      | Description |
| -------------------------------- | --------- | ----------- |
| ngComponentOutlet                | `any`     |             |
| ngComponentOutletInjector        | `any`     |             |
| ngComponentOutletContent         | `any[][]` |             |
| ngComponentOutletNgModuleFactory | `any`     |             |

## Methods

### ngOnChanges

```ts
ngOnChanges(changes: SimpleChanges);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_component_outlet.ts#L83-L111)

#### Parameters (#ngOnChanges-parameters)

| Name    | Type  | Description |
| ------- | ----- | ----------- |
| changes | `any` |             |

### ngOnDestroy

```ts
ngOnDestroy();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/directives/ng_component_outlet.ts#L113-L115)
