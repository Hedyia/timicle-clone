import { Medium } from "./Medium";
import { Resource } from "./Rsource";
import { TimicleTag } from "./TimicleTag";

export interface Timicle {
    id?: string;
    title?: string;
    description?: string;
    day?: number;
    month?: number;
    year?: number;
    estimated?: boolean;
    heroImageUrl?: string;
    isExternalUrl?: boolean;
    parentId?: string;
    publishUnderId?: string;
    categoryId?: string;
    timicleTags?: TimicleTag[];
    resources?: Resource[];
    media?: Medium[];
    audienceId?: string;
    category?:String;
}