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

export type Tuple<T, N extends number, A extends unknown[]> = A extends { length: N }
	? A
	: Tuple<T, N, [...A, T]>;
export type AtLeast<T, N extends number> = [...Tuple<T, N, []>, ...T[]];
export type AtLeastOne<T> = AtLeast<T, 1>;
