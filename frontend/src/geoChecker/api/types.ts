import { UserFullData } from '../types';

export interface GeoCheckerClientStructure {
    createUser: (userData: UserFullData) => void
}