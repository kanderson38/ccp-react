import Gene from './Gene';

export default class Cockatiel {
  constructor(gender = 'female', prefix = '') {
    this.prefix = prefix;
    this.gender = gender;
    this.genotype = {
      cinnamon: new Gene(['Cinnamon'], 'sex-linked', this.gender === 'female'),
      pearl: new Gene(['Pearl'], 'sex-linked', this.gender === 'female'),
      lutino: new Gene(['Lutino'], 'sex-linked', this.gender === 'female'),
      'sex-linked-yellowcheek': new Gene(
        ['Sex-linked yellowcheek'],
        'sex-linked',
        this.gender === 'female',
      ),
      pied: new Gene(['Pied'], 'recessive', this.gender === 'female'),
      'recessive-silver': new Gene(
        ['Recessive silver'],
        'recessive',
        this.gender === 'female',
      ),
      olive: new Gene(['Olive'], 'recessive', this.gender === 'female'),
      fallow: new Gene(['Fallow'], 'recessive', this.gender === 'female'),
      parblue: new Gene(
        ['Creamface', 'Pastelface', 'Whiteface'],
        'parblue',
        this.gender === 'female',
      ),
      'dominant-silver': new Gene(
        ['Dominant silver'],
        'dominant',
        this.gender === 'female',
      ),
      'dominant-yellowcheek': new Gene(
        ['Dominant yellowcheek'],
        'dominant',
        this.gender === 'female',
      ),
    };
  }

  get genotypeInWords() {
    const splitsArray = [];
    const visualsArray = [];
    let classes = [];
    for (const gene in this.genotype) {
      const results = this.genotype[gene].splitsAndVisuals;
      if (results.splits.length) {
        splitsArray.push([...results.splits]);
      }
      if (results.visuals.length) {
        visualsArray.push([...results.visuals]);
        classes.push([...results.classes]);
      }
    }
    if (!visualsArray.length) {
      visualsArray.push('Normal grey');
    }
    console.log('classes', classes);
    return {
      genotype: `${visualsArray.join(' ')} ${
        splitsArray.length ? 'split to' : ''
      } ${splitsArray.join(' ')}`,
      classes,
    };
  }
}
