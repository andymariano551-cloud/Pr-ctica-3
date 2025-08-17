import { describe, it, expect } from '@jest/globals';
import { suma } from './main.js';
describe('suma', ()=>{ it('2+3=5', ()=> expect(suma(2,3)).toBe(5)); });
