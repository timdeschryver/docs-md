---
kind: ClassDeclaration
name: ChildrenOutletContexts
module: router
---

# ChildrenOutletContexts

## description

Store contextual information about the children (= nested) `RouterOutlet`

```ts
class ChildrenOutletContexts {
  onChildOutletCreated(childName: string, outlet: RouterOutlet): void;
  onChildOutletDestroyed(childName: string): void;
  onOutletDeactivated(): Map<string, OutletContext>;
  onOutletReAttached(contexts: Map<string, OutletContext>);
  getOrCreateContext(childName: string): OutletContext;
  getContext(childName: string): OutletContext | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_outlet_context.ts#L33-L84)

## publicApi

## Methods

### onChildOutletCreated

```ts
onChildOutletCreated(childName: string, outlet: RouterOutlet): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_outlet_context.ts#L38-L42)

#### Parameters (#onChildOutletCreated-parameters)

| Name      | Type           | Description |
| --------- | -------------- | ----------- |
| childName | `string`       |             |
| outlet    | `RouterOutlet` |             |

### onChildOutletDestroyed

#### description (#onChildOutletDestroyed-description)

Called when a `RouterOutlet` directive is destroyed.
We need to keep the context as the outlet could be destroyed inside a NgIf and might be
re-created later.

```ts
onChildOutletDestroyed(childName: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_outlet_context.ts#L49-L54)

#### Parameters (#onChildOutletDestroyed-parameters)

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| childName | `string` |             |

### onOutletDeactivated

#### description (#onOutletDeactivated-description)

Called when the corresponding route is deactivated during navigation.
Because the component get destroyed, all children outlet are destroyed.

```ts
onOutletDeactivated(): Map<string, OutletContext>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_outlet_context.ts#L60-L64)

### onOutletReAttached

```ts
onOutletReAttached(contexts: Map<string, OutletContext>);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_outlet_context.ts#L66-L68)

#### Parameters (#onOutletReAttached-parameters)

| Name     | Type  | Description |
| -------- | ----- | ----------- |
| contexts | `any` |             |

### getOrCreateContext

```ts
getOrCreateContext(childName: string): OutletContext;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_outlet_context.ts#L70-L79)

#### Parameters (#getOrCreateContext-parameters)

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| childName | `string` |             |

### getContext

```ts
getContext(childName: string): OutletContext|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_outlet_context.ts#L81-L83)

#### Parameters (#getContext-parameters)

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| childName | `string` |             |
