import React  from 'react';

const Ninjas = ( { ninjas } ) => {

   
    const ninjaList = ninjas.map(ninja => {

        if(ninja.age>24) {
            return(
                <div className="ninja" key={ninja.id}>
                    <div > Name : {ninja.name}</div>
                    <div > Age  :  {ninja.age} </div>
                    <div > Belt  :  {ninja.belt} </div>
                    <br />
                </div>
            )
        }
        else {
            return null;
        }
    })
    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
    
}

export default Ninjas 