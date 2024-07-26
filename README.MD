# Typescript Patterns

Typescript Patterns is a Typescript patterns example set.

## How to check the examples

You can check examples from list or check from console pannel, also you can inspect the code.

```bash
pip install foobar
```

## 1. Load Module
Insert in console pannel (Notice that module paths depends from dinamic url in the html)
```javascript
// Inspect in html to copy path
const modulePath = '/src/main.ts';
```
## 2. Check available patterns
Check available objects
```javascript
import(modulePath).then(module => {
  console.table(module.patterns);
});
```

## 3. Example check
Execute methdo from imported object
```javascript
import(modulePath).then(module => {
  const { factoryMethod } = module.patterns;
  factoryMethod.initialize();
});
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.