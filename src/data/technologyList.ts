export interface ITechnologyItem {
    name: string,
    sub?: string[]
}

export const technologyList: ITechnologyItem[] = [
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