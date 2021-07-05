export type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
};

export enum ClubColor {
    RED= "#cc1757",
    PURPLE = "#ae72c1",
    GREEN = "#a3ff3e",
    YELLOW = "#f8e71c",
}

export interface ClubEvent {
    id: number,
    title: string,
    date: Date,
    guests?: ClubEventGuest[],
}

export interface UserWithAvatar {
    avatar?: string;
}

export interface ClubEventGuest extends UserWithAvatar {

}

export interface ClubProject {
    title: string;
    subtitle: string;
    image: string;
    participants: UserWithAvatar[];
    sort: number;
}

export interface ClubMember extends UserWithAvatar {
    firstName: string;
    lastName: string;
    links: ExternalLink[];
}

export interface ExternalLink {
    kind: ExternalLinkKind;
    url: string;
}

export enum ExternalLinkKind {
    LINKEDIN,
    FACEBOOK,
    TWITTER,
    KAGGLE
}