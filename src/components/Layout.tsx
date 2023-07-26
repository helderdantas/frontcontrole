import Titulo from "./Titulo";
import Image from 'next/image';
import logo from '../../src/public/logotipoSeec.png';



// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
  return src
}

function image (props) {
  return <Image {...props} loader={customLoader} />
}

interface LayoutProps{
    titulo?:string
    children:any
}

// Componente que criar o layout da aplicacao
export default function Layout(props:LayoutProps) {
    return (
        //configuracao do tamanho do layout w-8/9
        <div className={`
            flex flex-col w-10/12
            bg-gray-200
            text-gray-800 
            rounded-md
        `}>
            <div className='columns-1'>
                <div className={`grid justify-items-center`}>
                {image(logo)}
               
                </div>
              
                <h1 className="px-0 py-0 text-xl  text-center">
                    Secretaria de Educação, do Esporte e Lazer do Estado do Rio Grande do Norte
                </h1>
                <h1 className="px-0 py-0 text-xl  text-center">
                    Grupo de Processamento de Dados - GPD
                </h1>
                <h1 className="px-0 py-0 text-xl  text-center">
                    Controle de Patrimonio
                </h1>
                                
                       
            </div>
            <hr className="border-2 border-gray-600"/>

            <Titulo>{props.titulo}</Titulo>
            <div className="p-2">
                {props.children}
            </div>

        </div>
    )

}