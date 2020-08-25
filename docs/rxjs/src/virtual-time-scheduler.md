---
kind: ClassDeclaration
name: VirtualTimeScheduler
module: src
---

# VirtualTimeScheduler

```ts
class VirtualTimeScheduler extends AsyncScheduler {
  static frameTimeFactor = 10;
  public frame: number = 0;
  public index: number = -1;

  public flush(): void;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/scheduler/VirtualTimeScheduler.ts#L6-L63)

## Methods

### flush

#### description (#flush-description)

Prompt the Scheduler to execute all of its queued actions, therefore
clearing its queue.

```ts
public flush(): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/scheduler/VirtualTimeScheduler.ts#L42-L62)

#### return (#flush-return)

{void}

## Parameters

| Name            | Type     | Description                                                                                       |
| --------------- | -------- | ------------------------------------------------------------------------------------------------- |
| frameTimeFactor | `number` | /\*_ @deprecated remove in v8. `frameTimeFactor` is not used in VirtualTimeScheduler directly. _/ |
| frame           | `number` | /\*\*                                                                                             |

- The current frame for the state of the virtual scheduler instance. The the difference
- between two "frames" is synonymous with the passage of "virtual time units". So if
- you record `scheduler.frame` to be `1`, then later, observe `scheduler.frame` to be at `11`,
- that means `10` virtual time units have passed.
  \*/ |
  | index | `number` | /\*\*
- Used internally to examine the current virtual action index being processed.
- @deprecated remove in v8. Should be a private API.
  \*/ |
