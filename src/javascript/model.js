function Thing(additionalType, alternateName, description, disambiguatingDescription, identifier
    , image, mainEntityOfPage, name, potentialAction, sameAs, subjectOf, url) {
    this.additionalType = additionalType;
    this.alternateName = alternateName;
    this.description = description;
    this.disambiguatingDescription = disambiguatingDescription;
    this.identifier = identifier;
    this.image = image;
    this.mainEntityOfPage = mainEntityOfPage; 
    this.name = name;
    this.potentialAction = potentialAction;
    this.sameAs = sameAs;
    this.subjectOf = subjectOf;
    this.url = url;

    this.displaySelf = function() {
        console.log(`${this.name}: ${this.alternateName}`);
    };
}