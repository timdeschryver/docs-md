---
kind: ClassDeclaration
name: IterableDiffers
module: core
---

# IterableDiffers

## description

A repository of different iterable diffing strategies used by NgFor, NgClass, and others.

```ts
class IterableDiffers {
  static ɵprov = ɵɵdefineInjectable({
    token: IterableDiffers,
    providedIn: "root",
    factory: () => new IterableDiffers([new DefaultIterableDifferFactory()]),
  });
  factories: IterableDifferFactory[];

  static create(
    factories: IterableDifferFactory[],
    parent?: IterableDiffers
  ): IterableDiffers;
  static extend(factories: IterableDifferFactory[]): StaticProvider;
  find(iterable: any): IterableDifferFactory;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/iterable_differs.ts#L148-L219)

## publicApi

## Properties

| Name      | Type                      | Description |
| --------- | ------------------------- | ----------- |
| ɵprov     | `never`                   |             |
| factories | `IterableDifferFactory[]` |             |

## Methods

### create

```ts
static create(factories: IterableDifferFactory[], parent?: IterableDiffers): IterableDiffers;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/iterable_differs.ts#L164-L171)

#### Parameters (#create-parameters)

| Name      | Type                      | Description |
| --------- | ------------------------- | ----------- |
| factories | `IterableDifferFactory[]` |             |
| parent    | `IterableDiffers`         |             |

### extend

#### description (#extend-description)

Takes an array of {@link IterableDifferFactory} and returns a provider used to extend the
inherited {@link IterableDiffers} instance with the provided factories and return a new
{@link IterableDiffers} instance.

```ts
static extend(factories: IterableDifferFactory[]): StaticProvider;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/iterable_differs.ts#L193-L208)

#### usageNotes (#extend-usage-notes)

### Example

The following example shows how to extend an existing list of factories,
which will only be applied to the injector for this component and its children.
This step is all that's required to make a new {@link IterableDiffer} available.

```
#### Component({ (#extend-component({)

viewProviders: [
IterableDiffers.extend([new ImmutableListDiffer()])
]
})
```

#### Parameters (#extend-parameters)

| Name      | Type                      | Description |
| --------- | ------------------------- | ----------- |
| factories | `IterableDifferFactory[]` |             |

### find

```ts
find(iterable: any): IterableDifferFactory;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/iterable_differs.ts#L210-L218)

#### Parameters (#find-parameters)

| Name     | Type  | Description |
| -------- | ----- | ----------- |
| iterable | `any` |             |
