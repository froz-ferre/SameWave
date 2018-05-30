export class Artist {
    constructor(
        public name: string,     //
        public url: string,      //
        public image?: string     //
    ) {}
}

export interface ChartArtistsApi {
    // pass
    // Object({'artists': {'artist': [{}]}});
    image: Array<Object>;
}
