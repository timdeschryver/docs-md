---
kind: ClassDeclaration
name: HammerModule
module: platform-browser
---

# HammerModule

## description

Adds support for HammerJS.

Import this module at the root of your application so that Angular can work with
HammerJS to detect gesture events.

Note that applications still need to include the HammerJS script itself. This module
simply sets up the coordination layer between HammerJS and Angular's EventManager.

```ts
class HammerModule {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/hammer_gestures.ts#L289-L291)

## publicApi
