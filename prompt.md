# Web UI Tool Development Checklist

This checklist outlines the detailed, iterative steps to build a React-based Web UI tool for selecting a random sublist of names. Follow each section step-by-step, and use the provided prompts to guide your code-generation LLM. Each prompt builds on previous functionality to ensure a smooth, incremental development process.

---

## Detailed Blueprint Overview

- **Project Goal:**
  - Build a React-based Web UI tool that allows users to input a list of names (via text area or file upload), validates the input, allows selection of a sublist size using a slider, and displays a randomly generated sublist.
  - Ensure the tool includes input validation, file upload handling, error messaging, a modern responsive design, and is deployable via GitHub Pages.

- **Key Components:**
  - **Project Setup:** Create the project structure, configure GitHub Pages deployment, and add a README.
  - **UI Components:** Build a text area for names, a file upload component, a slider for sublist size, a clear button, and an output display.
  - **Input Validation & State Management:** Validate non-empty, unique names (one per line) and ensure the slider value is valid.
  - **File Upload Handling:** Allow file uploads to populate the names, with a confirmation prompt if names already exist.
  - **Random Sublist Generation:** Implement a function to generate and display a random sublist.
  - **Error Handling:** Display errors and highlight invalid fields.
  - **Styling & Responsiveness:** Apply modern, responsive styles.
  - **Testing & Integration:** Incrementally integrate and test all components.

---

## Iterative Prompts for Implementation

### Prompt 1: Project Setup
- [ ] **Initialize the Project:**  
  Create a new React project using Create React App.
- [ ] **Folder Structure:**  
  Set up a standard folder structure with a main App component, and directories for components and assets.
- [ ] **README and Deployment Config:**  
  Add a README with build and deployment instructions for GitHub Pages and include any necessary configuration files.
- [ ] **Verification:**  
  Ensure the project compiles and displays a simple "Hello, World!" on the main page.

**Prompt Text:**

Project Setup Prompt:

Create a new React project using Create React App and set up the standard folder structure. Your task is to generate the initial project scaffolding with the following requirements:

- A main App component.
- A basic project structure with directories for components and assets.
- Include a README.md with instructions on how to build and deploy the project on GitHub Pages.
- Add any necessary configuration files for GitHub Pages deployment. Ensure that the project compiles and runs with a simple "Hello, World!" displayed on the main page.


---

### Prompt 2: Basic UI Layout and Components
- [ ] **UI Layout:**  
  Extend the project by creating the core layout in the App component.
- [ ] **Component Creation:**  
  Add the following UI elements:
  - Text area for entering names.
  - File upload component (initially a simple `<input type="file">`).
  - Slider for sublist size selection.
  - Clear button to reset the input fields.
  - Output area to display the random sublist.
- [ ] **Responsive Structure:**  
  Use basic CSS to ensure the layout is responsive and integrated into the App component.

**Prompt Text:**

Basic UI Layout Prompt:

Extend the initial project by creating the core layout for the Web UI tool. Implement the main App component with the following UI elements:

*   A text area for entering names.
*   A file upload component (this can initially be a simple <input type="file">).
*   A slider for selecting the sublist size.
*   A clear button to reset the input fields.
*   An output area where the randomly generated sublist will be displayed. Structure the layout in a responsive manner using basic CSS. The components do not need full functionality yet but should be wired into the App component so that they are visible and integrated in the layout.


---

### Prompt 3: Input Validation and State Management
- [ ] **State Management:**  
  Add state to manage the list of names entered in the text area.
- [ ] **Validation Logic:**  
  Validate that:
  - Each name is non-empty.
  - All names are unique.
  - Names are processed line-by-line.
  - The slider value (sublist size) is between 1 and the total number of names.
- [ ] **Error Handling:**  
  Display error messages and highlight invalid fields as the user interacts with the UI.
- [ ] **Real-Time Updates:**  
  Wire the validations to update in real-time with changes to the text area or slider.

**Prompt Text:**

Input Validation and State Management Prompt:

In this step, add state management and basic input validation to your App component. Implement the following:

*   Store the list of names (entered in the text area) in state.
*   Validate that each name is non-empty and that all names are unique. Names should be processed line-by-line.
*   Validate that the slider value (sublist size) is between 1 and the total number of names.
*   Display error messages if the input fails validation and visually highlight any invalid fields. Wire these validations so that as the user types or changes the slider, the validations update in real-time.


---

### Prompt 4: File Upload Handling
- [ ] **FileUpload Component:**  
  Develop a dedicated FileUpload component.
- [ ] **File Parsing:**  
  Allow users to select a text file and parse its content to extract names (one per line).
- [ ] **Confirmation Prompt:**  
  If the text area already contains names, prompt the user to confirm before replacing the content.
- [ ] **State Integration:**  
  Populate the text area with the file content upon confirmation and ensure it integrates with the App’s state management.

**Prompt Text:**

File Upload Handling Prompt:

Develop a FileUpload component to handle text file uploads. The component should:

*   Allow the user to select a text file.
*   Parse the file contents to extract names (one per line).
*   If the text area already contains names, display a confirmation prompt to the user before replacing the existing names.
*   Upon confirmation, populate the text area with the names from the file. Ensure that this component integrates with the existing state management in the App component.



