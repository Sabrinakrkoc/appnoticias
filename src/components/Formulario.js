import React from 'react'
import PropTypes from 'prop-types'

//importar custom hooks
import useSelect from './../hooks/useSelect'

//importar estilos para este componenete
import styles from './Formulario.module.css'

export const Formulario = ({guardarCategoriaProp}) => {
    
    const OPCIONES = [
        {value: 'general', label: "General"},
        {value: 'business', label: "Negocios"},
        {value: 'entertainment', label: "Entretenimiento"},
        {value: 'health', label: "Salud"},
        {value: 'science', label: "Ciencia"},
        {value: 'sports', label: "Deportes"},
        {value: 'technology', label: "Tecnología"},
    ]

    const [categoria, SelectNoticias] = useSelect('general', OPCIONES)

    const buscarNoticias = (e) =>{
        e.preventDefault()
        //busqueda
        guardarCategoriaProp(categoria)
    }
    

    
    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2"></div>
            <form
            onSubmit={buscarNoticias}>
                <h2 className={`${styles.heading}`}>Encuentra Noticias por Categoría</h2>
                <SelectNoticias />
                
                <div className="input-field col s12">
                    <input
                    type="submit"
                    value="Buscar"
                    className={`${styles['btn-block']}btn-large amber darken-2`}></input>
                </div>
            </form>
        </div>
    )
}

Formulario.propTypes = {
    guardarCategoriaProp: PropTypes.func.isRequired
}
