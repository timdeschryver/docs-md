---
kind: InterfaceDeclaration
name: PipeTransform
module: core
---

# PipeTransform

## description

An interface that is implemented by pipes in order to perform a transformation.
Angular invokes the `transform` method with the value of a binding
as the first argument, and any parameters as the second argument in list form.

```ts
interface PipeTransform {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/pipe_transform.ts#L33-L35)

## license

Copyright Google LLC All Rights Reserved.

Use of this source code is governed by an MIT-style license that can be
found in the LICENSE file at https://angular.io/license

## usageNotes

In the following example, `RepeatPipe` repeats a given value a given number of times.

```ts
import {Pipe, PipeTransform} from '@angular/core';

## Pipe({name:
'repeat'})
export class RepeatPipe implements PipeTransform {
transform(value: any, times: number) {
return value.repeat(times);
}
}
```

Invoking `{{ 'ok' | repeat:3 }}` in a template produces `okokok`.

## publicApi
