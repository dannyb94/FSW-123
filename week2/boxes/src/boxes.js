export default function Box(props){
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <hr/>
            <p>{props.description}</p>
        </div>
    );
}