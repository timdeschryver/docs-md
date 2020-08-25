---
kind: InterfaceDeclaration
name: Query
module: core
---

# Query

## description

Type of the Query metadata.

```ts
interface Query {
  descendants: boolean;
  first: boolean;
  read: any;
  isViewQuery: boolean;
  selector: any;
  static?: boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/metadata/di.ts#L99-L106)

## publicApi

## Properties

| Name        | Type      | Description |
| ----------- | --------- | ----------- |
| descendants | `boolean` |             |
| first       | `boolean` |             |
| read        | `any`     |             |
| isViewQuery | `boolean` |             |
| selector    | `any`     |             |
| static      | `boolean` |             |
