import { NFormatterPipe } from './index';

describe('NFormatterPipe, Isolated Test', () => {

    let pipe: NFormatterPipe;

    beforeEach(() => { pipe = new NFormatterPipe(); });
    describe('transform without args', () => {
        it('should return correct value for numbers', () => {
            expect(pipe.transform(0)).toEqual('0');
            expect(pipe.transform(1)).toEqual('1');
            expect(pipe.transform(12)).toEqual('12');
            expect(pipe.transform(123)).toEqual('123');
            expect(pipe.transform(1234)).toEqual('1K');
            expect(pipe.transform(1234567)).toEqual('1M');
            expect(pipe.transform(1234567000)).toEqual('1G');
            expect(pipe.transform(1234567000000)).toEqual('1T');
            expect(pipe.transform(1234567000000000)).toEqual('1P');
            expect(pipe.transform(1234567000000000000)).toEqual('1E');
        });

        it('should roundup to closest greatest number', () => {
            expect(pipe.transform(1500)).toEqual('2K');
            expect(pipe.transform(1500000)).toEqual('2M');
            expect(pipe.transform(1500000000)).toEqual('2G');
            expect(pipe.transform(1500000000000)).toEqual('2T');
            expect(pipe.transform(1500000000000000)).toEqual('2P');
            expect(pipe.transform(1500000000000000000)).toEqual('2E');
        });

        it('should not support other objects', () => {
            expect(() => pipe.transform(new Object())).toThrowError();
            expect(() => pipe.transform('123abc')).toThrowError();
            expect(() => pipe.transform(true)).toThrowError();
        });
    });

    describe('transform with args', () => {
        it('should return correct value for numbers', () => {
            expect(pipe.transform(1, 2)).toEqual('1');
            expect(pipe.transform(12, 2)).toEqual('12');
            expect(pipe.transform(123, 2)).toEqual('123');
            expect(pipe.transform(1234, 2)).toEqual('1.23K');
            expect(pipe.transform(1234567, 2)).toEqual('1.23M');
            expect(pipe.transform(1234567000, 2)).toEqual('1.23G');
            expect(pipe.transform(1234567000000, 2)).toEqual('1.23T');
            expect(pipe.transform(1234567000000000, 2)).toEqual('1.23P');
            expect(pipe.transform(1234567000000000000, 2)).toEqual('1.23E');
        });

        it('should roundup to closest greatest number', () => {
            expect(pipe.transform(1990, 1)).toEqual('2K');
            expect(pipe.transform(1999000, 1)).toEqual('2M');
            expect(pipe.transform(1999900000, 1)).toEqual('2G');
            expect(pipe.transform(1999990000000, 1)).toEqual('2T');
            expect(pipe.transform(1999999000000000, 1)).toEqual('2P');
            expect(pipe.transform(1999999900000000000, 1)).toEqual('2E');
        });
    });
});
