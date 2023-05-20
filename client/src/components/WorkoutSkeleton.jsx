import Skeleton, { SkeletonTheme  }from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const WorkoutSkeleton = ({ count }) => {
    const array = Array(count).fill(0);

    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            {array.map((_item, index) => (
                <div className='mx-auto p-4 border-2 border-[#444] rounded-lg w-80' key={index}>
                    <Skeleton count={4} />
                </div>
            ))}
        </SkeletonTheme>
    )
}

export default WorkoutSkeleton;
