---
kind: ClassDeclaration
name: ɵDomSharedStylesHost
module: platform-browser
---

# ɵDomSharedStylesHost

```ts
class DomSharedStylesHost extends SharedStylesHost implements OnDestroy {
  addHost(hostNode: Node): void;
  removeHost(hostNode: Node): void;
  onStylesAdded(additions: Set<string>): void;
  ngOnDestroy(): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/shared_styles_host.ts#L35-L68)

## Methods

### addHost

```ts
addHost(hostNode: Node): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/shared_styles_host.ts#L52-L55)

#### Parameters (#addHost-parameters)

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| hostNode | `Node` |             |

### removeHost

```ts
removeHost(hostNode: Node): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/shared_styles_host.ts#L57-L59)

#### Parameters (#removeHost-parameters)

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| hostNode | `Node` |             |

### onStylesAdded

```ts
onStylesAdded(additions: Set<string>): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/shared_styles_host.ts#L61-L63)

#### Parameters (#onStylesAdded-parameters)

| Name      | Type  | Description |
| --------- | ----- | ----------- |
| additions | `any` |             |

### ngOnDestroy

```ts
ngOnDestroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/shared_styles_host.ts#L65-L67)
