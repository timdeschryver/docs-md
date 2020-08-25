---
kind: ClassDeclaration
name: SlicePipe
module: common
---

# SlicePipe

## description

Creates a new `Array` or `String` containing a subset (slice) of the elements.

```ts
class SlicePipe implements PipeTransform {
  transform(value: any, start: number, end?: number): any;
  transform<T>(value: ReadonlyArray<T>, start: number, end?: number): Array<T>;
  transform(value: string, start: number, end?: number): string;
  transform(value: null, start: number, end?: number): null;
  transform(value: undefined, start: number, end?: number): undefined;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/slice_pipe.ts#L47-L81)

## ngModule

CommonModule

## usageNotes

All behavior is based on the expected behavior of the JavaScript API `Array.prototype.slice()`
and `String.prototype.slice()`.

When operating on an `Array`, the returned `Array` is always a copy even when all
the elements are being returned.

When operating on a blank value, the pipe returns the blank value.

### List Example

This `ngFor` example:

{@example common/pipes/ts/slice_pipe.ts region='SlicePipe_list'}

produces the following:

```html
<li>b</li>
<li>c</li>
```

### String Examples

{@example common/pipes/ts/slice_pipe.ts region='SlicePipe_string'}

## publicApi

## Methods

### transform

```ts
transform(value: any, start: number, end?: number): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/slice_pipe.ts#L68-L76)

#### Parameters (#transform-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| value | `any`    |             |
| start | `number` |             |
| end   | `number` |             |

### transform

```ts
transform<T>(value: ReadonlyArray<T>, start: number, end?: number): Array<T>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/slice_pipe.ts#L64-L64)

#### Parameters (#transform-parameters)

| Name  | Type           | Description                                 |
| ----- | -------------- | ------------------------------------------- |
| value | `readonly T[]` | a list or a string to be sliced.            |
| start | `number`       | the starting index of the subset to return: |
| end   | `number`       | the ending index of the subset to return:   |

### transform

```ts
transform(value: string, start: number, end?: number): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/slice_pipe.ts#L65-L65)

#### Parameters (#transform-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| value | `string` |             |
| start | `number` |             |
| end   | `number` |             |

### transform

```ts
transform(value: null, start: number, end?: number): null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/slice_pipe.ts#L66-L66)

#### Parameters (#transform-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| value | `null`   |             |
| start | `number` |             |
| end   | `number` |             |

### transform

```ts
transform(value: undefined, start: number, end?: number): undefined;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/slice_pipe.ts#L67-L67)

#### Parameters (#transform-parameters)

| Name  | Type        | Description |
| ----- | ----------- | ----------- |
| value | `undefined` |             |
| start | `number`    |             |
| end   | `number`    |             |
