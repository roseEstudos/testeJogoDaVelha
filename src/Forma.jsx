import './Forma.css';

function Forma(props){
    return (
        <button className="quadrado" onClick={props.onClick}>
            {/* Receberá o X, O ou será vazio */}
            {props.value}
        </button>
    );
}

export default Forma;