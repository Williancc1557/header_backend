
export interface ChangeItemDto {
    id: number;

    name?: string;

    type?: string;

    latitude?: number;

    longitude?: number;

    city?: string;

    state?: string;

    country?: string;
}

export interface SaveItemDto {
    name: string;

    owner: string;

    type: string;

    latitude: number;

    longitude: number;

    city: string;

    state: string;

    country: string;

}