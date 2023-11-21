import React from "react";

function Note({ note, onDelete, onUpdate }) {
    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => onUpdate(note.id)}>Edit</button>
            <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
    );
}

export default Note;
