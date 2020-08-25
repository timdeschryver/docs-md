---
kind: ClassDeclaration
name: ViewportScroller
module: common
---

# ViewportScroller

## description

Defines a scroll position manager. Implemented by `BrowserViewportScroller`.

```ts
class ViewportScroller {
  static ɵprov = ɵɵdefineInjectable({
    token: ViewportScroller,
    providedIn: "root",
    factory: () =>
      new BrowserViewportScroller(
        ɵɵinject(DOCUMENT),
        window,
        ɵɵinject(ErrorHandler)
      ),
  });

  abstract setOffset(offset: [number, number] | (() => [number, number])): void;
  abstract getScrollPosition(): [number, number];
  abstract scrollToPosition(position: [number, number]): void;
  abstract scrollToAnchor(anchor: string): void;
  abstract setHistoryScrollRestoration(
    scrollRestoration: "auto" | "manual"
  ): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/viewport_scroller.ts#L20-L62)

## publicApi

## Properties

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| ɵprov | `any` |             |

## Methods

### setOffset

#### description (#setOffset-description)

Configures the top offset used when scrolling to an anchor.

```ts
abstract setOffset(offset: [number, number]|(() => [number, number])): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/viewport_scroller.ts#L36-L36)

#### Parameters (#setOffset-parameters)

| Name   | Type              | Description               |
| ------ | ----------------- | ------------------------- |
| offset | `[number, number] | (() => [number, number])` | A position in screen coordinates (a tuple with x and y values) |

### getScrollPosition

#### description (#getScrollPosition-description)

Retrieves the current scroll position.

```ts
abstract getScrollPosition(): [number, number];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/viewport_scroller.ts#L42-L42)

#### returns (#getScrollPosition-returns)

A position in screen coordinates (a tuple with x and y values).

### scrollToPosition

#### description (#scrollToPosition-description)

Scrolls to a specified position.

```ts
abstract scrollToPosition(position: [number, number]): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/viewport_scroller.ts#L48-L48)

#### Parameters (#scrollToPosition-parameters)

| Name     | Type               | Description                                                     |
| -------- | ------------------ | --------------------------------------------------------------- |
| position | `[number, number]` | A position in screen coordinates (a tuple with x and y values). |

### scrollToAnchor

#### description (#scrollToAnchor-description)

Scrolls to an anchor element.

```ts
abstract scrollToAnchor(anchor: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/viewport_scroller.ts#L54-L54)

#### Parameters (#scrollToAnchor-parameters)

| Name   | Type     | Description                   |
| ------ | -------- | ----------------------------- |
| anchor | `string` | The ID of the anchor element. |

### setHistoryScrollRestoration

#### description (#setHistoryScrollRestoration-description)

Disables automatic scroll restoration provided by the browser.
See also [window.history.scrollRestoration
info](https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration).

```ts
abstract setHistoryScrollRestoration(scrollRestoration: 'auto'|'manual'): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/viewport_scroller.ts#L61-L61)

#### Parameters (#setHistoryScrollRestoration-parameters)

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| scrollRestoration | `"auto" | "manual"`   |  |
