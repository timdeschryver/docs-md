---
kind: InterfaceDeclaration
name: DateFormatOptions
module: src
---

# DateFormatOptions

## description

Supported Intl calender types

```ts
interface DateFormatOptions {
  dateStyle?: DateFormatStyles;
  timeStyle?: DateFormatStyles;
  fractionalSecondDigits?: 0 | 1 | 2 | 3;
  dayPeriod?: DateStringFormats;
  hour12?: boolean;
  localeMatcher?: "lookup" | "best fit";
  formatMatcher?: "lookup" | "best fit";
  weekday?: DateStringFormats;
  era?: DateStringFormats;
  year?: DateNumberFormats;
  month?: DateStringFormats | DateNumberFormats;
  day?: DateNumberFormats;
  hour?: DateNumberFormats;
  minute?: DateNumberFormats;
  second?: DateNumberFormats;
  timeZone?: Intl.DateTimeFormatOptions["timeZone"];
  timeZoneName?: TimezoneNameFormats;
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/transloco-locale.types.ts#L56-L125)
