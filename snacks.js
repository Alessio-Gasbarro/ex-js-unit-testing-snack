function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== '');
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(titolo) {
    if (!titolo) {
        throw new Error('Titolo non valido');
    }
    return titolo.toLowerCase().replaceAll(" ", "-");
}

function average(numeri) {
    numeri.forEach(numero => {
        if (isNaN(numero)) {
            throw new Error("Average vuole solo numeri!");
        }
    })
    return numeri.reduce((acc, numero) => acc + numero, 0) / numeri.length;
}

function isPalindrome(parola) {
    const parolaInversa = parola.trim().split('').reverse().join('');
    return parola.trim() === parolaInversa;
}

function findPostById(posts, id) {
    if (isNaN(id)) {
        throw new Error(`"${id}" non è un id`);
    }
    posts.forEach(p => {
        if (
            p.id === undefined ||
            p.title === undefined ||
            p.slug === undefined
        ) {
            throw new Error('Questo array posts non è nel formato corretto');
        }
    })
    return posts.find(p => p.id === id) || null;
}

function addPost(posts, post) {
    posts.push(post);
}

function removePost(posts, id) {
    const index = posts.findIndex(p => p.id === id);
    posts.splice(index, 1);
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById,
    addPost,
    removePost
}