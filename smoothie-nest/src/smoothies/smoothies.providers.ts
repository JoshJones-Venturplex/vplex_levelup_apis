import { Smoothie } from './smoothie.entity';

export const smoothiesProviders = [
    {
        provide: 'SmoothiesRepository',
        useValue: Smoothie,
    }
];