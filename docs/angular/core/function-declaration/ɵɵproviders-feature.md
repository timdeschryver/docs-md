---
kind: FunctionDeclaration
name: ɵɵProvidersFeature
module: core
---

# ɵɵProvidersFeature

## description

This feature resolves the providers of a directive (or component),
and publish them into the DI system, making it visible to others for injection.

For example:

```ts
class ComponentWithProviders {
  constructor(private greeter: GreeterDE) {}

  static ɵcmp = defineComponent({
    type: ComponentWithProviders,
    selectors: [["component-with-providers"]],
    factory: () =>
      new ComponentWithProviders(directiveInject(GreeterDE as any)),
    decls: 1,
    vars: 1,
    template: function (fs: RenderFlags, ctx: ComponentWithProviders) {
      if (fs & RenderFlags.Create) {
        ɵɵtext(0);
      }
      if (fs & RenderFlags.Update) {
        ɵɵtextInterpolate(ctx.greeter.greet());
      }
    },
    features: [ProvidersFeature([GreeterDE])],
  });
}
```

```ts
function ɵɵProvidersFeature<T>(
  providers: Provider[],
  viewProviders: Provider[] = []
);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/features/providers_feature.ts#L44-L54)

## Parameters

| Name          | Type         | Description |
| ------------- | ------------ | ----------- |
| definition    | ``           |             |
| providers     | `Provider[]` |             |
| viewProviders | `Provider[]` |             |

## codeGenApi
