# Devtopia

## History of this project
### 2019/6/20
1. add new angular project

be sure angular installed
```
npm install -g @angular/cli
```

then new the project
```
ng new devtopia
```
need to add Angular routing
then build and run
```
cd devtopia
npm run build
npm run start
```
may then open http://localhost:4200/ 

2. add bootstrap

refer to [stackoverflow:Angular 4: How to include Bootstrap?](https://stackoverflow.com/questions/43557321/angular-4-how-to-include-bootstrap)
```
npm install --save bootstrap
```
update angular.json
```
"styles": [
   "../node_modules/bootstrap/dist/css/bootstrap.min.css",
   "styles.css"
],
```

3. add ngx

refer to:

 [valor-software/ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap/blob/development/docs/getting-started/ng-cli.md)
 
 [ngx-bootstrap documentation](https://valor-software.com/ngx-bootstrap/#/documentation)

 ```
 npm install ngx-bootstrap bootstrap --save
 ```
Open src/app/app.module.ts and add:
```
import { AlertModule } from 'ngx-bootstrap';
...

@NgModule({
   ...
   imports: [AlertModule.forRoot(), ... ],
   ...
})

```