# ng2-polymer-static

This project is a collection of generated static directive of polymer element.
For those who want to build with latest ng2-cli (webpack).

There is a list of generated in /src/index.html, and a simple page which has each of the element.

You can also generate for other elements by using the [generator](https://github.com/hydraslay/ng2-polymer-static-gen)


# AOT compile is available 
The directive file need to modify after generated. (if you make new ones than this repository)

for example:
If there is a 
`@Directive({
    selector: 'paper-button',
    outputs: ["activeChange", "focusedChange", "disabledChange"],`

you should add property 
  activeChange: any;
  focusedChange: any;
  disabledChange: any;
in that directive class. (if there is outputs/inputs)

of course if you don't add the properties, ngc will tell you to do so, by error messages.

## To Install (AOT)

All needed tools already in the package.json.

Run `npm install` and `bower install`.

and install the lite-server for serve:
`npm install -g lite-server`

## To Build AOT

Run `npm run build:aot`

## To serve AOT

Run `node copy-dist-files.js` only once (aleady done, do it again if you changed the files).

Run `npm run serve:aot` to serve.

(the JIT is still available in the same project folder so you can compare the load performance.)


# Start (JIT)

Run `npm install` and `bower install`.

Run `ng build` to build.
(If it say you should install latest angular-cli, do it.)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 


