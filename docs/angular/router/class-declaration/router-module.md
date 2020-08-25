---
kind: ClassDeclaration
name: RouterModule
module: router
---

# RouterModule

## description

Adds directives and providers for in-app navigation among views defined in an application.
Use the Angular `Router` service to declaratively specify application states and manage state
transitions.

You can import this NgModule multiple times, once for each lazy-loaded bundle.
However, only one `Router` service can be active.
To ensure this, there are two ways to register routes when importing this module:

- The `forRoot()` method creates an `NgModule` that contains all the directives, the given
  routes, and the `Router` service itself.
- The `forChild()` method creates an `NgModule` that contains all the directives and the given
  routes, but does not include the `Router` service.

```ts
class RouterModule {
  static forRoot(
    routes: Routes,
    config?: ExtraOptions
  ): ModuleWithProviders<RouterModule>;
  static forChild(routes: Routes): ModuleWithProviders<RouterModule>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_module.ts#L94-L174)

## see

[Routing and Navigation guide](guide/router) for an
overview of how the `Router` service should be used.

## publicApi

## Methods

### forRoot

#### description (#forRoot-description)

Creates and configures a module with all the router providers and directives.
Optionally sets up an application listener to perform an initial navigation.

When registering the NgModule at the root, import as follows:

````

```ts
static forRoot(routes: Routes, config?: ExtraOptions): ModuleWithProviders<RouterModule>;
````

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_module.ts#L121-L153)

#### NgModule({ (#forRoot-ng-module({)

imports: [RouterModule.forRoot(ROUTES)]
})
class MyNgModule {}

```

#### Parameters (#forRoot-parameters)

| Name  | Type | Description  |
| ----- |----- | ------------ |
| routes | `Routes` | An array of `Route` objects that define the navigation paths for the application. |
| config | `ExtraOptions` | An `ExtraOptions` configuration object that controls how navigation is performed. |
#### return (#forRoot-return)
The new `NgModule`.
### forChild
#### description (#forChild-description)
Creates a module with all the router directives and a provider registering routes,
without creating a new Router service.
When registering for submodules and lazy-loaded submodules, create the NgModule as follows:

```

```ts
static forChild(routes: Routes): ModuleWithProviders<RouterModule>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_module.ts#L171-L173)

#### NgModule({ (#forChild-ng-module({)

imports: [RouterModule.forChild(ROUTES)]
})
class MyNgModule {}

```

#### Parameters (#forChild-parameters)

| Name  | Type | Description  |
| ----- |----- | ------------ |
| routes | `Routes` | An array of `Route` objects that define the navigation paths for the submodule. |
#### return (#forChild-return)
The new NgModule.
```
