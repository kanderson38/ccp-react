export default class Gene {
  constructor(names, inheritanceMode) {
    this.names = names;
    this.inheritanceMode = inheritanceMode;
    this.genePair = '--';
  }

  get splitsAndVisuals() {
    let splits = [];
    let visuals = [];
    let classes = [];

    const genes = this.genePair.split('');
    if (genes[0] !== genes[1] && genes[1] !== 'Y') {
      genes.forEach((gene) => {
        if (gene !== '-') {
          splits.push(this.displayName(parseInt(gene)));
        }
      });
    } else if (genes[0] !== '-') {
      let visualName = this.displayName(parseInt(genes[0]));
      visuals.push(visualName);
      classes.push(visualName.replace(' ', '-').toLowerCase());
    }
    return { splits, visuals, classes };
  }

  displayName(index) {
    return this.names[index];
  }
}
