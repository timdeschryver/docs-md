---
kind: FunctionDeclaration
name: ɵLifecycleHooksFeature
module: core
---

# ɵLifecycleHooksFeature

## description

Used to enable lifecycle hooks on the root component.

Include this feature when calling `renderComponent` if the root component
you are rendering has lifecycle hooks defined. Otherwise, the hooks won't
be called properly.

Example:

```
renderComponent(AppComponent, {hostFeatures: [LifecycleHooksFeature]});
```

```ts
function LifecycleHooksFeature(component: any, def: ComponentDef<any>): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/component.ts#L272-L280)

## Parameters

| Name      | Type                | Description |
| --------- | ------------------- | ----------- |
| component | `any`               |             |
| def       | `ComponentDef<any>` |             |
