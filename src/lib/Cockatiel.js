import Gene from './Gene';

export default class Cockatiel {
  constructor(gender = 'female') {
    this.gender = gender;
    this.genotype = {
      cinnamon: new Gene(['Cinnamon'], 'sex-linked'),
      pearl: new Gene(['Pearl'], 'sex-linked'),
      lutino: new Gene(['Lutino'], 'sex-linked'),
      'sex-linked-yellowcheek': new Gene(
        ['Sex-linked yellowcheek'],
        'sex-linked',
      ),
      pied: new Gene(['Pied'], 'recessive'),
      'recessive-silver': new Gene(['Recessive silver'], 'recessive'),
      olive: new Gene(['Olive'], 'recessive'),
      fallow: new Gene(['Fallow', 'recessive']),
      parblue: new Gene(['Creamface', 'Pastelface', 'Whiteface'], 'parblue'),
      'dominant-silver': new Gene(['Dominant silver'], 'dominant'),
      'dominant-yellowcheek': new Gene(['Dominant yellowcheek'], 'dominant'),
    };
  }

  get genotypeInWords() {
    const splitsArray = [];
    const visualsArray = [];
    for (const gene in this.genotype) {
      const results = this.genotype[gene].splitsAndVisuals;
      if (results.splits.length) {
        splitsArray.push([...results.splits]);
      }
      if (results.visuals.length) {
        visualsArray.push([...results.visuals]);
      }
    }
    if (!visualsArray.length) {
      visualsArray.push('Normal grey');
    }
    console.log('arrays', visualsArray, splitsArray);
    return `${visualsArray.join(' ')} ${
      splitsArray.length ? 'split to' : ''
    } ${splitsArray.join(' ')}`;
  }
}
