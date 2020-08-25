---
kind: ClassDeclaration
name: SwPush
module: service-worker
---

# SwPush

## description

Subscribe and listen to
[Web Push
Notifications](https://developer.mozilla.org/en-US/docs/Web/API/Push_API/Best_Practices) through
Angular Service Worker.

```ts
class SwPush {
  readonly messages: Observable<object>;
  readonly notificationClicks: Observable<{
    action: string;
    notification: NotificationOptions & {
      title: string;
    };
  }>;
  readonly subscription: Observable<PushSubscription | null>;

  requestSubscription(options: {
    serverPublicKey: string;
  }): Promise<PushSubscription>;
  unsubscribe(): Promise<void>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/service-worker/src/push.ts#L92-L213)

## usageNotes

You can inject a `SwPush` instance into any component or service
as a dependency.

<code-example path="service-worker/push/module.ts" region="inject-sw-push"
header="app.component.ts"></code-example>

To subscribe, call `SwPush.requestSubscription()`, which asks the user for permission.
The call returns a `Promise` with a new
[`PushSubscription`](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription)
instance.

<code-example path="service-worker/push/module.ts" region="subscribe-to-push"
header="app.component.ts"></code-example>

A request is rejected if the user denies permission, or if the browser
blocks or does not support the Push API or ServiceWorkers.
Check `SwPush.isEnabled` to confirm status.

Invoke Push Notifications by pushing a message with the following payload.

```ts
{
"notification": {
"actions": NotificationAction[],
"badge": USVString
"body": DOMString,
"data": any,
"dir": "auto"|"ltr"|"rtl",
"icon": USVString,
"image": USVString,
"lang": DOMString,
"renotify": boolean,
"requireInteraction": boolean,
"silent": boolean,
"tag": DOMString,
"timestamp": DOMTimeStamp,
"title": DOMString,
"vibrate": number[]
}
}
```

Only `title` is required. See `Notification`
[instance
properties](https://developer.mozilla.org/en-US/docs/Web/API/Notification#Instance_properties).

While the subscription is active, Service Worker listens for
[PushEvent](https://developer.mozilla.org/en-US/docs/Web/API/PushEvent)
occurrences and creates
[Notification](https://developer.mozilla.org/en-US/docs/Web/API/Notification)
instances in response.

Unsubscribe using `SwPush.unsubscribe()`.

An application can subscribe to `SwPush.notificationClicks` observable to be notified when a user
clicks on a notification. For example:

<code-example path="service-worker/push/module.ts" region="subscribe-to-notification-clicks"
header="app.component.ts"></code-example>

## see

[Push Notifications](https://developers.google.com/web/fundamentals/codelabs/push-notifications/)
[Angular Push Notifications](https://blog.angular-university.io/angular-push-notifications/)
[MDN: Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
[MDN: Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)
[MDN: Web Push API Notifications best practices](https://developer.mozilla.org/en-US/docs/Web/API/Push_API/Best_Practices)

## publicApi

## Properties

| Name               | Type  | Description                                                                                  |
| ------------------ | ----- | -------------------------------------------------------------------------------------------- |
| messages           | `any` | Emits the payloads of the received push notification messages.                               |
| notificationClicks | `any` | Emits the payloads of the received push notification messages as well as the action the user |

interacted with. If no action was used the `action` property contains an empty string `''`.

Note that the `notification` property does **not** contain a
[Notification][mozilla notification] object but rather a
[NotificationOptions](https://notifications.spec.whatwg.org/#dictdef-notificationoptions)
object that also includes the `title` of the [Notification][mozilla notification] object.

[Mozilla Notification]: https://developer.mozilla.org/en-US/docs/Web/API/Notification |
| subscription | `any` | Emits the currently active
[PushSubscription](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription)
associated to the Service Worker registration or `null` if there is no subscription. |

## Methods

### requestSubscription

#### description (#requestSubscription-description)

Subscribes to Web Push Notifications,
after requesting and receiving user permission.

```ts
requestSubscription(options: {serverPublicKey: string}): Promise<PushSubscription>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/service-worker/src/push.ts#L162-L180)

#### Parameters (#requestSubscription-parameters)

| Name    | Type                           | Description                                        |
| ------- | ------------------------------ | -------------------------------------------------- |
| options | `{ serverPublicKey: string; }` | An object containing the `serverPublicKey` string. |

#### returns (#requestSubscription-returns)

A Promise that resolves to the new subscription object.

### unsubscribe

#### description (#unsubscribe-description)

Unsubscribes from Service Worker push notifications.

```ts
unsubscribe(): Promise<void>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/service-worker/src/push.ts#L188-L208)

#### returns (#unsubscribe-returns)

A Promise that is resolved when the operation succeeds, or is rejected if there is no
active subscription or the unsubscribe operation fails.
