const Error = ({ error }) => {
    return (
        <div className='absolute p-3 border-2 border-red-500 rounded-md w-50 top-full left-0 mt-20 w-15 -translate-y-1/2'>
            <p className='text-red-500'>{error}</p>
        </div>
    )
}

export default Error;
