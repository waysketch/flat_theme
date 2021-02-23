# flat_theme
This is a theme using create-react-app

---

## Setup
This is where the setup instructions will go.

---

## ENV
_see [database](#database) section for more information on the MONGODB\_URI variable_

Replace any fields that are marked with caret symbols \<example>

```env
MONGODB_URI=mongodb+srv://<project>:<password>@<cluster>.aaaaa.mongodb.net/<user>?retryWrites=true&w=majority
SITE_EMAIL=example@waysketch.com
SITE_PASSWORD=password
```

---

## Database
This theme uses a MongoDB database, and will require a [MongoDB Atlas](https://www.mongodb.com/3) account. Free clusters are available and are part of the [setup](#setup) documentation, but its highly encouraged that all production sites use a **paid** version of MongoDB with backups turned on.

**NOTE**: Site functions without a database and custom HTML can be added to the **\<NoDatabase />** Page found in  `root > client > src > pages > NoDatabase > NoDatabase.jsx`