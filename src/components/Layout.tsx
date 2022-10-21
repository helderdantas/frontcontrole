import Titulo from "./Titulo";

interface LayoutProps{
    titulo:string
    children:any
}

// Componente que criar o layout da aplicacao
export default function Layout(props:LayoutProps) {
    return (
        //configuracao do tamanho do layout w-8/9
        <div className={`
            flex flex-col w-10/12
            bg-gray-100
            text-gray-800 
            rounded-md
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-2">
                {props.children}
            </div>

        </div>
    )

}