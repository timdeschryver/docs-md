---
kind: ClassDeclaration
name: ApplicationRef
module: core
---

# ApplicationRef

## description

A reference to an Angular application running on a page.

```ts
class ApplicationRef {
  public readonly componentTypes: Type<any>[] = [];
  public readonly components: ComponentRef<any>[] = [];
  public readonly isStable!: Observable<boolean>;

  bootstrap<C>(
    componentOrFactory: ComponentFactory<C> | Type<C>,
    rootSelectorOrNode?: string | any
  ): ComponentRef<C>;
  tick(): void;
  attachView(viewRef: ViewRef): void;
  detachView(viewRef: ViewRef): void;
  ngOnDestroy();
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/application_ref.ts#L562-L789)

## usageNotes

{@a is-stable-examples}

### isStable examples and caveats

Note two important points about `isStable`, demonstrated in the examples below:

- the application will never be stable if you start any kind
  of recurrent asynchronous task when the application starts
  (for example for a polling process, started with a `setInterval`, a `setTimeout`
  or using RxJS operators like `interval`);
- the `isStable` Observable runs outside of the Angular zone.

Let's imagine that you start a recurrent task
(here incrementing a counter, using RxJS `interval`),
and at the same time subscribe to `isStable`.

```
constructor(appRef: ApplicationRef) {
appRef.isStable.pipe(
filter(stable => stable)
).subscribe(() => console.log('App is stable now');
interval(1000).subscribe(counter => console.log(counter));
}
```

In this example, `isStable` will never emit `true`,
and the trace "App is stable now" will never get logged.

If you want to execute something when the app is stable,
you have to wait for the application to be stable
before starting your polling process.

```
constructor(appRef: ApplicationRef) {
appRef.isStable.pipe(
first(stable => stable),
tap(stable => console.log('App is stable now')),
switchMap(() => interval(1000))
).subscribe(counter => console.log(counter));
}
```

In this example, the trace "App is stable now" will be logged
and then the counter starts incrementing every second.

Note also that this Observable runs outside of the Angular zone,
which means that the code in the subscription
to this Observable will not trigger the change detection.

Let's imagine that instead of logging the counter value,
you update a field of your component
and display it in its template.

```
constructor(appRef: ApplicationRef) {
appRef.isStable.pipe(
first(stable => stable),
switchMap(() => interval(1000))
).subscribe(counter => this.value = counter);
}
```

As the `isStable` Observable runs outside the zone,
the `value` field will be updated properly,
but the template will not be refreshed!

You'll have to manually trigger the change detection to update the template.

```
constructor(appRef: ApplicationRef, cd: ChangeDetectorRef) {
appRef.isStable.pipe(
first(stable => stable),
switchMap(() => interval(1000))
).subscribe(counter => {
this.value = counter;
cd.detectChanges();
});
}
```

Or make the subscription callback run inside the zone.

```
constructor(appRef: ApplicationRef, zone: NgZone) {
appRef.isStable.pipe(
first(stable => stable),
switchMap(() => interval(1000))
).subscribe(counter => zone.run(() => this.value = counter));
}
```

## publicApi

## Properties

| Name                                                         | Type                  | Description                                                                      |
| ------------------------------------------------------------ | --------------------- | -------------------------------------------------------------------------------- |
| componentTypes                                               | `Type<any>[]`         | Get a list of component types registered to this application.                    |
| This list is populated even before the component is created. |
| components                                                   | `ComponentRef<any>[]` | Get a list of components registered to this application.                         |
| isStable                                                     | `any`                 | Returns an Observable that indicates when the application is stable or unstable. |

## Methods

### bootstrap

#### description (#bootstrap-description)

Bootstrap a new component at the root level of the application.

```ts
bootstrap<C>(componentOrFactory: ComponentFactory<C>|Type<C>, rootSelectorOrNode?: string|any):   ComponentRef<C>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/application_ref.ts#L671-L707)

#### usageNotes (#bootstrap-usage-notes)

### Bootstrap process

When bootstrapping a new root component into an application, Angular mounts the
specified application component onto DOM elements identified by the componentType's
selector and kicks off automatic change detection to finish initializing the component.

Optionally, a component can be mounted onto a DOM element that does not match the
componentType's selector.

### Example

{@example core/ts/platform/platform.ts region='longform'}

#### Parameters (#bootstrap-parameters)

| Name               | Type                 | Description |
| ------------------ | -------------------- | ----------- |
| componentOrFactory | `ComponentFactory<C> | Type<C>`    |  |
| rootSelectorOrNode | `any`                |             |

### tick

#### description (#tick-description)

Invoke this method to explicitly process change detection and its side-effects.

In development mode, `tick()` also performs a second change detection cycle to ensure that no
further changes are detected. If additional changes are picked up during this second cycle,
bindings in the app have side-effects that cannot be resolved in a single change detection
pass.
In this case, Angular throws an error, since an Angular application can only have one change
detection pass during which all change detection must complete.

```ts
tick(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/application_ref.ts#L719-L740)

### attachView

#### description (#attachView-description)

Attaches a view so that it will be dirty checked.
The view will be automatically detached when it is destroyed.
This will throw if the view is already attached to a ViewContainer.

```ts
attachView(viewRef: ViewRef): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/application_ref.ts#L747-L751)

#### Parameters (#attachView-parameters)

| Name    | Type      | Description |
| ------- | --------- | ----------- |
| viewRef | `ViewRef` |             |

### detachView

#### description (#detachView-description)

Detaches a view from dirty checking again.

```ts
detachView(viewRef: ViewRef): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/application_ref.ts#L756-L760)

#### Parameters (#detachView-parameters)

| Name    | Type      | Description |
| ------- | --------- | ----------- |
| viewRef | `ViewRef` |             |

### ngOnDestroy

```ts
ngOnDestroy();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/application_ref.ts#L778-L781)
