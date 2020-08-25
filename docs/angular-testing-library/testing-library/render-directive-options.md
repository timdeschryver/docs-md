---
kind: InterfaceDeclaration
name: RenderDirectiveOptions
module: testing-library
---

# RenderDirectiveOptions

```ts
interface RenderDirectiveOptions<
  DirectiveType,
  WrapperType,
  Q extends Queries = typeof queries
> {
  template: string;
  wrapper?: Type<WrapperType>;
  componentProperties?: Partial<any>;

  // inherited from RenderComponentOptions
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

[Link to repo](https://github.com/testing-library/angular-testing-library/blob/master/projects/testing-library/src/lib/models.ts#L253-L282)
