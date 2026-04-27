import { configureStore, createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: 'Paloma Gonçalves',
    title: 'English Teacher',
    about: 'Sou apaixonada por ensinar inglês de forma leve e eficaz. Com mais de 10 anos de experiência, ajudo meus alunos a alcançarem fluência e confiança para se expressarem em qualquer situação. Vamos juntos nessa jornada de aprendizado?',
    cta: {
      title: 'Será um prazer ensinar você!',
      text: 'Sou apaixonada por ensinar inglês de forma leve e eficaz. Com mais de 10 anos de experiência, ajudo meus alunos a alcançarem fluência e confiança para se expressarem em qualquer situação. Vamos juntos nessa jornada de aprendizado?',
    },
    contact: {
      whatsapp: 'https://wa.me/+553598346733',
      instagram: 'https://instagram.com/teacherpalomafonseca',
      email: 'mailto:paloma@email.com',
    },
    services: [
      {
        id: 1,
        name: 'Aulas Particulares',
        description: 'Aulas personalizadas para melhorar seu inglês de forma eficaz.',
        link: '#',
        bg: '#c8b89a',
      },
      {
        id: 2,
        name: 'Bússola',
        description: 'Guia completo para dominar o inglês de forma prática e eficaz.',
        link: '#',
        bg: '#b5a48a',
      },
      {
        id: 3,
        name: 'The Lighthouse',
        description: 'Guia de estudos personalizado para alcançar fluência em inglês de forma leve e eficaz.',
        link: '#',
        bg: '#a09080',
      },
    ],
    links: [
      { id: 1, label: 'Meu Instagram', url: 'https://instagram.com/teacherpalomafonseca', icon: '📸' },
      { id: 2, label: 'Portfólio', url: '#', icon: '🎨' },
      { id: 3, label: 'E-book Gratuito', url: '#', icon: '📖' },
    ],
  },
  reducers: {
    updateName: (state, action) => { state.name = action.payload },
    updateAbout: (state, action) => { state.about = action.payload },
  }
})

export const { updateName, updateAbout } = profileSlice.actions

export const store = configureStore({
  reducer: { profile: profileSlice.reducer }
})
