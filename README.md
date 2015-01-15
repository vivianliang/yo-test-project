# yo-test-project
[Yeoman Tutorial](http://yeoman.io/codelab.html)

---
Launch
```
grunt serve
```

Run tests
```
grunt test
```
---
Optimize files for production and places code in `dist/` directory.
* lint code
* run tests
* concatenate/minify scripts/styles
* optimize images
* compile output of preprocessors
* make app lean
```
grunt
```
---
Preview production app
```
grunt serve:dist
```
---
Angular generator also supports creating new views, directives and controllers for you.
```
yo angular:route routeName
```
* Creates controller files
* Updates route in app.js
* Scaffolds out unit tests where possible.
More Yeoman commands for the Angular generator: [generator readme](https://github.com/yeoman/generator-angular#readme).
