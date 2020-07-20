/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./MenuView.css"
import {PagePickerView} from "./page-picker/PagePickerView";

export interface MenuViewProps {

}

export interface MenuViewState {

}

export class MenuView extends React.Component<MenuViewProps, MenuViewState> {

	public constructor(props: MenuViewProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<div className={"MenuView"}>
			<div className={"logoContainer"}>
				<img src={"https://placeimg.com/480/480"} alt={"logo"}/>
				<h1>cobalt</h1>
			</div>
			<h2>element-ts.com</h2>
			<PagePickerView/>
		</div>);
	}

}