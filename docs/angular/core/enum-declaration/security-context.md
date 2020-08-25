---
kind: EnumDeclaration
name: SecurityContext
module: core
---

# SecurityContext

## description

A SecurityContext marks a location that has dangerous security implications, e.g. a DOM property
like `innerHTML` that could cause Cross Site Scripting (XSS) security bugs when improperly
handled.

See DomSanitizer for more details on security in Angular applications.

```ts
export enum SecurityContext {
  NONE = 0,
  HTML = 1,
  STYLE = 2,
  SCRIPT = 3,
  URL = 4,
  RESOURCE_URL = 5,
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/security.ts#L18-L25)

## license

Copyright Google LLC All Rights Reserved.

Use of this source code is governed by an MIT-style license that can be
found in the LICENSE file at https://angular.io/license

## publicApi
