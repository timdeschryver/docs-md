---
kind: ClassDeclaration
name: ParseLocation
module: compiler
---

# ParseLocation

```ts
class ParseLocation {
  toString(): string;
  moveBy(delta: number): ParseLocation;
  getContext(
    maxChars: number,
    maxLines: number
  ): { before: string; after: string } | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/parse_util.ts#L11-L96)

## Methods

### toString

```ts
toString(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/parse_util.ts#L16-L18)

### moveBy

```ts
moveBy(delta: number): ParseLocation;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/parse_util.ts#L20-L50)

#### Parameters (#moveBy-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| delta | `number` |             |

### getContext

```ts
getContext(maxChars: number, maxLines: number): {before: string, after: string}|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/parse_util.ts#L54-L95)

#### Parameters (#getContext-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| maxChars | `number` |             |
| maxLines | `number` |             |
