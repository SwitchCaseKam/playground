export enum Type {
    INFO = "green",
    WARNING = "yellow",
    ERROR = "red"
}

export interface Unit {
    name: string,
    type: Type
}