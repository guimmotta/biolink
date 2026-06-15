import { configureStore, createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: 'Paloma Gonçalves',
    title: 'English Teacher',
    about: [
    'Sou apaixonada por ensinar inglês de forma leve, prática e contextualizada. Há mais de 10 anos, ajudo mulheres adultas a destravarem a fala, ganharem confiança e se comunicarem com naturalidade no trabalho e na vida.',
    'Se você já entende inglês, mas trava na hora de falar, eu posso te guiar nesse processo 💬✨'
    ],
    cta: {
      title: 'Será um prazer ensinar você!',
      text:
        'Vai ser um prazer te ajudar a finalmente se sentir confiante falando inglês ✨',
    },
    contact: {
      whatsapp: 'https://wa.me/+5535998346733',
      instagram: 'https://instagram.com/teacherpalomafonseca',
    },
    services: [
      {
        id: 1,
        name: 'Aulas Individuais',
        description: 'Para quem quer um plano 100% personalizado e focado nas suas dificuldades.',
        link: 'https://api.whatsapp.com/send?phone=5535998346733&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20aulas%20Individuais!!',
        bg: '#122C4F',
      },
      {
        id: 2,
        name: 'Aulas em Grupo',
        description: 'Ideal para ganhar fluência com mais naturalidade, consistência e perder a vergonha de falar inglês.',
        link: 'https://api.whatsapp.com/send?phone=5535998346733&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20aulas%20em%20Grupo!!',
        bg: '#1d457a',
      },
      {
        id: 3,
        name: 'Bússola',
        description: 'Um guia claro para você parar de se sentir perdida no inglês.',
        link: 'https://bussola2026.vercel.app/',
        bg: '#5B88B2',
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
