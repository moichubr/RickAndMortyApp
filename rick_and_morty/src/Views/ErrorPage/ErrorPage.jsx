import style from './ErrorPage.module.css'

const ErrorPage = () => {
    return (
    <div className={style.error}>
    <h1>404 ERROR</h1>
    <h2>Upss! Donde quieres ir no existe... intentalo otra vez.</h2>
    </div>
    )
}

export default ErrorPage