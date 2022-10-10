import React from 'react';
import Modal from '../modal';
import history from '../../history'
import { fetchOneStream, editStream } from '../../actions'

const StreamDelete = () => {
    //pull in action buttons 
    const actions = (
        <React.Fragment>
            <button className="ui red button">Delete</button>
            <button 
                onClick={() => history.push('/')}
                className="ui cancel button">Cancel</button>
        </React.Fragment>
    )

    
    return(
        <div>
            <h2 className="stream-header">Delete Stream</h2>
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream? Please note this action is permanent and you will not be able to restore your stream."
                actions={actions}
                onDismiss = {() => history.push('/')}
            
            />
        </div>
    ) 
}


// class StreamDelete extends React.Component {
//     //pull in action buttons 
//     // const actions = (
//     //     <React.Fragment>
//     //         <button className="ui red button">Delete</button>
//     //         <button 
//     //             onClick={() => history.push('/')}
//     //             className="ui cancel button">Cancel</button>
//     //     </React.Fragment>
//     // )

    
//     render() {
//         return (
//             <div>
//             <h2 className="stream-header">Delete Stream</h2>
//             <Modal
//                 title="Delete Stream"
//                 content="Are you sure you want to delete this stream? Please note this action is permanent and you will not be able to restore your stream."
//                 // actions={actions}
//                 onDismiss = {() => history.push('/')}
            
//             />
//         </div>
//         )
        
    
//     }
// }


export default StreamDelete