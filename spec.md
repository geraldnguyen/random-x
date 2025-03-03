# Web UI Tool Specification

## Features and Functionalities
1. **Input Validation:**
   - Names must be non-empty.
   - Names must be unique.
   - Each name should be on a separate line.
   - Sublist size must be between 1 and the total number of names.

2. **UI Elements:**
   - Text area for names input.
   - Option to upload a text file to populate the names.
   - Slider for selecting the sublist size.
   - Clear button to reset the input fields.
   - Display the random sublist on the same page.

3. **File Upload Handling:**
   - Automatically parse the uploaded file and populate the text area with names.
   - If names already exist in the text area, confirm with the user before replacing them with the file content.

4. **Error Handling:**
   - Display error messages for invalid inputs.
   - Highlight invalid fields.

5. **Design:**
   - Modern UI with a responsive layout.

## Technology Stack
- React for building the web UI.

## Deployment
- The tool should be able to run on GitHub Pages.

## Project Structure
- Follow the standard React project structure.
- Include a README file with instructions on how to build and deploy the project.

## Testing
- No specific requirements for unit tests.