---
kind: ClassDeclaration
name: ResourceLoader
module: compiler
---

# ResourceLoader

## description

An interface for retrieving documents by URL that the compiler uses
to load templates.

```ts
class ResourceLoader {
  get(url: string): Promise<string> | string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/resource_loader.ts#L13-L17)

## license

Copyright Google LLC All Rights Reserved.

Use of this source code is governed by an MIT-style license that can be
found in the LICENSE file at https://angular.io/license

## Methods

### get

```ts
get(url: string): Promise<string>|string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/resource_loader.ts#L14-L16)

#### Parameters (#get-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| url  | `string` |             |
