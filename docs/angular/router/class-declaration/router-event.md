---
kind: ClassDeclaration
name: RouterEvent
module: router
---

# RouterEvent

## description

Base for events the router goes through, as opposed to events tied to a specific
route. Fired one time for any given navigation.

The following code shows how a class subscribes to router events.

```ts
class MyService {
  constructor(public router: Router, logger: Logger) {
    router.events
      .pipe(filter((e: Event): e is RouterEvent => e instanceof RouterEvent))
      .subscribe((e: RouterEvent) => {
        logger.log(e.id, e.url);
      });
  }
}
```

```ts
class RouterEvent {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/events.ts#L45-L51)

## see

`Event`
[Router events summary](guide/router#router-events)

## publicApi
