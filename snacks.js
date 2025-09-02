function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== '');
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(titolo) {
    return titolo.toLowerCase();
}

function average(numeri) {
    numeri.forEach(numero => {
        if (isNaN(numero)) {
            throw new Error("Average vuole solo numeri!");
        }
    })
    return numeri.reduce((acc, numero) => acc + numero, 0) / numeri.length;
}

module.exports = {
    getInitials,
    createSlug,
    average
}