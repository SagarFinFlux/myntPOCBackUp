# UI 2.0 

# Initial Setup

```npm install```

Use above command to install node modules.


# Development Server
Run ```**ng serve**``` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files. 

You can also run the app on different port - Run ```**ng serve --port 4230**``` and navigate to respective port URL -  http://localhost:4230/

Use your Brancho Login Credentials for Sign In.

## Folder Structure

```
app --> core : Consists of auth gaurds, error handlers, interceptors, app.config file, models.
        layout : Consists of commonly uses modules, layout themings.
        mock-api : Consists of Mock Data that are used to render them on centain API calls in respective components/pages.
        modules : Consists of the components/modules that needs to be rendered on navigation.
        shared : Shared Module that can be used in all components - Angular Material Features.
```

### To Generate new Components 
Run ```ng generate component path/component-name``` to generate a new component.
Run this command to add new components in modules folder. 

``` app --> modules/your-new-component ```



