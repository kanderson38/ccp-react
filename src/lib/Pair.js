import Cockatiel from './Cockatiel';

export default class Pair {
  constructor(female, male) {
    this.male = male;
    this.female = female;
  }

  static get recombineMethods() {
    return {
      recessive: (gene1, gene2) => {
        if (gene1 === gene2 && gene1[0] === gene1[1]) {
          const results = {};
          results[gene1] = 1;
          return results;
        }
        const geneSplit1 = gene1.split('');
        const geneSplit2 = gene2.split('');
        const resultsObj = {};

        for (const singleGene1 of geneSplit1) {
          const gene1Int = parseInt(singleGene1, 10);
          for (const singleGene2 of geneSplit2) {
            const gene2Int = parseInt(singleGene2, 10);
            const combination = [gene1Int, gene2Int]
              .sort((a, b) => b - a)
              .join('');
            if (resultsObj[combination]) {
              resultsObj[combination] += 1;
            } else {
              resultsObj[combination] = 1;
            }
          }
        }
        return resultsObj;
      },
      'sex-linked': (gene1, gene2) => {
        if (gene2.includes('Y') || gene1 === gene2) {
          const results = {};
          results[gene2] = true;
          return results;
        }
        const results = {};
        const x1 = gene1.split('');
        const x2 = gene2.split('');

        for (let i = 0; i < x1.length; i++) {
          if (x1[i] !== x2[i]) {
            const tempResult1 = [...x1];
            const tempResult2 = [...x2];
            tempResult1[i] = x2[i];
            tempResult2[i] = x1[i];
            results[tempResult1] = true;
            results[tempResult2] = true;
          }
        }
        return results;
      },
    };
  }

  breed() {
    const femaleChicks = [new Cockatiel('female')];
    const maleChicks = [new Cockatiel('male')];

    for (const gene of Object.keys(this.female.genotype)) {
      const genePairFemale = this.female.genotype[gene].genePair;
      const genePairMale = this.male.genotype[gene].genePair;
      const inheritanceMode = this.female.genotype[gene].inheritanceMode;
      if (
        inheritanceMode === 'parblue' ||
        inheritanceMode === 'dominant' ||
        inheritanceMode === 'recessive'
      ) {
        console.log(
          gene,
          genePairMale,
          genePairFemale,
          Pair.recombineMethods['recessive'](genePairFemale, genePairMale),
        );
      } else {
        console.log(
          gene,
          Pair.recombineMethods['sex-linked'](genePairFemale, genePairMale),
        );
      }
    }
    return { femaleChicks, maleChicks };
  }
}
