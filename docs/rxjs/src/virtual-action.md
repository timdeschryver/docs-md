---
kind: ClassDeclaration
name: VirtualAction
module: src
---

# VirtualAction

```ts
class VirtualAction<T> extends AsyncAction<T> {
  public schedule(state?: T, delay: number = 0): Subscription;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/scheduler/VirtualTimeScheduler.ts#L64-L128)

## Methods

### schedule

```ts
public schedule(state?: T, delay: number = 0): Subscription;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/scheduler/VirtualTimeScheduler.ts#L75-L93)

#### Parameters (#schedule-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| state | `T`      |             |
| delay | `number` |             |
