const Button = props => {
    const tryAgainHandler = () => {
        props.callApiAgain();
    };
    return <div className="w-[100px] text-center">
        <i className='fa fa-sad-tear my-5 text-red-500 text-5xl'></i>
        <button onClick={tryAgainHandler} className="py-2 px-3 bg-green-700 rounded text-white">Try Again</button>
    </div>
};
export default Button;