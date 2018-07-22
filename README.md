# math-formulas

> math formulas and proofs

İlginç - Çok bilinen matematiksel formülleri ispatlarıyla beraber :)

Formül ve ispat eklemek için static dizinindeki formulas.js dosyasına item ekleyebilirsiniz. Daha sonra bunlar kontrol edip firebase veritabanına girilecektir.

Örnek veri yapısı :

```js
 "32323234": {
    "formulaName": "Prime",
    "methods": {
      "method1": {
        "img": "",
        "text": ""
      },
      "method2": {
        "img": "",
        "text": ""
      }
    }
  }
  ```
  
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
