import { useNavigate } from "react-router-dom"

const Contact = () => {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const confirm = window.confirm('¿Desea mandar este formulario?')
        if(confirm) navigate('/')
        
    }

    return (
        <div>
            <h2>Formulario de Contacto</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="nombre" />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contact