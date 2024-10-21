
# Project Title: Event Management System


# Description:
    An Angular-based web application where users can create, update, delete, and book events. Users are restricted from booking their own events. Data is managed using two JSON files: user.json and event.json.

# Technologies:
    Node.js, Angular, Angular Material, JSON files for data storage, TypeScript, HTML, CSS, Bootstrap (for UI), and Angular services for data handling.

# Technologies

==>Frontend Framework:
    Angular: The core framework for building a dynamic and responsive web application.
    Angular CLI: For efficient project scaffolding and development.
    TypeScript: To enhance JavaScript with strong typing and better error handling.

==>User Interface:
    HTML5: For structuring the application.
    CSS3: For styling the application.
    Bootstrap: To create a responsive design with pre-built UI components.
    Angular Material (optional): For enhanced UI components if you prefer a modern look.

==>Data Handling:
    JSON files: For storing and retrieving user and event data (user.json and event.json).
    Angular Services: To handle CRUD (Create, Read, Update, Delete) operations on the JSON data files.

# Features
==>User Registration and Login:
    New users can register using their details, which will be stored in user.json.
    Existing users can log in with their credentials to access event management features.
    Authentication is basic (using JSON data file) and restricted to username and password.

==>Event Management:
    Create Event: Logged-in users can create new events, which will be stored in event.json.
    Update Event: Users can edit the details of the events they created.
    Delete Event: Users can delete events that they own.
    View Events: Users can view all events available in the system.

==>Event Booking:
    Users can book events created by other users (booking one's own event is not allowed).
    Booking status should be updated in the event.json file.
    Booking logic should include validation to ensure a user does not book their own event.

==>Data Validation:
    Front-end validations for user inputs (like event details and user registration details).
    Error handling for incorrect login attempts or unauthorized actions.

# JSON File Structure
==>user.json:
    [
         {
            "userId": "U001",
            "username": "john_doe",
            "password": "password123",
            "email": "john@example.com"
        }
    ]
==>event.json:
    [
        {
            "eventId": "E001",
            "eventName": "Tech Conference 2024",
            "organizerId": "U001",
            "date": "2024-12-10",
            "location": "New York",
            "description": "A conference 
            on emerging technologies",
            "availableSlots": 50,
            "bookedUsers": []
        }
    ]

# Application Components
==>Home Component
==>AboutUs Component
==>ContactUS Component
==>NavBar Component
==>Footer Component
==>User Components:

    RegisterComponent: For user registration.
    LoginComponent: For user authentication.
    ProfileComponent: To display user details and their created events.

==>Event Components:
    EventListComponent: To display a list of all events.
    EventDetailComponent: To show detailed information about a specific event.
    CreateEventComponent: For creating a new event.
    EditEventComponent: For editing an existing event.
    DeleteEventComponent: For deleting an event.

==>Booking Component:
    BookingComponent: To handle the booking process and display booked events.

# Services
    UserService: To manage user-related operations like registration, login, and fetching user data.
    EventService: To handle event CRUD operations and booking logic.
    AuthService: For managing authentication and user session data.

# Routing
    Implement Angular Router to navigate between pages like Login, Registration, Event List, Create Event, and Profile.
    Set up route guards to protect authenticated routes and ensure that only logged-in users can access certain functionalities.
# http://localhost:3000/events?userId=2001&_embed=user

==>json-server db.json
==>npm install -g json-server