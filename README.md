# Devtopia<a name="top"></a>

[Plan](#plan)

[History](#history)

## Plan<a name="plan"></a> ([to top](#top))

* add ngx components which will be used

## History of this project<a name="history"></a> ([to top](#top))

| col1                                       | col2                                       |
| ------------------------------------------ | ------------------------------------------ |
| [2019/6/21](#20190621) | [2019/6/20](#20190620) |
|                                            |

### 2019/6/21<a name="20190621"></a>
1. switching to another computer, fail to rebuild
```
npm install --save-dev @angular-devkit/build-angular
```
2. add ngx components
```
ng add ngx-bootstrap  --component accordion
ng add ngx-bootstrap  --component alerts
ng add ngx-bootstrap  --component buttons
ng add ngx-bootstrap  --component carousel
ng add ngx-bootstrap  --component collapse
ng add ngx-bootstrap  --component datepicker
ng add ngx-bootstrap  --component dropdowns
ng add ngx-bootstrap  --component modals
ng add ngx-bootstrap  --component pagination
ng add ngx-bootstrap  --component popover
ng add ngx-bootstrap  --component progressbar
ng add ngx-bootstrap  --component rating
ng add ngx-bootstrap  --component sortable
ng add ngx-bootstrap  --component tabs
ng add ngx-bootstrap  --component timepicker
ng add ngx-bootstrap  --component tooltip
ng add ngx-bootstrap  --component typeahead
```
3. (undone) need to add standard form items for bootstrap, refer to [Bootstrap Form Inputs](https://www.w3schools.com/bootstrap/bootstrap_forms_inputs.asp)
* label
* textbox
* listbox
* combobox
* checkbox
* radio button
* button
* grid/table

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