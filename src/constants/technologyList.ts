export interface ITechnologyItem {
    name: string,
    sub?: string[]
}

export const TECHNOLOGY_LIST: ITechnologyItem[] = [
    { name: 'TypeScript' },
    {
        name: 'React',
        sub: ['mobx-react-lite', 'react-router-dom'],
    },
    {
        name: 'CSS in JS',
        sub: ['styled-component', 'ThemeContext'],
    },
    {
        name: 'CSS',
        sub: ['@keyframes animation', '3D Transform animation']
    },
]