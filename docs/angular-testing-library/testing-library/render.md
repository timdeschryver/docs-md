---
kind: FunctionDeclaration
name: render
module: testing-library
---

# render

```ts
async function render<SutType, WrapperType = SutType>(
  sut: Type<SutType>,
  renderOptions:
    | RenderComponentOptions<SutType>
    | RenderDirectiveOptions<SutType, WrapperType> = {}
): Promise<RenderResult<SutType>>;
```

[Link to repo](https://github.com/testing-library/angular-testing-library/blob/master/projects/testing-library/src/lib/testing-library.ts#L31-L175)

## Parameters

| Name          | Type                                                | Description                                                      |
| ------------- | --------------------------------------------------- | ---------------------------------------------------------------- |
| sut           | `Type<SutType>`                                     |                                                                  |
| renderOptions | `RenderComponentOptions<SutType, typeof dtlQueries> | RenderDirectiveOptions<SutType, WrapperType, typeof dtlQueries>` |  |

## Overloads

```ts
async function render<ComponentType>(
  component: Type<ComponentType>,
  renderOptions?: RenderComponentOptions<ComponentType>
): Promise<RenderResult<ComponentType, ComponentType>>;
```

[Link to repo](https://github.com/testing-library/angular-testing-library/blob/master/projects/testing-library/src/lib/testing-library.ts#L22-L25)

### Parameters

| Name          | Type                                                       | Description |
| ------------- | ---------------------------------------------------------- | ----------- |
| component     | `Type<ComponentType>`                                      |             |
| renderOptions | `RenderComponentOptions<ComponentType, typeof dtlQueries>` |             |

```ts
async function render<DirectiveType, WrapperType = WrapperComponent>(
  component: Type<DirectiveType>,
  renderOptions?: RenderDirectiveOptions<DirectiveType, WrapperType>
): Promise<RenderResult<DirectiveType, WrapperType>>;
```

[Link to repo](https://github.com/testing-library/angular-testing-library/blob/master/projects/testing-library/src/lib/testing-library.ts#L26-L29)

### Parameters

| Name          | Type                                                                    | Description |
| ------------- | ----------------------------------------------------------------------- | ----------- |
| component     | `Type<DirectiveType>`                                                   |             |
| renderOptions | `RenderDirectiveOptions<DirectiveType, WrapperType, typeof dtlQueries>` |             |
