
# How Init a project with Node and Typescript?
```bash
  npm i -g typescript
```
```bash
  npm i -D typescript
```
 ```bash
  npm i -D ts-node-dev
```
  after this, add this code to your package.json:
  ```bash
  "scripts": {
    "dev": "ts-node-dev app.ts"
  }
```
