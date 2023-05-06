const Error = ({ error }) => {
    return (
        <div className='absolute p-3 border-2 border-red-500 rounded-md top-[120%] left-0 w-[17.3rem] -translate-y-1/2'>
            <p className='text-red-500'>{error}</p>
        </div>
    )
}

export default Error;
