class Dictionary {
    constructor() {
      this.entries = {}; 
    }
    newEntry(word, definition) {
      this.entries[word] = definition;
    }
    look(word) {
      if (word in this.entries) {
        return this.entries[word];
      } else {
        return `Can't find entry for ${word}`;
      }
    }
  }

  // >>> let d = new Dictionary();

  // >>> d.newEntry("Apple", "A fruit that grows on trees");
  
  // >>> console.log(d.look("Apple"));
  // A fruit that grows on trees
  
  // >>> console.log(d.look("Banana"));
  // Can't find entry for Banana