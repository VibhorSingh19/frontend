import React from 'react';

function pdf({isSignedIn}) {
 
 
    
    if (isSignedIn) {
      return (
      <nav>
          <p>{isSignedIn}</p>	
     </nav>
      );
     }
     else
     {
     return (
      <nav>	
    </nav>
      );
     }	
            
  

}
export default pdf;