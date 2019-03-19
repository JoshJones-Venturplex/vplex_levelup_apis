import { Bagel } from './bagel.entity';

export const bagelsProviders = [
    {
        provide: 'BagelsRepository',
        useValue: Bagel
    }
]