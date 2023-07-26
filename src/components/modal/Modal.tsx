import React from "react";
import styles from './style.module.css';
import QRCode from "react-qr-code";
import Controle from "../../core/controle/Controle";
interface QrcodeProps {
    controle: Controle

}
export default function Modal(props: QrcodeProps) {
    const id = props.controle.id

    return (
        <>
            <center>
                <div>
                    <h1 style={{fontSize: '50px'}}>
                        <strong>
                            Link: http://10.26.0.51  -  Código: {props.controle.id}
                        </strong>
                    </h1>
                    <br />
                </div>
            </center>
            <QRCode
                size={400}
                style={{ height: "400", maxWidth: "100%", width: "100%" }}
                value={`${process.env.NEXT_PUBLIC_URL_FRONTEND}?parametro=${id}`}
                viewBox={`0 0 256 256`}
            />
            <center>
                <div>
                    <br />
                    <p style={{fontSize: '50px'}}>
                        <strong>Ilha: {props.controle.ilha}</strong>
                         | 
                        <strong>Estação: {props.controle.baia}</strong> 
                    </p>
                    <br />
                </div>
            </center>
        </>

    )
}
