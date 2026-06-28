import AllUsers from './AllUsers';

export default () => {


    return (
        <div className="w-full">
            <AllUsers
                // isPicker
                sel={{
                onSelect(value) {
                    console.log(value);
                },
            }} />
        </div>
    )
}   