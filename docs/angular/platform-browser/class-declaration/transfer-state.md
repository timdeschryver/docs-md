---
kind: ClassDeclaration
name: TransferState
module: platform-browser
---

# TransferState

## description

A key value store that is transferred from the application on the server side to the application
on the client side.

`TransferState` will be available as an injectable token. To use it import
`ServerTransferStateModule` on the server and `BrowserTransferStateModule` on the client.

The values in the store are serialized/deserialized using JSON.stringify/JSON.parse. So only
boolean, number, string, null and non-class objects will be serialized and deserialzied in a
non-lossy manner.

```ts
class TransferState {
  static init(initState: {});
  get<T>(key: StateKey<T>, defaultValue: T): T;
  set<T>(key: StateKey<T>, value: T): void;
  remove<T>(key: StateKey<T>): void;
  hasKey<T>(key: StateKey<T>);
  onSerialize<T>(key: StateKey<T>, callback: () => T): void;
  toJson(): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/transfer_state.ts#L81-L144)

## publicApi

## Methods

### init

```ts
static init(initState: {});
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/transfer_state.ts#L87-L91)

#### Parameters (#init-parameters)

| Name      | Type | Description |
| --------- | ---- | ----------- |
| initState | `{}` |             |

### get

#### description (#get-description)

Get the value corresponding to a key. Return `defaultValue` if key is not found.

```ts
get<T>(key: StateKey<T>, defaultValue: T): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/transfer_state.ts#L96-L98)

#### Parameters (#get-parameters)

| Name         | Type          | Description |
| ------------ | ------------- | ----------- |
| key          | `StateKey<T>` |             |
| defaultValue | `T`           |             |

### set

#### description (#set-description)

Set the value corresponding to a key.

```ts
set<T>(key: StateKey<T>, value: T): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/transfer_state.ts#L103-L105)

#### Parameters (#set-parameters)

| Name  | Type          | Description |
| ----- | ------------- | ----------- |
| key   | `StateKey<T>` |             |
| value | `T`           |             |

### remove

#### description (#remove-description)

Remove a key from the store.

```ts
remove<T>(key: StateKey<T>): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/transfer_state.ts#L110-L112)

#### Parameters (#remove-parameters)

| Name | Type          | Description |
| ---- | ------------- | ----------- |
| key  | `StateKey<T>` |             |

### hasKey

#### description (#hasKey-description)

Test whether a key exists in the store.

```ts
hasKey<T>(key: StateKey<T>);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/transfer_state.ts#L117-L119)

#### Parameters (#hasKey-parameters)

| Name | Type          | Description |
| ---- | ------------- | ----------- |
| key  | `StateKey<T>` |             |

### onSerialize

#### description (#onSerialize-description)

Register a callback to provide the value for a key when `toJson` is called.

```ts
onSerialize<T>(key: StateKey<T>, callback: () => T): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/transfer_state.ts#L124-L126)

#### Parameters (#onSerialize-parameters)

| Name     | Type          | Description |
| -------- | ------------- | ----------- |
| key      | `StateKey<T>` |             |
| callback | `() => T`     |             |

### toJson

#### description (#toJson-description)

Serialize the current state of the store to JSON.

```ts
toJson(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/transfer_state.ts#L131-L143)
