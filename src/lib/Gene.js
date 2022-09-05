export default class Gene {
  constructor(names, inheritanceMode, isFemale = true) {
    this.names = names;
    this.inheritanceMode = inheritanceMode;
    this.genePair = isFemale && inheritanceMode === 'sex-linked' ? '0Y' : '00';
  }

  get splitsAndVisuals() {
    let splits = [];
    let visuals = [];
    let classes = [];

    const genes = this.genePair.split('');
    if (this.inheritanceMode === 'dominant') {
      let descriptiveText = '';
      if (genes[0] === genes[1] && genes[0] !== '0') {
        descriptiveText = `${this.displayName(0)} (double factor)`;
      } else if (genes[0] !== genes[1]) {
        descriptiveText = `${this.displayName(0)} (single factor)`;
      }
      descriptiveText && visuals.push(descriptiveText);
      descriptiveText &&
        classes.push(this.displayName(0).replace(' ', '-').toLowerCase());
    } else if (genes[0] !== genes[1] && genes[1] !== 'Y') {
      genes.forEach((gene) => {
        if (gene !== '0') {
          splits.push(this.displayName(parseInt(gene, 10) - 1));
          if (this.inheritanceMode === 'parblue') {
            classes.push(
              this.displayName(parseInt(gene, 10) - 1)
                .replace(' ', '-')
                .toLowerCase(),
            );
          }
        }
      });
    } else if (genes[0] !== '0') {
      let visualName = this.displayName(parseInt(genes[0]) - 1);
      visuals.push(visualName);
      classes.push(visualName.replace(' ', '-').toLowerCase());
    }
    return { splits, visuals, classes };
  }

  displayName(index) {
    return this.names[index];
  }
}
