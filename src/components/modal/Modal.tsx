import React from "react";
import "./Modal";
import QRCode from "react-qr-code";
import Controle from "../../core/controle/Controle";
interface QrcodeProps {
    controle: Controle

}
export default function Modal(props: QrcodeProps) {
    const id = props.controle.id

    return (
        <QRCode
            size={256}
            style={{ height: "400", maxWidth: "100%", width: "100%" }}
            value={`${process.env.NEXT_PUBLIC_URL_FRONTEND}?parametro=${id}`}
            viewBox={`0 0 256 256`}
        />


    )
}
