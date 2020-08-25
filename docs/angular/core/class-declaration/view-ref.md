---
kind: ClassDeclaration
name: ViewRef
module: core
---

# ViewRef

## description

Represents an Angular [view](guide/glossary#view "Definition").

```ts
class ViewRef extends ChangeDetectorRef {
  abstract destroy(): void;
  abstract onDestroy(callback: Function): any /** TODO #9100 */;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/view_ref.ts#L19-L38)

## see

{@link ChangeDetectorRef#usage-notes Change detection usage}

## publicApi

## Methods

### destroy

#### description (#destroy-description)

Destroys this view and all of the data structures associated with it.

```ts
abstract destroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/view_ref.ts#L23-L23)

### onDestroy

#### description (#onDestroy-description)

A lifecycle hook that provides additional developer-defined cleanup
functionality for views.

```ts
abstract onDestroy(callback: Function): any /** TODO #9100 */;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/view_ref.ts#L37-L37)

#### Parameters (#onDestroy-parameters)

| Name     | Type       | Description                                              |
| -------- | ---------- | -------------------------------------------------------- |
| callback | `Function` | A handler function that cleans up developer-defined data |
