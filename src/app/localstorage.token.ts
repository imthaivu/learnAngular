import { InjectionToken } from '@angular/core';
export const localStorageToken = new InjectionToken<Storage>('localStorage', {
  providedIn: 'root',
  factory: () => {
    if (typeof localStorage === 'undefined') {
      throw new Error('localStorage is not available in this environment');
    }
    return localStorage;
  },
});
