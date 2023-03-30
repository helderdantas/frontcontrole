

// Componente que criar o modelo de titulo
export default function Titulo(props){

    return(
        <>
            
            <h1 className="text-center py-2 text-xl">
                    {props.children}
            </h1>
            <hr className="border-2 border-gray-600"/>
        
        </>
    )

}