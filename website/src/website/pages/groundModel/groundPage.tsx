import { observer } from "mobx-react";
import * as React from "react";
import { hotComponent } from "../../utils/hotComponent";
import { groundModel } from "./groundModel";
import { groundPageContent } from "./groundPageContent";
import { withLoader } from "../../components/Loader";
import { getNpmVersions } from "./getNpmVersionsSync";

@withLoader(async () => {
	const search = new URLSearchParams(window.location.search);
	if (
		search.get("source") === "latest-dev" ||
		search.get("compareWith") === "latest-dev"
	) {
		// So that the source class can resolve that value
		await getNpmVersions();
	}
})
@hotComponent(module)
@observer
export class groundPage extends React.Component {
	private readonly model = new groundModel();

	componentWillUnmount() {
		this.model.dispose();
	}

	render() {
		return <groundPageContent model={this.model} />;
	}
}
