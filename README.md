# Devtopia<a name="top"></a>

[Plan](#Plana-name%22plan%22a-to-topDevtopiaa-name22top22a)

[History](#History-of-this-projecta-name%22histroy%22a-to-topDevtopiaa-name22top22a)

## Plan<a name="plan"></a> ([to top](#Devtopiaa-name%22top%22a))

* add ngx components which will be used

## History of this project<a name="histroy"></a> ([to top](#Devtopiaa-name%22top%22a))

| col1                                       | col2                                       |
| ------------------------------------------ | ------------------------------------------ |
| [2019/6/21](#2019621a-name%2220190621%22a) | [2019/6/20](#2019620a-name%2220190620%22a) |
|                                            |

### 2019/6/21<a name="20190621"></a>
1. switching to another computer, fail to rebuild
```
npm install --save-dev @angular-devkit/build-angular
```

### 2019/6/20<a name="20190620"></a>
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