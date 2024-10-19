// jekhane likhbo sekhane export korbo
// export default function Todo({task}){
//     return(
//         <div>
//             <li>Task: {task}</li>
//         </div>
//     )
// }

// conditional rendering : 1
// export default function Todo({task, isDone}){
//     if(isDone){
//         return(
//             <div>
//                 <li>Finished: {task}</li>
//             </div>
//         )
//     }else{
//         return <li>Work on: {task}</li>
//     }
// }

// conditional rendering : 2
// export default function Todo({task, isDone}){
//     if(isDone){
//        return <li>Finished: {task}</li> 
//     }return <li>Work on: {task}</li>

// }

// conditional rendering : 3 ternary 
// export default function Todo({ task, isDone }) {
//     return (
//         <div>
//             <li>{isDone ? 'Finished work' : 'Work On'} : {task}</li>
//         </div>
//     )

// }

// conditional rendering 4: &&
// export default function Todo({task, isDone}){
//     return(
//         <div>
//             <li>Task: {task} {isDone && ': Done'}</li>
//         </div>
//     )
// }

// conditional renderng 5: ||
// export default function Todo({task, isDone}){
//     return(
//         <div>
//             <li>Task: {task} {isDone || ': Do it'}</li>
//         </div>
//     )
// }

export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
       listItem = <li>Finished: {task}</li> ;
    }else{
        listItem = <li>Work on: {task}</li>
    }
    return listItem

}