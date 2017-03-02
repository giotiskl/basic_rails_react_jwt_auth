# Simple React - Rails JWT Authentication Example

## Frontend
The frontend is built using create-react-app and server through webpack dev server. To build the dependencies:
* cd client
* (npm -g install yarn (if you do not have yarn already installed, you should))
* yarn install

## Backend
The backend consists of a Rails 5 API, basic user authentication with JWT. An example user must be manually created in the DB.
* bundle install
* rake db:migrate
* rails c
* User.create!(email: "test@test.com", password: "testpass")

## Start the app
```` rake start ````

## Running everything together
There is a small helper rake task named start that launches both the webpack-dev-server and the rails server through Foreman. The webpack-dev-server proxies all requests to the Rails API to comply with the Same-Origin Policy.

