import create from 'zustand'
import { persist } from 'zustand/middleware'
import Base from './Base.json'

interface device {
    captionName: string;
    routerLink: string;
    description: string;
    price: number;
    type: string;
    image: string;
}

interface deviceStore {
    devices: device[];
}
export const useDeviceStore = create(persist<deviceStore>(() => ({
    devices:Base,
}),
		{
			name: 'DeviceStore',
			version: 2
}))
