export function verificaItens(lista1: unknown[], lista2: unknown[]): boolean {
    return lista1.every((itemLista1) => {
        return lista2.includes(itemLista1);
    });
}