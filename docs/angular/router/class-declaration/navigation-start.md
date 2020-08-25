---
kind: ClassDeclaration
name: NavigationStart
module: router
---

# NavigationStart

## description

An event triggered when a navigation starts.

```ts
class NavigationStart extends RouterEvent {
  navigationTrigger?: "imperative" | "popstate" | "hashchange";
  restoredState?: { [k: string]: any; navigationId: number } | null;

  toString(): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/events.ts#L58-L106)

## publicApi

## Properties

| Name                                                                                  | Type                                          | Description                                                                |
| ------------------------------------------------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------- |
| navigationTrigger                                                                     | `"imperative"                                 | "popstate"                                                                 | "hashchange"` | Identifies the call or event that triggered the navigation. |
| An `imperative` trigger is a call to `router.navigateByUrl()` or `router.navigate()`. |
| restoredState                                                                         | `{ [k: string]: any; navigationId: number; }` | The navigation state that was previously supplied to the `pushState` call, |

when the navigation is triggered by a `popstate` event. Otherwise null.

The state object is defined by `NavigationExtras`, and contains any
developer-defined state value, as well as a unique ID that
the router assigns to every router transition/navigation.

From the perspective of the router, the router never "goes back".
When the user clicks on the back button in the browser,
a new navigation ID is created.

Use the ID in this previous-state object to differentiate between a newly created
state and one returned to by a `popstate` event, so that you can restore some
remembered state, such as scroll position. |

## Methods

### toString

```ts
toString(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/events.ts#L103-L105)
