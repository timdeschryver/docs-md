---
kind: ClassDeclaration
name: MockStore
module: testing
---

# MockStore

```ts
class MockStore<T = object> extends Store<T> {
  readonly scannedActions$: Observable<Action>;

  setState(nextState: T): void;
  overrideSelector<
    Selector extends Memoized<Result>,
    Value extends Result,
    Result = Selector extends MemoizedSelector<any, infer T>
      ? T
      : Selector extends MemoizedSelectorWithProps<any, any, infer U>
      ? U
      : Value
  >(
    selector: Selector | string,
    value: Value
  ): OnlyMemoized<typeof selector, Result>;
  resetSelectors();
  select(selector: any, prop?: any);
  refreshState();
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/store/testing/src/mock_store.ts#L39-L129)

## Properties

| Name             | Type              | Description |
| ---------------- | ----------------- | ----------- |
| scannedActions\$ | `Observable<any>` |             |

## Methods

### setState

```ts
setState(nextState: T): void;
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/store/testing/src/mock_store.ts#L62-L65)

#### Parameters (#setState-parameters)

| Name      | Type | Description |
| --------- | ---- | ----------- |
| nextState | `T`  |             |

### overrideSelector

```ts
overrideSelector<  Selector extends Memoized<Result>,  Value extends Result,  Result = Selector extends MemoizedSelector<any, infer T>   ? T   : Selector extends MemoizedSelectorWithProps<any, any, infer U>   ? U   : Value >(  selector: Selector | string,  value: Value ): OnlyMemoized<typeof selector, Result>;
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/store/testing/src/mock_store.ts#L67-L92)

#### Parameters (#overrideSelector-parameters)

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| selector | `string | Selector`   |  |
| value    | `Value` |             |

### resetSelectors

```ts
resetSelectors();
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/store/testing/src/mock_store.ts#L94-L103)

### select

```ts
select(selector: any, prop?: any);
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/store/testing/src/mock_store.ts#L105-L113)

#### Parameters (#select-parameters)

| Name     | Type  | Description |
| -------- | ----- | ----------- |
| selector | `any` |             |
| prop     | `any` |             |

### addReducer

```ts
addReducer();
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/store/testing/src/mock_store.ts#L115-L117)

### removeReducer

```ts
removeReducer();
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/store/testing/src/mock_store.ts#L117-L119)

### refreshState

#### description (#refreshState-description)

Refreshes the existing state.

```ts
refreshState();
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/store/testing/src/mock_store.ts#L122-L124)
