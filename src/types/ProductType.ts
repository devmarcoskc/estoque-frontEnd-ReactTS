export type ProductType = {
    _id: string;
    orgãoId: string;
    nome: string;
    código_de_identificação: string;
    categoria: string;
    localização: string;
    status: string;
    data_validade: string;
    quantidade: number;
    fornecedor: string;
    data_entrada: string;
    preço_compra: number;
    preço_venda: number;
};

export type ProductFormType = {
    _id?:string;
    nome: string;
    orgãoId?:string;
    código_de_identificação: string;
    categoria: string;
    localização: string;
    status: string;
    data_validade: string;
    quantidade: number;
    fornecedor: string;
    data_entrada: string;
    preço_compra: number;
    preço_venda: number;
    quantidade_modificada?: number;
    tipo?: string;
};

export type EditProductType = {
    _id: string;
    nome: string;
    orgãoId?:string;
    código_de_identificação: string;
    categoria: string;
    localização: string;
    status: string;
    data_validade: string;
    quantidade: number;
    quantidade_modificada?: number;
    fornecedor: string;
    data_entrada: string;
    preço_compra: number;
    preço_venda: number;
    tipo?: string;
}