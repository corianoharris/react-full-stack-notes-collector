import React, { Fragment, useState } from 'react';
import '../App.css';
import '../index.css';

// components
import Navigation from './Navigation';

const CreateNote = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const submitNote = async (e) => {
		e.preventDefault();
		try {
			const body = {
				title,
				content,
			};
			const response = await fetch('/api/notes', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});
			console.log('The data', response);
			window.location = '/notes'; // make a api call to db
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<Fragment>
			<Navigation />
			<div className="container w-100">
				<div className="text-white">
					<form className="mt-5 was-validated" onSubmit={submitNote}>
						<label className="h3 text-warning" htmlFor="note-title">
							Title
						</label>
						<input
							type="text"
							className="form-control p-3 bg-white text-warning first-letter"
							id="note-title"
							placeholder="add title..."
							name="note"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
						/>
						<div className="valid-feedback mt-2 mb-2">Thank you.</div>
						<div className="invalid-feedback mt-2 mb-2">
							Please add a title...
						</div>
						<label className="h3 text-warning" htmlFor="note-content">
							Note
						</label>
						<textarea
							type="text"
							className="form-control p-3 bg-white text-warning first-letter"
							id="note-content"
							placeholder="add note..."
							name="note-content"
							value={content}
							onChange={(e) => setContent(e.target.value)}
							required></textarea>
						<div className="valid-feedback mt-2 mb-2">Thank you.</div>
						<div className="invalid-feedback mt-2 mb-2">
							Please write a note...
						</div>
						<div className="text-right">
							<button className="btn btn-outline-primary">Add</button>
						</div>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

export default CreateNote;