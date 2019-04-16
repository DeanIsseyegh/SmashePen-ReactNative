import React, {Component} from 'react';
import CharacterImage from "./CharacterImage";
import {CharNotes, UpdateCharData} from "../App";

interface EditCharacterProps {
    charNotes: CharNotes;
    updateCharData: UpdateCharData;
}

interface EditCharacterState {
    charNotes: CharNotes;
    successCharMsg: string;
}

class EditCharacter extends Component<EditCharacterProps, EditCharacterState> {
	constructor(props: EditCharacterProps) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCharUpdate = this.handleCharUpdate.bind(this);
		this.state = { charNotes : props.charNotes, successCharMsg: '' };
	}

	handleSubmit(e: any) {
		e.preventDefault();
		this.setState({ successCharMsg: 'Updated!' });
		this.props.updateCharData(this.state.charNotes);
	}

	handleCharUpdate(e: any) {
		const updatedCharData = { ...this.state.charNotes, notes: e.target.value};
		this.setState({ charNotes: updatedCharData });
	}

	render() {
		const { charNotes } = this.props;
		return (
			<div>
				<CharacterImage name={charNotes.smashCharacter.name}/>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleCharUpdate} value={this.state.charNotes.notes} type="text"/>
					<button>Submit</button>
				</form>
				{this.state.successCharMsg}
			</div>
		);
	}
}

export default EditCharacter;
