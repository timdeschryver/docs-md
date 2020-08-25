---
kind: ClassDeclaration
name: TranslocoLocaleService
module: src
---

# TranslocoLocaleService

```ts
class TranslocoLocaleService implements OnDestroy {
  localeChanges$: Observable<Locale>;

  getLocale();
  setLocale(locale: Locale);
  localizeDate(
    date: ValidDate,
    locale: Locale = this.getLocale(),
    options?: DateFormatOptions
  ): string;
  localizeNumber(
    value: number | string,
    type: NumberTypes,
    locale: Locale = this.getLocale(),
    options?: Intl.NumberFormatOptions
  ): string;
  _resolveCurrencyCode(locale: Locale = this.getLocale());
  ngOnDestroy();
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/transloco-locale.service.ts#L22-L125)

## Methods

### getLocale

```ts
getLocale();
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/transloco-locale.service.ts#L52-L54)

### setLocale

```ts
setLocale(locale: Locale);
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/transloco-locale.service.ts#L56-L63)

#### Parameters (#setLocale-parameters)

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| locale | `string` |             |

### localizeDate

#### description (#localizeDate-description)

Transform a date into the locale's date format.

The date expression: a `Date` object, a number
(milliseconds since UTC epoch), or an ISO string (https://www.w3.org/TR/NOTE-datetime).

```ts
localizeDate(date: ValidDate, locale: Locale = this.getLocale(), options?: DateFormatOptions): string;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/transloco-locale.service.ts#L79-L82)

#### example (#localizeDate-example)

localizeDate(new Date(2019, 9, 7, 12, 0, 0)) // 10/7/2019
localizeDate(date, 'en-US', { dateStyle: 'medium', timeStyle: 'medium' }) // Sep 10, 2019, 10:46:12 PM
localizeDate(date) 'en-US', { timeZone: 'UTC', timeStyle: 'full' } // 7:40:32 PM Coordinated Universal Time
localizeDate(1, 'en-US', { dateStyle: 'medium' }) // Jan 1, 1970
localizeDate('2019-02-08', 'en-US', { dateStyle: 'medium' }) // Feb 8, 2019

#### Parameters (#localizeDate-parameters)

| Name    | Type                | Description |
| ------- | ------------------- | ----------- |
| date    | `ValidDate`         |             |
| locale  | `string`            |             |
| options | `DateFormatOptions` |             |

### localizeNumber

#### description (#localizeNumber-description)

Transform a number into the locale's number format according to the number type.

localizeNumber(1234567890, 'decimal') // 1,234,567,890
localizeNumber(0.5, 'percent') // 50%
localizeNumber(1000, 'currency') // \$1,000.00

```ts
localizeNumber(  value: number | string,  type: NumberTypes,  locale: Locale = this.getLocale(),  options?: Intl.NumberFormatOptions ): string;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/transloco-locale.service.ts#L91-L102)

#### Parameters (#localizeNumber-parameters)

| Name    | Type                       | Description |
| ------- | -------------------------- | ----------- |
| value   | `string                    | number`     |  |
| type    | `NumberTypes`              |             |
| locale  | `string`                   |             |
| options | `Intl.NumberFormatOptions` |             |

### \_resolveCurrencyCode

```ts
_resolveCurrencyCode(locale: Locale = this.getLocale());
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/transloco-locale.service.ts#L107-L109)

#### internal (#\_resolveCurrencyCode-internal)

#### Parameters (#\_resolveCurrencyCode-parameters)

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| locale | `string` |             |

### ngOnDestroy

```ts
ngOnDestroy();
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/transloco-locale.service.ts#L122-L124)

## Parameters

| Name            | Type  | Description |
| --------------- | ----- | ----------- |
| localeChanges\$ | `any` |             |
