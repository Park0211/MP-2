export interface ChampionImage {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface ChampionStats {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
}

export interface Champion {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
    };
    image: ChampionImage;
    tags: string[];
    partype: string;
    stats: ChampionStats;
}

export interface ChampionData {
    type: string;
    format: string;
    version: string;
    data: Record<string, Champion>;
}