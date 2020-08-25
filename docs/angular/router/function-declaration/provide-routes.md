---
kind: FunctionDeclaration
name: provideRoutes
module: router
---

# provideRoutes

## description

Registers a [DI provider](guide/glossary#provider) for a set of routes.

```ts
function provideRoutes(routes: Routes): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_module.ts#L214-L219)

## Parameters

| Name   | Type     | Description                         |
| ------ | -------- | ----------------------------------- |
| routes | `Routes` | The route configuration to provide. |

## usageNotes

```
## NgModule({

imports: [RouterModule.forChild(ROUTES)],
providers: [provideRoutes(EXTRA_ROUTES)]
})
class MyNgModule {}
```

## publicApi
