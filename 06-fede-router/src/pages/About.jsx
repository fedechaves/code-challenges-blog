import { Link } from "../Link"

const i18n = {
  es: {
    title: 'Sobre mi',
    button: 'Ir a Home',
    description: 'Hola! Me llamo Fede y estoy creando un clon de React Router'
  },
  en: {
    title: 'About me',
    button: 'Home',
    description: 'Hi! Im fede and Im creating a React Router Clon!'

  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function About({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en')  
  return (
      <>
        <h1>{i18n.title}</h1>
        <div>
          <img src="https://pbs.twimg.com/profile_images/1706686915167064064/Fh5d_3Mk_400x400.jpg" alt="profile_pic" />
          <p>{i18n.description}</p>
        </div>
        <Link to={'/'}>{i18n.button}</Link>
      </>
    )
  }