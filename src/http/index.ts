import type ICategoria from "@/interface/ICategoria";
import type IReceita from "@/interface/IReceita";

export async function obterCategorias() {
    const resposta = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');
    const categorias: ICategoria[] = await resposta.json();
    
    await new Promise((resolver) => {
        setTimeout(resolver, 500);
    })

    return categorias;
}

export async function obterReceitas(){
    const resposta = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json')
    const receitas: IReceitas[] = await resposta.json();

    await new Promise((resolver) => {
        setTimeout(resolver, 500);
    })

    return receitas;
}