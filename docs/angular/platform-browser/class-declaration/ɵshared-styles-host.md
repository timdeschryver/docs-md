---
kind: ClassDeclaration
name: ɵSharedStylesHost
module: platform-browser
---

# ɵSharedStylesHost

```ts
class SharedStylesHost {
  addStyles(styles: string[]): void;
  getAllStyles(): string[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/shared_styles_host.ts#L12-L33)

## Methods

### addStyles

```ts
addStyles(styles: string[]): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/shared_styles_host.ts#L17-L26)

#### Parameters (#addStyles-parameters)

| Name   | Type       | Description |
| ------ | ---------- | ----------- |
| styles | `string[]` |             |

### onStylesAdded

```ts
onStylesAdded(additions: Set<string>): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/shared_styles_host.ts#L28-L28)

#### Parameters (#onStylesAdded-parameters)

| Name      | Type  | Description |
| --------- | ----- | ----------- |
| additions | `any` |             |

### getAllStyles

```ts
getAllStyles(): string[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/shared_styles_host.ts#L30-L32)
