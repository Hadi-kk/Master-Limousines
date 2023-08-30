export interface LinkList {
    title: string;
    href: string;
}

export interface ListProps {
    options: LinkList[];
}

export interface EventCardProps {
    picture: string;
    title: string;
    description: string;
    stamp: string;
}
