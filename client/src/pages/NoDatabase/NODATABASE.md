# \<NoDatabase />

## Summary
The \<NoDatabase /> Page will display when a database connection could not be made.

The following Pages will apear along side the \<NoDatabase /> Page:
- Error
- Login
- Redux (_No database switch is triggered_)

## Dev Notes
This can occur if the page is online but is unable to make a database connection. That means that the site is deployed but is unable to generate pages from a database.

## Where is this?
This Page can be found in the `App.jsx` file, and will be created if there is `0` (_**zero**_) pages returned from the database or the `catch` block is hit in the same file.

## Why?
Some users may want to display a static page or not connect a database to the template. They can just edit the \<NoDatabase /> Page directly or the `index.html` page directliy. Located in the `root > client > public > index.html`.