/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./App.css"
import {MenuView} from "./menu/MenuView";

export interface AppProps {

}

export interface AppState {

}

export class App extends React.Component<AppProps, AppState> {

	public constructor(props: AppProps) {

		super(props);

	}

	public render(): React.ReactElement {
		return (<div className={"App"}>
			<MenuView/>
			<p>Hello, world!</p>
		</div>);
	}

}