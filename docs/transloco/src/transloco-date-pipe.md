---
kind: ClassDeclaration
name: TranslocoDatePipe
module: src
---

# TranslocoDatePipe

```ts
class TranslocoDatePipe
  extends TranslocoLocalePipe
  implements PipeTransform, OnDestroy {
  transform(date: ValidDate, options: DateFormatOptions = {}, locale?: Locale);
  ngOnDestroy(): void;
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/pipes/transloco-date.pipe.ts#L9-L49)

## Methods

### transform

#### description (#transform-description)

Transform a date into the locale's date format.

The date expression: a `Date` object, a number
(milliseconds since UTC epoch), or an ISO string (https://www.w3.org/TR/NOTE-datetime).

```ts
transform(date: ValidDate, options: DateFormatOptions = {}, locale?: Locale);
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/pipes/transloco-date.pipe.ts#L36-L44)

#### example (#transform-example)

date | translocoDate: {} : en-US // 9/10/2019
date | translocoDate: { dateStyle: 'medium', timeStyle: 'medium' } : en-US // Sep 10, 2019, 10:46:12 PM
date | translocoDate: { timeZone: 'UTC', timeStyle: 'full' } : en-US // 7:40:32 PM Coordinated Universal Time
1 | translocoDate: { dateStyle: 'medium' } // Jan 1, 1970
'2019-02-08' | translocoDate: { dateStyle: 'medium' } // Feb 8, 2019

#### Parameters (#transform-parameters)

| Name    | Type                | Description |
| ------- | ------------------- | ----------- |
| date    | `ValidDate`         |             |
| options | `DateFormatOptions` |             |
| locale  | `string`            |             |

### ngOnDestroy

```ts
ngOnDestroy(): void;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-locale/src/lib/pipes/transloco-date.pipe.ts#L46-L48)
