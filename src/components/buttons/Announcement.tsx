import './buttons.css';

export default function AnnoucementBtn ({btnText} : {btnText:string}){
    return(
        <div>
        <button className="annoucementBtn ">{btnText}</button>
        </div>
    );
}