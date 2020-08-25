---
kind: InterfaceDeclaration
name: RenderResult
module: testing-library
---

# RenderResult

```ts
interface RenderResult<ComponentType, WrapperType = ComponentType> {
  container: HTMLElement;
  debug: (
    element?: Element | HTMLDocument | (Element | HTMLDocument)[],
    maxLength?: number,
    options?: OptionsReceived
  ) => void;
  detectChanges: () => void;
  debugElement: DebugElement;
  fixture: ComponentFixture<WrapperType>;
  navigate: (
    elementOrPath: Element | string,
    basePath?: string
  ) => Promise<boolean>;
  rerender: (componentProperties: Partial<ComponentType>) => void;
}
```

[Link to repo](https://github.com/testing-library/angular-testing-library/blob/master/projects/testing-library/src/lib/models.ts#L8-L61)
