// Implementing Node.js & Express Server
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// The exported Schema is in './models/Contact.js'
import Contact from './models/Contact';
// The exported Schema is in './models/Login.js'
import Login from './models/Login';
// The exported Schema is in './models/Register.js'
import Login from './models/Register';

// TESTING


const app = express();
const router = express.Router();
mongoose.Promise = global.Promise;
app.use(cors());
app.use(bodyParser.json());

// Fill in with the string that containing the URL to the MongoDB database instance.
mongoose.connect('mongodb://localhost:27017/contactManagement', { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Cannot connect to the database'+ err)}
  ); // Come back to fill in the string later!!!

const connection = mongoose.connection;

// Opening connection to the MongoDB database at the beginning when starting the server.
connection.once('open', () =>
{
    console.log('MongoDB database connection established successfully!');
});

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));

function handleError(res, reason, message, code)
{
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}

// Following are API endpoints for Login page

// Register a New Username
// Process an HTTP POST request to register a new username in the MongoDB database
router.route('/login/register').post((req, res) => {
    let username = new Login(req.body);

    username.save().then(username => {
        res.status(200).json({'username': 'Registered successfully. Welcome :)'});
    })
    .catch(err => {
        res.status(400).send('Failed to register account :(')
    });
});

// Verify the Login Information
// Process an HTTP GET request to find the username and the password in the MongoDB database
// I HAVE NO IDEA HOW TO DO THIS!!!
// Assuming here is a router for login verification.


// Following are API endpoints for Contact page

// Retrieving All Contacts
// Process an HTTP GET request to retrieve a list of all contacts from the MongoDB database (just for now)
// THIS ROUTER NEED TO CHANGE TO ':id' VERSION WHEN LOGIN PAGE IS SETED UP!!!
router.route('/contacts').get((req, res) => {
    // CHANGE TO findById later!!!
    Contact.find((err, contacts) => {
        // If an error has occurred (the err parameter is available) the error is printed on the console.
        if (err)
            console.log(err);
        // If no error has occurred the list of contacts is returned in JSON format.
        else
            res.json(contacts);
    });
});

// Retrieving a Contact by ID
// Process an HTTP GET request to retrieve a single contact by ID from the MongoDB database
// This route is used to send a HTTP GET request to retrieve a single contact
// from the database in JSON format.
router.route('/contacts/:id').get((req, res) => {
    // Retrieve a single entry via the Mongoose model by using the method findById.
    Contact.findById(req.params.id, (err, contact) => {
        if (err)
            console.log(err);
        else
            res.json(contact);
    });
});

// Adding a New Contact
// Process an HTTP POST request to add a new contact in the MongoDB database
router.route('/contacts/add').post((req, res) => {
    let contact = new Contact(req.body);

    // The save method from the model class is then used to store this new Issue object in the database.
    contact.save().then(contact => {
        res.status(200).json({'contact': 'Added successfully :)'});
    })
    .catch(err => {
        res.status(400).send('Failed to create a new record :(')
    });
});

// Updating Contact
// Process an HTTP POST request to update an existing contact entry in the MongoDB database
// NOT SURE TO USE POST OR PUT YET, THIS ROUTER MIGHT BE CHANGED LATER!!!
router.route('/contacts/update/:id').post((req, res) => {
    Contact.findById(req.params.id, (err, contact) => {
        if (!contact)
        {
            return next(new Error('Could not load Document :('));
        }
        else
        {
            contact.firstName = req.body.firstName;
            contact.lastName = req.body.lastName;
            contact.phoneNumber = req.body.phoneNumber;
            contact.emailAddress = req.body.emailAddress;

            contact.save().then(contact => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }

    });
});

// Deleting Contact
// Process an HTTP GET request to delete an existing contact entry from the MongoDB database
router.route('/contacts/delete/:id').get((req, res) => {
    Contact.findByIdAndRemove({_id: req.params.id}, (err, contact) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});
