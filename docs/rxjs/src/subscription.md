---
kind: ClassDeclaration
name: Subscription
module: src
---

# Subscription

## description

Represents a disposable resource, such as the execution of an Observable. A
Subscription has one important method, `unsubscribe`, that takes no argument
and just disposes the resource held by the subscription.

Additionally, subscriptions may be grouped together through the `add()`
method, which will attach a child Subscription to the current Subscription.
When a Subscription is unsubscribed, all its children (and its grandchildren)
will be unsubscribed as well.

```ts
class Subscription implements SubscriptionLike {
  public static EMPTY: Subscription = (function (empty: any) {
    empty.closed = true;
    return empty;
  })(new Subscription());
  public closed = false;

  unsubscribe(): void;
  add(teardown: TeardownLogic): void;
  remove(teardown: Exclude<TeardownLogic, void>): void;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subscription.ts#L18-L251)

## class

Subscription

## Methods

### unsubscribe

#### description (#unsubscribe-description)

Disposes the resources held by the subscription. May, for instance, cancel
an ongoing Observable execution or cancel any other type of work that
started when the Subscription was created.

```ts
unsubscribe(): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subscription.ts#L59-L125)

#### return (#unsubscribe-return)

{void}

### add

#### description (#add-description)

Adds a teardown to this subscription, so that teardown will be unsubscribed/called
when this subscription is unsubscribed. If this subscription is already {@link closed},
because it has already been unsubscribed, then whatever teardown is passed to it
will automatically be executed (unless the teardown itself is also a closed subscription).

Closed Subscriptions cannot be added as teardowns to any subscription. Adding a closed
subscription to a any subscription will result in no operation. (A noop).

Adding a subscription to itself, or adding `null` or `undefined` will not perform any
operation at all. (A noop).

`Subscription` instances that are added to this instance will automatically remove themselves
if they are unsubscribed. Functions and {@link Unsubscribable} objects that you wish to remove
will need to be removed manually with {@link remove}

```ts
add(teardown: TeardownLogic): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subscription.ts#L145-L170)

#### Parameters (#add-parameters)

| Name     | Type            | Description                                     |
| -------- | --------------- | ----------------------------------------------- |
| teardown | `TeardownLogic` | The teardown logic to add to this subscription. |

### remove

#### description (#remove-description)

Removes a teardown from this subscription that was previously added with the {@link add} method.

Note that `Subscription` instances, when unsubscribed, will automatically remove themselves
from every other `Subscription` they have been added to. This means that using the `remove` method
is not a common thing and should be used thoughtfully.

If you add the same teardown instance of a function or an unsubscribable object to a `Subcription` instance
more than once, you will need to call `remove` the same number of times to remove all instances.

All teardown instances are removed to free up memory upon unsubscription.

```ts
remove(teardown: Exclude<TeardownLogic, void>): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Subscription.ts#L238-L250)

#### Parameters (#remove-parameters)

| Name     | Type      | Description  |
| -------- | --------- | ------------ |
| teardown | `Function | Subscription | import("C:/Users/tdeschryver/dev/forks/rxjs/src/internal/types").Unsubscribable` | The teardown to remove from this subscription |

## Parameters

| Name   | Type           | Description         |
| ------ | -------------- | ------------------- |
| EMPTY  | `Subscription` | /\*_ @nocollapse _/ |
| closed | `boolean`      | /\*\*               |

- A flag to indicate whether this Subscription has already been unsubscribed.
  \*/ |
