---
kind: ClassDeclaration
name: NgZone
module: core
---

# NgZone

## description

An injectable service for executing work inside or outside of the Angular zone.

The most common use of this service is to optimize performance when starting a work consisting of
one or more asynchronous tasks that don't require UI updates or error handling to be handled by
Angular. Such tasks can be kicked off via {@link #runOutsideAngular} and if needed, these tasks
can reenter the Angular zone via {@link #run}.

<!-- TODO: add/fix links to:
- docs explaining zones and the use of zones in Angular and change-detection
- link to runOutsideAngular/run (throughout this file!)
-->

```ts
class NgZone {
  readonly hasPendingMacrotasks: boolean = false;
  readonly hasPendingMicrotasks: boolean = false;
  readonly isStable: boolean = true;
  readonly onUnstable: EventEmitter<any> = new EventEmitter(false);
  readonly onMicrotaskEmpty: EventEmitter<any> = new EventEmitter(false);
  readonly onStable: EventEmitter<any> = new EventEmitter(false);
  readonly onError: EventEmitter<any> = new EventEmitter(false);

  static isInAngularZone(): boolean;
  static assertInAngularZone(): void;
  static assertNotInAngularZone(): void;
  run<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any[]): T;
  runTask<T>(
    fn: (...args: any[]) => T,
    applyThis?: any,
    applyArgs?: any[],
    name?: string
  ): T;
  runGuarded<T>(
    fn: (...args: any[]) => T,
    applyThis?: any,
    applyArgs?: any[]
  ): T;
  runOutsideAngular<T>(fn: (...args: any[]) => T): T;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/zone/ng_zone.ts#L88-L229)

## usageNotes

### Example

```
import {Component, NgZone} from '@angular/core';
import {NgIf} from '@angular/common';

## Component({

selector: 'ng-zone-demo',
template: `
<h2>Demo: NgZone</h2>

<p>Progress: {{progress}}%</p>
<p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>

<button (click)="processWithinAngularZone()">Process within Angular zone</button>
<button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
`,
})
export class NgZoneDemo {
progress: number = 0;
label: string;

constructor(private _ngZone: NgZone) {}

// Loop inside the Angular zone
// so the UI DOES refresh after each setTimeout cycle
processWithinAngularZone() {
this.label = 'inside';
this.progress = 0;
this._increaseProgress(() => console.log('Inside Done!'));
}

// Loop outside of the Angular zone
// so the UI DOES NOT refresh after each setTimeout cycle
processOutsideOfAngularZone() {
this.label = 'outside';
this.progress = 0;
this._ngZone.runOutsideAngular(() => {
this._increaseProgress(() => {
// reenter the Angular zone and display done
this._ngZone.run(() => { console.log('Outside Done!'); });
});
});
}

_increaseProgress(doneCallback: () => void) {
this.progress += 1;
console.log(`Current progress: ${this.progress}%`);

if (this.progress < 100) {
window.setTimeout(() => this._increaseProgress(doneCallback), 10);
} else {
doneCallback();
}
}
}
```

## publicApi

## Properties

| Name                 | Type                | Description                                                                |
| -------------------- | ------------------- | -------------------------------------------------------------------------- |
| hasPendingMacrotasks | `boolean`           |                                                                            |
| hasPendingMicrotasks | `boolean`           |                                                                            |
| isStable             | `boolean`           | Whether there are no outstanding microtasks or macrotasks.                 |
| onUnstable           | `EventEmitter<any>` | Notifies when code enters Angular Zone. This gets fired first on VM Turn.  |
| onMicrotaskEmpty     | `EventEmitter<any>` | Notifies when there is no more microtasks enqueued in the current VM Turn. |

This is a hint for Angular to do change detection, which may enqueue more microtasks.
For this reason this event can fire multiple times per VM Turn. |
| onStable | `EventEmitter<any>` | Notifies when the last `onMicrotaskEmpty` has run and there are no more microtasks, which
implies we are about to relinquish VM turn.
This event gets called just once. |
| onError | `EventEmitter<any>` | Notifies that an error has been delivered. |

## Methods

### isInAngularZone

```ts
static isInAngularZone(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/zone/ng_zone.ts#L151-L153)

### assertInAngularZone

```ts
static assertInAngularZone(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/zone/ng_zone.ts#L155-L159)

### assertNotInAngularZone

```ts
static assertNotInAngularZone(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/zone/ng_zone.ts#L161-L165)

### run

#### description (#run-description)

Executes the `fn` function synchronously within the Angular zone and returns value returned by
the function.

Running functions via `run` allows you to reenter Angular zone from a task that was executed
outside of the Angular zone (typically started via {@link #runOutsideAngular}).

Any future tasks or microtasks scheduled from within this function will continue executing from
within the Angular zone.

If a synchronous error happens it will be rethrown and not reported via `onError`.

```ts
run<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any[]): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/zone/ng_zone.ts#L179-L181)

#### Parameters (#run-parameters)

| Name      | Type                    | Description |
| --------- | ----------------------- | ----------- |
| fn        | `(...args: any[]) => T` |             |
| applyThis | `any`                   |             |
| applyArgs | `any[]`                 |             |

### runTask

#### description (#runTask-description)

Executes the `fn` function synchronously within the Angular zone as a task and returns value
returned by the function.

Running functions via `run` allows you to reenter Angular zone from a task that was executed
outside of the Angular zone (typically started via {@link #runOutsideAngular}).

Any future tasks or microtasks scheduled from within this function will continue executing from
within the Angular zone.

If a synchronous error happens it will be rethrown and not reported via `onError`.

```ts
runTask<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any[], name?: string): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/zone/ng_zone.ts#L195-L203)

#### Parameters (#runTask-parameters)

| Name      | Type                    | Description |
| --------- | ----------------------- | ----------- |
| fn        | `(...args: any[]) => T` |             |
| applyThis | `any`                   |             |
| applyArgs | `any[]`                 |             |
| name      | `string`                |             |

### runGuarded

#### description (#runGuarded-description)

Same as `run`, except that synchronous errors are caught and forwarded via `onError` and not
rethrown.

```ts
runGuarded<T>(fn: (...args: any[]) => T, applyThis?: any, applyArgs?: any[]): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/zone/ng_zone.ts#L209-L211)

#### Parameters (#runGuarded-parameters)

| Name      | Type                    | Description |
| --------- | ----------------------- | ----------- |
| fn        | `(...args: any[]) => T` |             |
| applyThis | `any`                   |             |
| applyArgs | `any[]`                 |             |

### runOutsideAngular

#### description (#runOutsideAngular-description)

Executes the `fn` function synchronously in Angular's parent zone and returns value returned by
the function.

Running functions via {@link #runOutsideAngular} allows you to escape Angular's zone and do
work that
doesn't trigger Angular change-detection or is subject to Angular's error handling.

Any future tasks or microtasks scheduled from within this function will continue executing from
outside of the Angular zone.

Use {@link #run} to reenter the Angular zone and do work that updates the application model.

```ts
runOutsideAngular<T>(fn: (...args: any[]) => T): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/zone/ng_zone.ts#L226-L228)

#### Parameters (#runOutsideAngular-parameters)

| Name | Type                    | Description |
| ---- | ----------------------- | ----------- |
| fn   | `(...args: any[]) => T` |             |
