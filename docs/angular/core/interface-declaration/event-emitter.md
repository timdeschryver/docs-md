---
kind: InterfaceDeclaration
name: EventEmitter
module: core
---

# EventEmitter

## description

Use in components with the `@Output` directive to emit custom events
synchronously or asynchronously, and register handlers for those events
by subscribing to an instance.

```ts
interface EventEmitter<T> {
  __isAsync: boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/event_emitter.ts#L64-L93)

## usageNotes

Extends
[RxJS `Subject`](https://rxjs.dev/api/index/class/Subject)
for Angular by adding the `emit()` method.

In the following example, a component defines two output properties
that create event emitters. When the title is clicked, the emitter
emits an open or close event to toggle the current visibility state.

```html
## Component({ selector: 'zippy', template: `
<div class="zippy">
  <div (click)="toggle()">Toggle</div>
  <div [hidden]="!visible">
    <ng-content></ng-content>
  </div>
</div>
`}) export class Zippy { visible: boolean = true; ## Output() open:
EventEmitter<any>
  = new EventEmitter(); close: EventEmitter<any>
    = new EventEmitter(); toggle() { this.visible = !this.visible; if
    (this.visible) { this.open.emit(null); } else { this.close.emit(null); } }
    }</any
  ></any
>
```

Access the event object with the `$event` argument passed to the output event
handler:

```html
<zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
```

## see

[Observables in Angular](guide/observables-in-angular)

## publicApi

## Properties

| Name        | Type      | Description |
| ----------- | --------- | ----------- |
| \_\_isAsync | `boolean` |             |
