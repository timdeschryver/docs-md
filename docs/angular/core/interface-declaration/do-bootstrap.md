---
kind: InterfaceDeclaration
name: DoBootstrap
module: core
---

# DoBootstrap

## description

Hook for manual bootstrapping of the application instead of using bootstrap array in @NgModule
annotation.

Reference to the current application is provided as a parameter.

See ["Bootstrapping"](guide/bootstrapping) and ["Entry components"](guide/entry-components).

```ts
interface DoBootstrap {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/metadata/ng_module.ts#L344-L346)

## usageNotes

```typescript
class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef) {
    appRef.bootstrap(AppComponent); // Or some other component
  }
}
```

## publicApi
