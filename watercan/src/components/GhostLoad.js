import React from 'react';

const GhostLoad = () => {
    const ghostArray = [1, 2, 3, 4, 5, 6]
    return (
        <div className='f-cont'>
        <div className='ghost-user gradient'>
            <i class="fas fa-circle usr r"></i>
        </div>
        <div className='card-cont'>
        {
            ghostArray.map(el => {
                return(
                    <div className='ghost-friend gradient' key={Math.random(Date.now())}>
                        <i class="fas fa-circle fnd"></i>
                    </div>
                )
            })
        }
         </div>
    </div>
    )
}

export default GhostLoad;
