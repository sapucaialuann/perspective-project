export interface Funnel {
    name: string;
    bgColor: string;
    pages: FunnelPage[];
}

export interface FunnelPage {
    id: string;
    blocks: (TextType | ImageType | ButtonType | ListItem)[];
}

type ComponentType = 'text' | 'image' | 'button' | 'list';

export interface ImportedPageElement {
    type: ComponentType;
    id: string;
}

export interface TextType extends ImportedPageElement {
    text: string;
    color: string;
    align: string;
}

export interface ImageType extends ImportedPageElement {
    src: string;
}

export interface ButtonType extends ImportedPageElement {
    text: string;
    color: string;
    bgColor: string;
}

export interface ListItemType {
    title: string;
    description: string;
    src: string;
}

export interface ListItem extends ImportedPageElement {
    items: ListItemType[];
}