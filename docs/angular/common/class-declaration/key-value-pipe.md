---
kind: ClassDeclaration
name: KeyValuePipe
module: common
---

# KeyValuePipe

## description

Transforms Object or Map into an array of key value pairs.

The output array will be ordered by keys.
By default the comparator will be by Unicode point value.
You can optionally pass a compareFn if your keys are complex types.

```ts
class KeyValuePipe implements PipeTransform {
  transform<K, V>(
    input: null | { [key: string]: V; [key: number]: V } | ReadonlyMap<K, V>,
    compareFn: (
      a: KeyValue<K, V>,
      b: KeyValue<K, V>
    ) => number = defaultComparator
  ): Array<KeyValue<K, V>> | null;
  transform<K, V>(
    input: null,
    compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number
  ): null;
  transform<V>(
    input: { [key: string]: V } | ReadonlyMap<string, V>,
    compareFn?: (a: KeyValue<string, V>, b: KeyValue<string, V>) => number
  ): Array<KeyValue<string, V>>;
  transform<V>(
    input: { [key: string]: V } | ReadonlyMap<string, V> | null,
    compareFn?: (a: KeyValue<string, V>, b: KeyValue<string, V>) => number
  ): Array<KeyValue<string, V>> | null;
  transform<V>(
    input: { [key: number]: V } | ReadonlyMap<number, V>,
    compareFn?: (a: KeyValue<number, V>, b: KeyValue<number, V>) => number
  ): Array<KeyValue<number, V>>;
  transform<V>(
    input: { [key: number]: V } | ReadonlyMap<number, V> | null,
    compareFn?: (a: KeyValue<number, V>, b: KeyValue<number, V>) => number
  ): Array<KeyValue<number, V>> | null;
  transform<K, V>(
    input: ReadonlyMap<K, V>,
    compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number
  ): Array<KeyValue<K, V>>;
  transform<K, V>(
    input: ReadonlyMap<K, V> | null,
    compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number
  ): Array<KeyValue<K, V>> | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/keyvalue_pipe.ts#L46-L100)

## ngModule

CommonModule

## usageNotes

### Examples

This examples show how an Object or a Map can be iterated by ngFor with the use of this
keyvalue pipe.

{@example common/pipes/ts/keyvalue_pipe.ts region='KeyValuePipe'}

## publicApi

## Methods

### transform

```ts
transform<K, V>(   input: null|{[key: string]: V, [key: number]: V}|ReadonlyMap<K, V>,   compareFn: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number = defaultComparator):   Array<KeyValue<K, V>>|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/keyvalue_pipe.ts#L76-L99)

#### Parameters (#transform-parameters)

| Name      | Type                                               | Description |
| --------- | -------------------------------------------------- | ----------- |
| input     | `any`                                              |             |
| compareFn | `(a: KeyValue<K, V>, b: KeyValue<K, V>) => number` |             |

### transform

```ts
transform<K, V>(input: null, compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/keyvalue_pipe.ts#L53-L53)

#### Parameters (#transform-parameters)

| Name      | Type                                               | Description |
| --------- | -------------------------------------------------- | ----------- |
| input     | `null`                                             |             |
| compareFn | `(a: KeyValue<K, V>, b: KeyValue<K, V>) => number` |             |

### transform

```ts
transform<V>(   input: {[key: string]: V}|ReadonlyMap<string, V>,   compareFn?: (a: KeyValue<string, V>, b: KeyValue<string, V>) => number):   Array<KeyValue<string, V>>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/keyvalue_pipe.ts#L54-L57)

#### Parameters (#transform-parameters)

| Name      | Type                                                         | Description |
| --------- | ------------------------------------------------------------ | ----------- |
| input     | `any`                                                        |             |
| compareFn | `(a: KeyValue<string, V>, b: KeyValue<string, V>) => number` |             |

### transform

```ts
transform<V>(   input: {[key: string]: V}|ReadonlyMap<string, V>|null,   compareFn?: (a: KeyValue<string, V>, b: KeyValue<string, V>) => number):   Array<KeyValue<string, V>>|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/keyvalue_pipe.ts#L58-L61)

#### Parameters (#transform-parameters)

| Name      | Type                                                         | Description |
| --------- | ------------------------------------------------------------ | ----------- |
| input     | `any`                                                        |             |
| compareFn | `(a: KeyValue<string, V>, b: KeyValue<string, V>) => number` |             |

### transform

```ts
transform<V>(   input: {[key: number]: V}|ReadonlyMap<number, V>,   compareFn?: (a: KeyValue<number, V>, b: KeyValue<number, V>) => number):   Array<KeyValue<number, V>>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/keyvalue_pipe.ts#L62-L65)

#### Parameters (#transform-parameters)

| Name      | Type                                                         | Description |
| --------- | ------------------------------------------------------------ | ----------- |
| input     | `any`                                                        |             |
| compareFn | `(a: KeyValue<number, V>, b: KeyValue<number, V>) => number` |             |

### transform

```ts
transform<V>(   input: {[key: number]: V}|ReadonlyMap<number, V>|null,   compareFn?: (a: KeyValue<number, V>, b: KeyValue<number, V>) => number):   Array<KeyValue<number, V>>|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/keyvalue_pipe.ts#L66-L69)

#### Parameters (#transform-parameters)

| Name      | Type                                                         | Description |
| --------- | ------------------------------------------------------------ | ----------- |
| input     | `any`                                                        |             |
| compareFn | `(a: KeyValue<number, V>, b: KeyValue<number, V>) => number` |             |

### transform

```ts
transform<K, V>(   input: ReadonlyMap<K, V>,   compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): Array<KeyValue<K, V>>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/keyvalue_pipe.ts#L70-L72)

#### Parameters (#transform-parameters)

| Name      | Type                                               | Description |
| --------- | -------------------------------------------------- | ----------- |
| input     | `any`                                              |             |
| compareFn | `(a: KeyValue<K, V>, b: KeyValue<K, V>) => number` |             |

### transform

```ts
transform<K, V>(   input: ReadonlyMap<K, V>|null,   compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => number): Array<KeyValue<K, V>>|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/keyvalue_pipe.ts#L73-L75)

#### Parameters (#transform-parameters)

| Name      | Type                                               | Description |
| --------- | -------------------------------------------------- | ----------- |
| input     | `any`                                              |             |
| compareFn | `(a: KeyValue<K, V>, b: KeyValue<K, V>) => number` |             |
