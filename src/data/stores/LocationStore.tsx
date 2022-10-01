import create from 'zustand'
import { persist } from 'zustand/middleware'
import Locations from './Locations.json'

interface location {
    captionName: string;
    routerLink: string;
    adress: string;
    telephone: string;
    email: string;
}

interface LocationStore {
    locations: location[];
}
export const useLocationStore = create(persist<LocationStore>(() => ({
    locations:Locations,
}),
		{
			name: 'LocationStore',
			version: 3
}))
