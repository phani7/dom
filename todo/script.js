const noteList = document.getElementById('note-list');
const noteContent = document.getElementById('note-content');
const addButton = document.getElementById('add-button');
const editButton = document.getElementById('edit-button');
const deleteButton = document.getElementById('delete-button');

let selectedNote = null;

// Event Listeners
addButton.addEventListener('click', addNote);
editButton.addEventListener('click', editNote);
deleteButton.addEventListener('click', deleteNote);
noteList.addEventListener('click', selectNote);

// Functions
function addNote() {
    const content = noteContent.value.trim();
    if (content === '') return;

    const newNote = document.createElement('li');
    newNote.textContent = content;
    noteList.appendChild(newNote);

    noteContent.value = '';
}

function editNote() {
    if (!selectedNote) return;

    const content = noteContent.value.trim();
    if (content === '') return;

    selectedNote.textContent = content;
    selectedNote = null;
    noteContent.value = '';
}

function deleteNote() {
    if (!selectedNote) return;

    noteList.removeChild(selectedNote);
    selectedNote = null;
    noteContent.value = '';
}

function selectNote(event) {
    if (event.target.tagName === 'LI') {
        selectedNote = event.target;
        noteContent.value = selectedNote.textContent;
    }
}
