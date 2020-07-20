/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./PagePickerView.css"
import {Add as AddIcon} from "@material-ui/icons";
import {PagePickerItemSelection, PagePickerItemView} from "./PagePickerItemView";

export interface PagePickerViewProps {

}

export interface PagePickerViewState {
	pages: PagePickerItemSelection[];
	activeId: string;
}

export class PagePickerView extends React.Component<PagePickerViewProps, PagePickerViewState> {

	public constructor(props: PagePickerViewProps) {

		super(props);

		this.state = {
			pages: [
				{ id: "a", value: "Home" },
				{ id: "b", value: "About" },
				{ id: "c", value: "Pricing" },
				{ id: "d", value: "Contact" },
			],
			activeId: "a"
		}

		this.handlePickerChanged = this.handlePickerChanged.bind(this);

	}

	private handlePickerChanged(page: PagePickerItemSelection): void {
		this.setState({activeId: page.id});
	}

	public render(): React.ReactElement {
		return (<div className={"PagePickerView"}>
			<div className={"bar"}>
				<span className={"description"}>Pages</span>
				<AddIcon className={"icon"}/>
			</div>
			<div className={"pages"}>
				{this.state.pages.map((value, index) => {
					return <PagePickerItemView
						identifier={value}
						active={this.state.activeId === value.id}
						onSelection={this.handlePickerChanged}
						key={index}/>
				})}
			</div>
		</div>);
	}

}