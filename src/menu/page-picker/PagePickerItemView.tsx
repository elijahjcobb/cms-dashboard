/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {MoreVert as OptionsIcon} from "@material-ui/icons";
import "./PagePickerItemView.css"

export interface PagePickerItemSelection {
	id: string;
	value: string;
}

export interface PagePickerItemViewProps {
	identifier: PagePickerItemSelection;
	active?: boolean;
	onSelection?: (selection: PagePickerItemSelection) => void;
}

export interface PagePickerItemViewState {

}

export class PagePickerItemView extends React.Component<PagePickerItemViewProps, PagePickerItemViewState> {

	public constructor(props: PagePickerItemViewProps) {

		super(props);

		this.handleContainerClicked = this.handleContainerClicked.bind(this);
		this.handleOptionsClicked = this.handleOptionsClicked.bind(this);

	}

	private handleContainerClicked(): void {
		console.log("hi")
		if (this.props.onSelection) this.props.onSelection(this.props.identifier);
	}

	private handleOptionsClicked(): void {



	}

	public render(): React.ReactElement {
		return (<div
			className={"PagePickerItemView" + (this.props.active === true ? " PagePickerItemView-active" : "")}
			onClick={this.handleContainerClicked}
		>
			<span>{this.props.identifier.value}</span>
			<OptionsIcon onClick={this.handleOptionsClicked}/>
		</div>);
	}

}