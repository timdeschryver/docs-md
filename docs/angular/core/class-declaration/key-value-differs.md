---
kind: ClassDeclaration
name: KeyValueDiffers
module: core
---

# KeyValueDiffers

## description

A repository of different Map diffing strategies used by NgClass, NgStyle, and others.

```ts
class KeyValueDiffers {
  static ɵprov = ɵɵdefineInjectable({
    token: KeyValueDiffers,
    providedIn: "root",
    factory: () => new KeyValueDiffers([new DefaultKeyValueDifferFactory()]),
  });
  factories: KeyValueDifferFactory[];

  static create<S>(
    factories: KeyValueDifferFactory[],
    parent?: KeyValueDiffers
  ): KeyValueDiffers;
  static extend<S>(factories: KeyValueDifferFactory[]): StaticProvider;
  find(kv: any): KeyValueDifferFactory;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/keyvalue_differs.ts#L119-L187)

## publicApi

## Properties

| Name      | Type                      | Description |
| --------- | ------------------------- | ----------- |
| ɵprov     | `never`                   |             |
| factories | `KeyValueDifferFactory[]` |             |

## Methods

### create

```ts
static create<S>(factories: KeyValueDifferFactory[], parent?: KeyValueDiffers): KeyValueDiffers;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/keyvalue_differs.ts#L136-L142)

#### Parameters (#create-parameters)

| Name      | Type                      | Description |
| --------- | ------------------------- | ----------- |
| factories | `KeyValueDifferFactory[]` |             |
| parent    | `KeyValueDiffers`         |             |

### extend

#### description (#extend-description)

Takes an array of {@link KeyValueDifferFactory} and returns a provider used to extend the
inherited {@link KeyValueDiffers} instance with the provided factories and return a new
{@link KeyValueDiffers} instance.

```ts
static extend<S>(factories: KeyValueDifferFactory[]): StaticProvider;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/keyvalue_differs.ts#L164-L178)

#### usageNotes (#extend-usage-notes)

### Example

The following example shows how to extend an existing list of factories,
which will only be applied to the injector for this component and its children.
This step is all that's required to make a new {@link KeyValueDiffer} available.

```
#### Component({ (#extend-component({)

viewProviders: [
KeyValueDiffers.extend([new ImmutableMapDiffer()])
]
})
```

#### Parameters (#extend-parameters)

| Name      | Type                      | Description |
| --------- | ------------------------- | ----------- |
| factories | `KeyValueDifferFactory[]` |             |

### find

```ts
find(kv: any): KeyValueDifferFactory;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/keyvalue_differs.ts#L180-L186)

#### Parameters (#find-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| kv   | `any` |             |
