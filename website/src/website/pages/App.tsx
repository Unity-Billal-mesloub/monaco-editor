import { Home } from "./home/Home";
import { groundPage } from "./ground/groundPage";
import { docs, home, monarch, ground } from "./routes";
import * as React from "react";
import { DocsPage } from "./DocsPage";
import { MonarchPage } from "./MonarchPage";

export class App extends React.Component {
	render() {
		if (home.isActive) {
			return <Home />;
		} else if (ground.isActive) {
			return <groundPage />;
		} else if (docs.isActive) {
			return <DocsPage />;
		} else if (monarch.isActive) {
			return <MonarchPage />;
		}
		return <>Page does not exist</>;
	}
}
