---
kind: ClassDeclaration
name: OutletContext
module: router
---

# OutletContext

## description

Store contextual information about a `RouterOutlet`

```ts
class OutletContext {
  outlet: RouterOutlet | null = null;
  route: ActivatedRoute | null = null;
  resolver: ComponentFactoryResolver | null = null;
  children = new ChildrenOutletContexts();
  attachRef: ComponentRef<any> | null = null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_outlet_context.ts#L20-L26)

## publicApi

## Properties

| Name      | Type                     | Description |
| --------- | ------------------------ | ----------- |
| outlet    | `RouterOutlet`           |             |
| route     | `ActivatedRoute`         |             |
| resolver  | `any`                    |             |
| children  | `ChildrenOutletContexts` |             |
| attachRef | `any`                    |             |
