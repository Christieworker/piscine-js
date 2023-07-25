// Tableau de correspondance entre les nucléotides de l'ADN et de l'ARN
const DNAtoRNA = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
};

// Tableau de correspondance entre les nucléotides de l'ARN et de l'ADN
const RNAtoDNA = {
    C: "G",
    G: "C",
    A: "T",
    U: "A",
};

// Convertit une séquence d'ADN en ARN
function RNA(dna) {
    return dna
        .split("") // Convertit la séquence d'ADN en tableau de nucléotides
        .map((nucleotide) => DNAtoRNA[nucleotide]) // Remplace chaque nucléotide par son équivalent ARN
        .join(""); // Convertit le tableau de nucléotides en chaîne de caractères
}

// Convertit une séquence d'ARN en ADN
function DNA(rna) {
    return rna
        .split("") // Convertit la séquence d'ARN en tableau de nucléotides
        .map((nucleotide) => RNAtoDNA[nucleotide]) // Remplace chaque nucléotide par son équivalent ADN
        .join(""); // Convertit le tableau de nucléotides en chaîne de caractères
}
