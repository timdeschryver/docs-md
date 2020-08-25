---
kind: ClassDeclaration
name: QueryList
module: core
---

# QueryList

## description

An unmodifiable list of items that Angular keeps up to date when the state
of the application changes.

The type of object that {@link ViewChildren}, {@link ContentChildren}, and {@link QueryList}
provide.

Implements an iterable interface, therefore it can be used in both ES6
javascript `for (var i of items)` loops as well as in Angular templates with
`*ngFor="let i of myList"`.

Changes can be observed by subscribing to the changes `Observable`.

NOTE: In the future this class will implement an `Observable` interface.

```ts
class QueryList<T> implements Iterable<T> {
  public readonly dirty = true;
  public readonly changes: Observable<any> = new EventEmitter();
  readonly length: number = 0;
  readonly first!: T;
  readonly last!: T;
  [Symbol.iterator]!: () => Iterator<T>;

  map<U>(fn: (item: T, index: number, array: T[]) => U): U[];
  filter(fn: (item: T, index: number, array: T[]) => boolean): T[];
  find(fn: (item: T, index: number, array: T[]) => boolean): T | undefined;
  reduce<U>(
    fn: (prevValue: U, curValue: T, curIndex: number, array: T[]) => U,
    init: U
  ): U;
  forEach(fn: (item: T, index: number, array: T[]) => void): void;
  some(fn: (value: T, index: number, array: T[]) => boolean): boolean;
  toArray(): T[];
  toString(): string;
  reset(resultsTree: Array<T | any[]>): void;
  notifyOnChanges(): void;
  setDirty();
  destroy(): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/query_list.ts#L45-L164)

## usageNotes

### Example

```typescript
## Component({...})

class Container {
## ViewChildren(Item)
items:QueryList<Item>;
}
```

## publicApi

## Properties

| Name              | Type        | Description |
| ----------------- | ----------- | ----------- |
| dirty             | `true`      |             |
| changes           | `any`       |             |
| length            | `number`    |             |
| first             | `T`         |             |
| last              | `T`         |             |
| [Symbol.iterator] | `() => any` |             |

## Methods

### map

#### description (#map-description)

See
[Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

```ts
map<U>(fn: (item: T, index: number, array: T[]) => U): U[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/query_list.ts#L70-L72)

#### Parameters (#map-parameters)

| Name | Type                                        | Description |
| ---- | ------------------------------------------- | ----------- |
| fn   | `(item: T, index: number, array: T[]) => U` |             |

### filter

#### description (#filter-description)

See
[Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```ts
filter(fn: (item: T, index: number, array: T[]) => boolean): T[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/query_list.ts#L78-L80)

#### Parameters (#filter-parameters)

| Name | Type                                              | Description |
| ---- | ------------------------------------------------- | ----------- |
| fn   | `(item: T, index: number, array: T[]) => boolean` |             |

### find

#### description (#find-description)

See
[Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

```ts
find(fn: (item: T, index: number, array: T[]) => boolean): T|undefined;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/query_list.ts#L86-L88)

#### Parameters (#find-parameters)

| Name | Type                                              | Description |
| ---- | ------------------------------------------------- | ----------- |
| fn   | `(item: T, index: number, array: T[]) => boolean` |             |

### reduce

#### description (#reduce-description)

See
[Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

```ts
reduce<U>(fn: (prevValue: U, curValue: T, curIndex: number, array: T[]) => U, init: U): U;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/query_list.ts#L94-L96)

#### Parameters (#reduce-parameters)

| Name | Type                                                             | Description |
| ---- | ---------------------------------------------------------------- | ----------- |
| fn   | `(prevValue: U, curValue: T, curIndex: number, array: T[]) => U` |             |
| init | `U`                                                              |             |

### forEach

#### description (#forEach-description)

See
[Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```ts
forEach(fn: (item: T, index: number, array: T[]) => void): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/query_list.ts#L102-L104)

#### Parameters (#forEach-parameters)

| Name | Type                                           | Description |
| ---- | ---------------------------------------------- | ----------- |
| fn   | `(item: T, index: number, array: T[]) => void` |             |

### some

#### description (#some-description)

See
[Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

```ts
some(fn: (value: T, index: number, array: T[]) => boolean): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/query_list.ts#L110-L112)

#### Parameters (#some-parameters)

| Name | Type                                               | Description |
| ---- | -------------------------------------------------- | ----------- |
| fn   | `(value: T, index: number, array: T[]) => boolean` |             |

### toArray

#### description (#toArray-description)

Returns a copy of the internal results list as an Array.

```ts
toArray(): T[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/query_list.ts#L117-L119)

### toString

```ts
toString(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/query_list.ts#L121-L123)

### reset

#### description (#reset-description)

Updates the stored data of the query list, and resets the `dirty` flag to `false`, so that
on change detection, it will not notify of changes to the queries, unless a new change
occurs.

```ts
reset(resultsTree: Array<T|any[]>): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/query_list.ts#L132-L138)

#### Parameters (#reset-parameters)

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| resultsTree | `(any[] | T)[]`       | The query results to store |

### notifyOnChanges

#### description (#notifyOnChanges-description)

Triggers a change event by emitting on the `changes` {@link EventEmitter}.

```ts
notifyOnChanges(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/query_list.ts#L143-L145)

### setDirty

```ts
setDirty();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/query_list.ts#L148-L150)

### destroy

```ts
destroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/query_list.ts#L153-L156)
