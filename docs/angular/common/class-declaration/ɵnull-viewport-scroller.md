---
kind: ClassDeclaration
name: ɵNullViewportScroller
module: common
---

# ɵNullViewportScroller

## description

Provides an empty implementation of the viewport scroller. This will
live in @angular/common as it will be used by both platform-server and platform-webworker.

```ts
class NullViewportScroller implements ViewportScroller {
  getScrollPosition(): [number, number];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/viewport_scroller.ts#L180-L207)

## Methods

### setOffset

#### description (#setOffset-description)

Empty implementation

```ts
setOffset(offset: [number, number]|(() => [number, number])): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/viewport_scroller.ts#L184-L184)

#### Parameters (#setOffset-parameters)

| Name   | Type              | Description               |
| ------ | ----------------- | ------------------------- |
| offset | `[number, number] | (() => [number, number])` |  |

### getScrollPosition

#### description (#getScrollPosition-description)

Empty implementation

```ts
getScrollPosition(): [number, number];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/viewport_scroller.ts#L189-L191)

### scrollToPosition

#### description (#scrollToPosition-description)

Empty implementation

```ts
scrollToPosition(position: [number, number]): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/viewport_scroller.ts#L196-L196)

#### Parameters (#scrollToPosition-parameters)

| Name     | Type               | Description |
| -------- | ------------------ | ----------- |
| position | `[number, number]` |             |

### scrollToAnchor

#### description (#scrollToAnchor-description)

Empty implementation

```ts
scrollToAnchor(anchor: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/viewport_scroller.ts#L201-L201)

#### Parameters (#scrollToAnchor-parameters)

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| anchor | `string` |             |

### setHistoryScrollRestoration

#### description (#setHistoryScrollRestoration-description)

Empty implementation

```ts
setHistoryScrollRestoration(scrollRestoration: 'auto'|'manual'): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/viewport_scroller.ts#L206-L206)

#### Parameters (#setHistoryScrollRestoration-parameters)

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| scrollRestoration | `"auto" | "manual"`   |  |
