---
kind: ClassDeclaration
name: ErrorHandler
module: core
---

# ErrorHandler

## description

Provides a hook for centralized exception handling.

The default implementation of `ErrorHandler` prints error messages to the `console`. To
intercept error handling, write a custom exception handler that replaces this default as
appropriate for your app.

```ts
class ErrorHandler {
  _console: Console = console;

  handleError(error: any): void;
  _findContext(error: any): any;
  _findOriginalError(error: Error): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/error_handler.ts#L38-L79)

## usageNotes

### Example

```
class MyErrorHandler implements ErrorHandler {
handleError(error) {
// do something with the exception
}
}

## NgModule({

providers: [{provide: ErrorHandler, useClass: MyErrorHandler}]
})
class MyModule {}
```

## publicApi

## Properties

| Name      | Type      | Description |
| --------- | --------- | ----------- |
| \_console | `Console` |             |

## Methods

### handleError

```ts
handleError(error: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/error_handler.ts#L44-L58)

#### Parameters (#handleError-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| error | `any` |             |

### \_findContext

```ts
_findContext(error: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/error_handler.ts#L61-L68)

#### Parameters (#\_findContext-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| error | `any` |             |

### \_findOriginalError

```ts
_findOriginalError(error: Error): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/error_handler.ts#L71-L78)

#### Parameters (#\_findOriginalError-parameters)

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| error | `Error` |             |
