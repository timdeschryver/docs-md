---
kind: FunctionDeclaration
name: ɵresolveComponentResources
module: core
---

# ɵresolveComponentResources

## description

Used to resolve resource URLs on `@Component` when used with JIT compilation.

Example:

````

```ts
function resolveComponentResources(
resourceResolver: (
url: string
) => Promise<string | { text(): Promise<string> }>
): Promise<void>;
````

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/metadata/resource_loading.ts#L45-L86)

## Component({

selector: 'my-comp',
templateUrl: 'my-comp.html', // This requires asynchronous resolution
})
class MyComponent{
}

// Calling `renderComponent` will fail because `renderComponent` is a synchronous process
// and `MyComponent`'s `@Component.templateUrl` needs to be resolved asynchronously.

// Calling `resolveComponentResources()` will resolve `@Component.templateUrl` into
// `@Component.template`, which allows `renderComponent` to proceed in a synchronous manner.

// Use browser's `fetch()` function as the default resource resolution strategy.
resolveComponentResources(fetch).then(() => {
// After resolution all URLs have been converted into `template` strings.
renderComponent(MyComponent);
});

```

NOTE: In AOT the resolution happens during compilation, and so there should be no need
to call this method outside JIT mode.

## Parameters

| Name  | Type | Description  |
| ----- |----- | ------------ |
| resourceResolver | `(url: string) => (Promise<string | {    text(): Promise<string>;}>)` | a function which is responsible for returning a `Promise` to the |
```
