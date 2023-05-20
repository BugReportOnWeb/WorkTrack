const Error = ({ error, width }) => {
    return (
        <div className={`absolute w-full left-0 p-3 border-2 border-red-500 rounded-md top-[116%] -translate-y-1/2 ${width}`}>
            <p className='text-red-500'>{error}</p>
        </div>
    )
}

export default Error;
