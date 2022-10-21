
// Componente que criar o modelo de titulo
export default function Titulo(props){

    return(
        <div>
            <h1 className="px-5 py-2 text-2xl">
                {props.children}
            </h1>
            <hr className="border-2 border-gray-600"/>
        </div>

    )

}