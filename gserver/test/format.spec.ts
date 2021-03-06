import { format } from '../src/format';
import { getFileContent } from '../src/util';
import { expect } from 'chai';

describe('format', () => {
    let after = getFileContent(__dirname + '/data/after.format.feature').split(/\r?\n/);
    let beforeU = getFileContent(__dirname + '/data/before.format.feature');
    let beforeUArr = beforeU.split(/\r?\n/);
    let before = format('\t', beforeU).split(/\r?\n/);
    it(`should not change lines num`, () => expect(before.length).to.be.equal(after.length));
    beforeUArr.forEach((l, i) => it(`should correctly format "${l}" line`, () =>
        expect(before[i]).to.be.equal(after[i])));
});