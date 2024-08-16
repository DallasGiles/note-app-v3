Note Taker

Description

The Note Taker application is a simple and intuitive tool designed for small business owners to write, save, and manage notes. It helps users organize their thoughts and keep track of tasks they need to complete.

The application is built with a Node.js back end using Express.js, and it stores notes in a JSON file, allowing for quick and efficient data retrieval.

Table of Contents

	•	Installation
	•	Usage
	•	Features
	•	Screenshots
	•	API Routes
	•	Deployment
	•	License
	•	Contributing
	•	Questions

Installation

To set up the Note Taker application locally, follow these steps:

	1.	Clone the repository: git clone https://github.com/DallasGiles/note-app-v3.git

	2.	Navigate to the project directory:
    cd note-app-v3

    	3.	Install the dependencies:
        npm install
        	4.	Start the application:
            npm start

Usage

	1.	Navigate to the main page of the application.
	2.	Click on “Get Started” to view the notes page.
	3.	Use the interface to create new notes, view existing notes, and delete notes as needed.

Features

	•	Create a New Note: Enter a note title and text, then save the note. The note will be added to the list of saved notes.
	•	View Existing Notes: Click on a note from the list to view its details.
	•	Delete a Note: Remove a note from the list by clicking the delete button.

Screenshots
API Routes

	•	GET /api/notes: Retrieves all saved notes.
	•	POST /api/notes: Saves a new note and returns it.
	•	DELETE /api/notes/:id: Deletes a note with the specified ID.

Deployment

The Note Taker application is deployed on Render. You can access the live version at:

