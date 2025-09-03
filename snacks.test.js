const { getInitials, createSlug, average, isPalindrome, findPostById, addPost, removePost } = require("./snacks.js")

describe('Manipolazione di Stringhe', () => {
    //Snack 1
    test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
        expect(getInitials("Mario Rossi")).toBe("M.R.");
        expect(getInitials("luigi bianchi")).toBe("L.B.");
        expect(getInitials("Maria Verdi")).toBe("M.V.");
    });

    //Snack 5
    test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
        expect(isPalindrome("anna")).toBeTruthy();
        expect(isPalindrome("boolean")).toBeFalsy();
    })

})

describe('Operazioni su Array', () => {
    //Snack 3
    test('La funzione "average" calcola la media aritmetica di un array di numeri', () => {
        expect(average([5, 15])).toBe(10);
        expect(() => average([5, "Ciao"])).toThrow();
    })

    let posts;

    beforeEach(() => {
        posts = [
            { id: 1, title: "Introduzione a Javascript", slug: "introduzione-a-javascript" },
            { id: 2, title: "React Hooks", slug: "react-hooks" }
        ];
    })

    //afterEach(() => {
    //    posts = [];
    //})

    //Snack 7
    test(`La funzione findPostById restituisce il post corretto dato l'array di post e l'id`, () => {
        expect(findPostById(posts, 2)).toEqual({ id: 2, title: "React Hooks", slug: "react-hooks" });
        expect(findPostById(posts, 3)).toEqual(null);
        expect(() => findPostById(posts, "ciao")).toThrow('"ciao" non è un id');
        expect(() => findPostById([34, 67], 2)).toThrow('Questo array posts non è nel formato corretto');
    });

    //Snack 8 - BONUS
    test('Dopo aver aggiunto un post con la funzione addPost, un array posts deve contenere un elemento in più.', () => {
        addPost(posts, { id: 3, title: "Introduzione a Typescript", slug: "introduzione-a-typescript" });
        expect(posts).toHaveLength(3);
    });
    test('Dopo aver rimosso un post con la funzione removePost, un array posts deve contenere un elemento in meno.', () => {
        removePost(posts, 2);
        expect(posts).toHaveLength(1);
    })

});

describe('Generazione di Slug', () => {
    //Snack 2
    test('La funzione createSlug restituisce una stringa in lowercase.', () => {
        expect(createSlug("Titolo CON Maiuscole")).toBe("titolo-con-maiuscole");
    })

    //Snack 4
    test('La funzione createSlug sostituisce gli spazi con "-".', () => {
        expect(createSlug("Titolo MOLTO bello")).toBe("titolo-molto-bello");
    })

    //Snack 6
    test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
        expect(() => createSlug("")).toThrow('Titolo non valido');
        expect(() => createSlug(null)).toThrow('Titolo non valido');
    });
})