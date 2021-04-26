# UI 2.0 

# Initial Setup

```npm install```

Use above command to install node modules.


# Development Server
Run ```ng serve``` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files. 

You can also run the app on different port - Run ```ng serve --port 4230``` and navigate to respective port URL -  http://localhost:4230/

Use your Brancho Login Credentials for Sign In.

## Folder Structure

### App Folder
```
app --> core : Auth gaurds, error handlers, interceptors, app.config file, models.
        layout : Commonly uses modules, layout themings.
        mock-api : Mock Data that are used to render on API calls in respective components/pages.
        modules : Components/modules that needs to be rendered on navigation.
        shared : Shared Module that can be used in all components - Angular Material Features.
```

### Assets Folder  
```
assets --> fonts
           icons
           images
```           
           
### Environment Folder
```
environtments --> environment.prod.ts
                  environment.ts
```

### Styles Folder
```           
styles --> styles.scss
           tailwind.scss
           venders.scss
```



### To Generate new Components 
Run ```ng generate component path/component-name``` to generate a new component in modules folder. 




