---
kind: FunctionDeclaration
name: ɵɵNgOnChangesFeature
module: core
---

# ɵɵNgOnChangesFeature

## description

The NgOnChangesFeature decorates a component with support for the ngOnChanges
lifecycle hook, so it should be included in any component that implements
that hook.

If the component or directive uses inheritance, the NgOnChangesFeature MUST
be included as a feature AFTER {@link InheritDefinitionFeature}, otherwise
inherited properties will not be propagated to the ngOnChanges lifecycle
hook.

Example usage:

```
static ɵcmp = defineComponent({
...
inputs: {name: 'publicName'},
features: [NgOnChangesFeature]
});
```

```ts
function ɵɵNgOnChangesFeature<T>(): DirectiveDefFeature;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/features/ng_onchanges_feature.ts#L36-L38)

## codeGenApi
