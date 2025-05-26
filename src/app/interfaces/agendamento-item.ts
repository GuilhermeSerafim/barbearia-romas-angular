export interface AgendamentoItem {
    id: string | undefined,
    cliente: string | undefined,
    telefone: string | undefined,
    servico: "Combo" | "Corte" | "Barba e Bigode"  | undefined,
    barbeiro: string | undefined,
    data:  string | undefined ,
    horario: string | undefined
}
