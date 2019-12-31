Dec 2019 Selzer
Created daco3 app as a daco variation that uses:
angular components
http async
css grid

Bill, you can copy some parts of this variation into later versions of daco,
but as of Dec 31, 2019 this is frozen and will be saved to github.

... angular components
uses angular cli to add components 
new component as a 'view' to the format fd data.
new component as a 'list' of the format fd data.
there is some good stuff in angular component generate
and daco might be a good starting point for future component separation.
daco3 has components: daco-format-list daco-format-view
but, as of Dec 2019, no component approach yet implemented into daco.

... http async
calls the dacoFetch0 build into aws api gateway
retrieves dacoFormat data via ----->>>> this.dacoFormatList = http.get
used coursetro approach rxjs observable.
http logic is baked in with the component definitions.

... css grid
grid within a grid. layout grid for the page, and format list grid as one of the grid areas.
works OK for the layout and high-level format list grid.
confusing when trying to define a data-driven grid 
with fixed columns for data fields, and infinite rows for data records.
worked ok with direct html rows, but angular rows were crazy.  Fixed (I think) by using ng-container, 
which got rid of angular-inserted spans/divs.

gave up on template cuz template seems to want a fixed number of colums and rows.
instead, simplified and define only grid-template-columns
not much grid code left alive. 
I think we are relying on the mysterious css-grid rulebook for grid item placement.
