---
kind: EnumDeclaration
name: NotificationKind
module: src
---

# NotificationKind

```ts
export enum NotificationKind {
  NEXT = "N",
  ERROR = "E",
  COMPLETE = "C",
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Notification.ts#L17-L21)

## deprecated

NotificationKind is deprecated as const enums are not compatible with isolated modules. Use a string literal instead.
