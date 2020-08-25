---
kind: ClassDeclaration
name: TestabilityRegistry
module: core
---

# TestabilityRegistry

## description

A global registry of {@link Testability} instances for specific elements.

```ts
class TestabilityRegistry {
  _applications = new Map<any, Testability>();

  registerApplication(token: any, testability: Testability);
  unregisterApplication(token: any);
  unregisterAllApplications();
  getTestability(elem: any): Testability | null;
  getAllTestabilities(): Testability[];
  getAllRootElements(): any[];
  findTestabilityInTree(
    elem: Node,
    findInAncestors: boolean = true
  ): Testability | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/testability/testability.ts#L233-L297)

## publicApi

## Properties

| Name           | Type  | Description |
| -------------- | ----- | ----------- |
| \_applications | `any` |             |

## Methods

### registerApplication

#### description (#registerApplication-description)

Registers an application with a testability hook so that it can be tracked

```ts
registerApplication(token: any, testability: Testability);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/testability/testability.ts#L247-L249)

#### Parameters (#registerApplication-parameters)

| Name        | Type          | Description                        |
| ----------- | ------------- | ---------------------------------- |
| token       | `any`         | token of application, root element |
| testability | `Testability` | Testability hook                   |

### unregisterApplication

#### description (#unregisterApplication-description)

Unregisters an application.

```ts
unregisterApplication(token: any);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/testability/testability.ts#L255-L257)

#### Parameters (#unregisterApplication-parameters)

| Name  | Type  | Description                        |
| ----- | ----- | ---------------------------------- |
| token | `any` | token of application, root element |

### unregisterAllApplications

#### description (#unregisterAllApplications-description)

Unregisters all applications

```ts
unregisterAllApplications();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/testability/testability.ts#L262-L264)

### getTestability

#### description (#getTestability-description)

Get a testability hook associated with the application

```ts
getTestability(elem: any): Testability|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/testability/testability.ts#L270-L272)

#### Parameters (#getTestability-parameters)

| Name | Type  | Description  |
| ---- | ----- | ------------ |
| elem | `any` | root element |

### getAllTestabilities

#### description (#getAllTestabilities-description)

Get all registered testabilities

```ts
getAllTestabilities(): Testability[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/testability/testability.ts#L277-L279)

### getAllRootElements

#### description (#getAllRootElements-description)

Get all registered applications(root elements)

```ts
getAllRootElements(): any[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/testability/testability.ts#L284-L286)

### findTestabilityInTree

#### description (#findTestabilityInTree-description)

Find testability of a node in the Tree

```ts
findTestabilityInTree(elem: Node, findInAncestors: boolean = true): Testability|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/testability/testability.ts#L294-L296)

#### Parameters (#findTestabilityInTree-parameters)

| Name            | Type      | Description                                                              |
| --------------- | --------- | ------------------------------------------------------------------------ |
| elem            | `Node`    | node                                                                     |
| findInAncestors | `boolean` | whether finding testability in ancestors if testability was not found in |
