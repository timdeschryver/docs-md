---
kind: ClassDeclaration
name: Title
module: platform-browser
---

# Title

## description

A service that can be used to get and set the title of a current HTML document.

Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
(representing the `<title>` tag). Instead, this service can be used to set and get the current
title value.

```ts
class Title {
  getTitle(): string;
  setTitle(newTitle: string);
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/title.ts#L30-L47)

## publicApi

## Methods

### getTitle

#### description (#getTitle-description)

Get the title of the current HTML document.

```ts
getTitle(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/title.ts#L36-L38)

### setTitle

#### description (#setTitle-description)

Set the title of the current HTML document.

```ts
setTitle(newTitle: string);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/title.ts#L44-L46)

#### Parameters (#setTitle-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| newTitle | `string` |             |
