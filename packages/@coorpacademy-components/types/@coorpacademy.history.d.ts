declare module '@coorpacademy/history' {
    export type History = {
        createHref: (to: string) => string,
        push: (to: string) => void
    }
}