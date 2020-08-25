---
kind: InterfaceDeclaration
name: SchemaMetadata
module: core
---

# SchemaMetadata

## description

A schema definition associated with an NgModule.

```ts
interface SchemaMetadata {
  name: string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/metadata/schema.ts#L19-L21)

## license

Copyright Google LLC All Rights Reserved.

Use of this source code is governed by an MIT-style license that can be
found in the LICENSE file at https://angular.io/license

## see

`@NgModule`, `CUSTOM_ELEMENTS_SCHEMA`, `NO_ERRORS_SCHEMA`

## Parameters

| Name | Type | Description                   |
| ---- | ---- | ----------------------------- |
| name | ``   | The name of a defined schema. |

## publicApi

## Properties

| Name | Type     | Description |
| ---- | -------- | ----------- |
| name | `string` |             |
