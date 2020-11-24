# Project-Fullstack-Mentoring

# Service Request

## Getting Started

### Prerequisites

- [ ] [Python 3.6](https://www.python.org/downloads/release/python-365/)
- [ ] [Pip](https://pip.pypa.io/en/stable/installing/)
- [ ] [Virtualenv](https://virtualenv.pypa.io/en/stable/installation/)
- [ ] [PostgreSQL](https://www.postgresql.org/)

### Setting up + Running

1. Clone the repo:

    ```
    $ git https://github.com/akmaluddinf/Project-Fullstack-Mentoring.git
    $ cd Project-Fullstack-Mentoring
    $ cd backend
    ```

2. With Python 3.6 and Pip installed:

    ```
    $ virtualenv --python=python3 env --no-site-packages
    $ source env/bin/activate
    $ pip install -r requirements.txt
    ```

3. Create a PostgreSQL user with the username and password `postgres` and create a database called `project`:

    ```
    $ createuser --interactive --pwprompt
    $ createdb project
    ```

4. Export the required environment variables:

    ```
    $ export FLASK_APP=app.py
    ```

5. Execute the migrations to create the table:

    ```
    $ flask db migrate
    $ flask db upgrade
    ```

6. Run the Flask API:

    ```
    $ flask run
    ```

7. Navigate to `http://localhost:5000/service_request` to view the service request data.