---

### Prompt 5: Random Sublist Generation Logic
- [ ] **Function Implementation:**  
  Implement a function that generates a random sublist from the validated list of names.
- [ ] **Validation:**  
  Ensure the function verifies that the sublist size does not exceed the number of available names.
- [ ] **Output Integration:**  
  Display the generated random sublist in the output area.
- [ ] **Trigger Mechanism:**  
  Integrate the function so it is automatically called after successful input validation.

**Prompt Text:**

Random Sublist Generation Prompt:

Implement a function within your application that takes the validated list of names and the selected sublist size (from the slider) to generate a random sublist. Ensure that:

*   The function checks that the sublist size does not exceed the number of available names.
*   The random selection is reproducible if needed (or truly random based on the project requirements).
*   The generated sublist is then displayed in the output area. Integrate this function so that it is called automatically after successful input validation.


---

### Prompt 6: Integration and Wiring of Components
- [ ] **Component Integration:**  
  Integrate the text area, file upload component, slider, clear button, and output display into the App component.
- [ ] **State & Validation Updates:**  
  Ensure that changes in any component trigger the necessary state updates, validations, and random sublist generation.
- [ ] **Error Messaging:**  
  Display error messages and invalid field highlights as needed.
- [ ] **Clear Functionality:**  
  Implement the clear button to reset all state values and remove error messages.
- [ ] **Testing Integration:**  
  Simulate typical user interactions to verify that all components work together seamlessly.

**Prompt Text:**

Integration and Wiring Prompt:

Integrate all the previous steps into a cohesive application. Ensure that:

*   The App component combines the text area, file upload component, slider, clear button, and output display.
*   State updates (such as changes in the text area, file uploads, or slider adjustments) correctly trigger input validation and sublist generation.
*   Error messages are displayed as needed.
*   The clear button resets all state values and clears any error messages. Test the integration by simulating typical user interactions to ensure that all components work together seamlessly.


**Extra**
- Add a "Refresh" button so that user can re-randomize the sublist
- Display the number corresponding to the value of the slider



---

### Prompt 7: Styling and Responsive Design
- [ ] **UI Enhancement:**  
  Enhance the look and feel of the application with modern, responsive CSS styling.
- [ ] **Responsive Layout:**  
  Ensure the design works well on mobile, tablet, and desktop.
- [ ] **Error Styling:**  
  Clearly style error messages and invalid fields.
- [ ] **Integration of Styles:**  
  Wire the styles into the project so that the enhanced UI appears immediately.

**Prompt Text:**

Styling and Responsive Design Prompt:

Enhance the user interface with modern, responsive styling. Your task is to:

*   Write CSS (or use a styling library) to improve the look and feel of the UI.
*   Ensure the layout is responsive for different device sizes (mobile, tablet, desktop).
*   Style error messages and invalid fields clearly.
*   Update the UI components if necessary so that they align properly on the page. Wire the styles into the project so that the enhanced UI is reflected immediately.


**NOTE**: This prompt, resume after a long hiatus, does not work after so many tries. The context was lost, Copilot kept generating App.tsx file despite the project was setup with vanila JS. It was only after 5 or 6 attempts with Claud and GPT that it finally worked recommending bootstrap on app.js


---

### Prompt 8: Final Testing and Documentation
- [ ] **Testing Guide:**  
  Write a brief testing guide in the README.md that explains how to manually test:
  - Input validation
  - File upload functionality
  - Random sublist generation
  - UI responsiveness
- [ ] **Component Testing:**  
  Verify each component both individually and as part of the integrated application.
- [ ] **Final Adjustments:**  
  Make any necessary final code adjustments based on testing feedback.
- [ ] **Deployment Verification:**  
  Confirm the project builds correctly and is deployable on GitHub Pages.
- [ ] **Documentation Update:**  
  Ensure that the README.md contains clear instructions for building, testing, and deploying the project.

**Prompt Text:**

Final Testing and Documentation Prompt:

For the final step, focus on testing and documentation. Complete the following:

*   Write a brief testing guide (inside the README.md) detailing how to manually test the tool, including testing for input validation, file upload functionality, random sublist generation, and UI responsiveness.
*   Ensure that each component has been tested individually and as part of the overall integrated application.
*   Make any final adjustments to the code based on testing feedback.
*   Confirm that the project builds correctly and can be deployed to GitHub Pages. Wire the final documentation into the project, ensuring that developers can follow the instructions to build, test, and deploy the application.


---

## Conclusion

By following this checklist, you'll be able to develop the Web UI tool incrementally and methodically. Each prompt is designed to be small enough for safe implementation and testing, while ensuring every component integrates seamlessly into the final application. Use this `todo.md` file as your roadmap throughout the project.

Happy coding!


## BUGS & Adjustment

1. Bug: Nothing happens after select a file. The content of the file should be populated to the main text area.

The value of the text are should be synced with the list of names.

2. Remove the Refresh button

3. Below the text area and file uploader, display a checkbox to the left of each name from the text area, default to checked. If a name is checked, it is included in the input list for the random function and the slider size.

4. Move the slider, random size field and the generate button to below the displayed names.