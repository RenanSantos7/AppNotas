export class INota {
    id: number
    titulo?: string
    conteudo: string  
    cor?: string
    tags?: string[]
}

export interface ITag {
    id: number
    titulo: string
    cor?: string
}