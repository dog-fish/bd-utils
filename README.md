# db-utils
---
常用javaScript 工具函数

### Installation
```npm i db-utils --save```

### Usage
* fulluse

 ```
import utils from bd-utils
const obj1 = { a: 1, b: { c: 2 } }
const obj2 = utils.deepClone(obj1) // const obj2 = clone.deepClone(obj1)
obj2.a = 3
console.log(obj1) // { a: 1, b: { c: 2 } }
console.log(obj2) // { a: 3, b: { c: 2 } }
```

* On demand

  ```
  import { deepClone } from 'xp-utils'
  const obj1 = { a: 1, b: { c: 2 } }
  const obj2 = deepClone(obj1)
  obj2.a = 3
  console.log(obj1) // { a: 1, b: { c: 2 } }
  console.log(obj2) // { a: 3, b: { c: 2 } }

  ```

### methods

#### deepClone.js
* deepClone

#### throtte.js
* throtte
* debounce

#### date.js
* formatDate
* duration
* ago

#### debug.js
* log

#### array.js
* swap
* unique
* newArray

#### storage.js
* storageSet
* storageGet
* storageClear
* storageLength
* storageGetAll
* storageKeys
* storageHas
