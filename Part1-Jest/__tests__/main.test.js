const formatVolumeIconPath = require('../assets/scripts/main');
describe('Test volume icon path', ()=>{
    test('Volume > 66', ()=>{
        expect(formatVolumeIconPath(100)).toMatch('./assets/media/icons/volume-level-3.svg')
    })

    test('Volume between 66 and 33', ()=>{
        expect(formatVolumeIconPath(50)).toMatch('./assets/media/icons/volume-level-2.svg')
    })

    test('Volume between 0 and 33', ()=>{
        expect(formatVolumeIconPath(20)).toMatch('./assets/media/icons/volume-level-1.svg')
    })

    test('Volume = 0', ()=>{
        expect(formatVolumeIconPath(0)).toMatch('./assets/media/icons/volume-level-0.svg')
    })
})