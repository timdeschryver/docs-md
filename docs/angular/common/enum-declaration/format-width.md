---
kind: EnumDeclaration
name: FormatWidth
module: common
---

# FormatWidth

## description

String widths available for date-time formats.
The specific character widths are locale-specific.
Examples are given for `en-US`.

```ts
export enum FormatWidth {
  /**
   * For `en-US`, 'M/d/yy, h:mm a'`
   * (Example: `6/15/15, 9:03 AM`)
   */
  Short,
  /**
   * For `en-US`, `'MMM d, y, h:mm:ss a'`
   * (Example: `Jun 15, 2015, 9:03:01 AM`)
   */
  Medium,
  /**
   * For `en-US`, `'MMMM d, y, h:mm:ss a z'`
   * (Example: `June 15, 2015 at 9:03:01 AM GMT+1`)
   */
  Long,
  /**
   * For `en-US`, `'EEEE, MMMM d, y, h:mm:ss a zzzz'`
   * (Example: `Monday, June 15, 2015 at 9:03:01 AM GMT+01:00`)
   */
  Full,
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L89-L110)

## see

`getLocaleDateFormat()`
` getLocaleTimeFormat()``  `getLocaleDateTimeFormat()`
[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
