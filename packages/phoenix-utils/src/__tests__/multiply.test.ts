import { multiply } from '../multiply'

describe('Test multiply', () => {
    test('should return 3', () => {
        const result = multiply(3,1)
        expect(3).toEqual(result)
    })
})