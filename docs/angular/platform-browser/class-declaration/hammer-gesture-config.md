---
kind: ClassDeclaration
name: HammerGestureConfig
module: platform-browser
---

# HammerGestureConfig

## description

An injectable [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
for gesture recognition. Configures specific event recognition.

```ts
class HammerGestureConfig {
  events: string[] = [];
  overrides: { [key: string]: Object } = {};
  options?: {
    cssProps?: any;
    domEvents?: boolean;
    enable?: boolean | ((manager: any) => boolean);
    preset?: any[];
    touchAction?: string;
    recognizers?: any[];
    inputClass?: any;
    inputTarget?: EventTarget;
  };

  buildHammer(element: HTMLElement): HammerInstance;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/hammer_gestures.ts#L92-L155)

## publicApi

## Properties

| Name   | Type       | Description                                                        |
| ------ | ---------- | ------------------------------------------------------------------ |
| events | `string[]` | A set of supported event names for gestures to be used in Angular. |

Angular supports all built-in recognizers, as listed in
[HammerJS documentation](http://hammerjs.github.io/). |
| overrides | `{ [key: string]: Object; }` | Maps gesture event names to a set of configuration options
that specify overrides to the default values for specific properties.

The key is a supported event name to be configured,
and the options object contains a set of properties, with override values
to be applied to the named recognizer event.
For example, to disable recognition of the rotate event, specify
`{"rotate": {"enable": false}}`.

Properties that are not present take the HammerJS default values.
For information about which properties are supported for which events,
and their allowed and default values, see
[HammerJS documentation](http://hammerjs.github.io/). |
| options | `{ cssProps?: any; domEvents?: boolean; enable?: boolean | ((manager: any) => boolean); preset?: any[]; touchAction?: string; recognizers?: any[]; inputClass?: any; inputTarget?: EventTarget; }` | Properties whose default values can be overridden for a given event.
Different sets of properties apply to different events.
For information about which properties are supported for which events,
and their allowed and default values, see
[HammerJS documentation](http://hammerjs.github.io/). |

## Methods

### buildHammer

#### description (#buildHammer-description)

Creates a [HammerJS Manager](http://hammerjs.github.io/api/#hammer.manager)
and attaches it to a given HTML element.

```ts
buildHammer(element: HTMLElement): HammerInstance;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/hammer_gestures.ts#L143-L154)

#### Parameters (#buildHammer-parameters)

| Name    | Type          | Description                               |
| ------- | ------------- | ----------------------------------------- |
| element | `HTMLElement` | The element that will recognize gestures. |

#### returns (#buildHammer-returns)

A HammerJS event-manager object.
