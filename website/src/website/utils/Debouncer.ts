
import { Disposable } from "@hediet/std/disposable";

export class Debouncer implements Disposable {
	private timeout: NodeJS.Timeout | undefined = undefined;

	constructor(private readonly debounceMs: number) {}

	run(action: () => void): void {
		this.clear();
		this.timeout = setTimeout(action, this.debounceMs);
	}

	clear(): void {
		if (this.timeout !== undefined) {
			clearTimeout(this.timeout);
			this.timeout = undefined;
		}
	}

	dispose(): void {
		this.clear();
	}
}
