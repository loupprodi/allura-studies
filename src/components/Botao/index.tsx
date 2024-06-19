import React from "react";
import style from './Botao.module.scss'


class Botao extends React.Component<{
    texto: string, 
    type?:"submit" | "button" | "reset" | undefined,
    onClick?: ()=>void;
}>{
    render(): React.ReactNode {
        const {type = "button", onClick} = this.props;
        return(
            <button 
            onClick={onClick}
            type={type} 
            className={style.botao}
            >
                {this.props.texto}
            </button>
        )
    }
}
// class Botao extends React.Component{
//     render(): React.ReactNode {
//         return(
//             <button className={style.botao}>
//                 {this.props.children}
//             </button>
//         )
//     }
// }
export default Botao;