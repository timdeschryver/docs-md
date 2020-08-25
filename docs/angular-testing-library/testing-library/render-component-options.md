---
kind: InterfaceDeclaration
name: RenderComponentOptions
module: testing-library
---

# RenderComponentOptions

```ts
interface RenderComponentOptions<
  ComponentType,
  Q extends Queries = typeof queries
> {
  detectChanges?: boolean;
  declarations?: any[];
  providers?: any[];
  imports?: any[];
  schemas?: any[];
  componentProperties?: Partial<ComponentType>;
  componentProviders?: any[];
  queries?: Q;
  excludeComponentDeclaration?: boolean;
  routes?: Routes;
  removeAngularAttributes?: boolean;
}
```

[Link to repo](https://github.com/testing-library/angular-testing-library/blob/master/projects/testing-library/src/lib/models.ts#L63-L251)
