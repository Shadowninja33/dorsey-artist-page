export interface SeoData {
	title: string;
	description: string;
}

export interface Picture {
	/**
	 * Key is format. Value is srcset.
	 */
	sources: Record<string, string>;
	img: {
		src: string;
		w: number;
		h: number;
	};
}
