---
kind: FunctionDeclaration
name: ɵɵsanitizeUrlOrResourceUrl
module: core
---

# ɵɵsanitizeUrlOrResourceUrl

## description

Sanitizes URL, selecting sanitizer function based on tag and property names.

This function is used in case we can't define security context at compile time, when only prop
name is available. This happens when we generate host bindings for Directives/Components. The
host element is unknown at compile time, so we defer calculation of specific sanitizer to
runtime.

```ts
function ɵɵsanitizeUrlOrResourceUrl(
  unsafeUrl: any,
  tag: string,
  prop: string
): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/sanitization.ts#L174-L176)

## Parameters

| Name      | Type     | Description                                   |
| --------- | -------- | --------------------------------------------- |
| unsafeUrl | `any`    | untrusted `url`, typically from the user.     |
| tag       | `string` | target element tag name.                      |
| prop      | `string` | name of the property that contains the value. |

## returns

`url` string which is safe to bind.

## publicApi
