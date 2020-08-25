---
kind: ClassDeclaration
name: ɵEmptyOutletComponent
module: router
---

# ɵEmptyOutletComponent

## description

This component is used internally within the router to be a placeholder when an empty
router-outlet is needed. For example, with a config such as:

`{path: 'parent', outlet: 'nav', children: [...]}`

In order to render, there needs to be a component on this config, which will default
to this `EmptyOutletComponent`.

```ts
class ɵEmptyOutletComponent {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/components/empty_outlet.ts#L20-L22)
