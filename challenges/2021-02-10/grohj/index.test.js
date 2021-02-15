const {describe,it} = require('@jest/globals')
const Group = require('./index')



describe('set behavior', () => {
    it('basic tests', () => {
        console.log(Group)
        let group = Group.from([5,3,4,1,8,7,9])

        expect(group.has(5)).toBeTruthy() // → true
        expect(group.has(99)).toBeFalsy() // → false

        group.add(10)
        group.delete(5)
        group.add(5)
        group.add(20)
        group.delete(4)
        group.delete(1)
        group.delete(3)
        group.delete(9)
        group.delete(10)

        expect(group.has(10)).toBeFalsy()

        console.log()
        group.tree.printInfix()


    })

    it('speed test', () => {
        const start = new Date().getTime();

        const group = new Group()

        for (let i = 0; i < 1000000; i++) {
            group.add(Math.floor(Math.random()*1000000))
        }

        for (let i = 0; i < 30000000; i++) {
            group.has(Math.floor(Math.random()*30000000))
        }


        const end = new Date().getTime();
        const time = end - start;

        console.log('Execution time: ' + time + 'ms');
        // My time on my machine (ryzen 5 1600) = 15503ms
    })
})