import React from 'react'

const Biography = ({ imageUrl }) => {
    return (
        <div className="container biography">
            <div className="banner">
                <img src={imageUrl} alt="aboutImg" />
            </div>
            <div className="banner">
                <p>Biography</p>
                <h3>Who We Are</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusamus dolore, ab nam iste quae nemo delectus sunt deleniti ipsum provident magni saepe consequatur impedit adipisci aliquid, ipsam illo necessitatibus deserunt iure qui modi possimus ipsa. Velit beatae tenetur voluptates at error quis voluptas molestias deserunt. Vel officiis pariatur eos.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, in.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, magnam enim maiores sit ducimus, impedit voluptatum provident magni eos fugiat officiis cupiditate reprehenderit nostrum voluptates quibusdam voluptate, vel quidem accusamus ipsum deleniti iste incidunt amet!
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, ipsam. Sit, ullam.
                </p>
                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>


    )
}

export default Biography