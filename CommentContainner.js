import React from 'react'



const commentsection = [

    {

        name : "Melroy salins",
        text : "lorem ipsum",

        reply :[
            {
                name : "Asha ",
                text : "lalalallalalalallallalallaallalalalalalal"
            },{
                name : "Asha ",
                text : "lalalallalalalallallalallaallalalalalalal"

            },{
                name : "Asha ",
                text : "lalalallalalalallallalallaallalalalalalal"

            },{
                name : "Asha ",
                text : "lalalallalalalallallalallaallalalalalalal"

            },{
                name : "Asha ",
                text : "lalalallalalalallallalallaallalalalalalal"

            },{
                name : "Asha ",
                text : "lalalallalalalallallalallaallalalalalalal"

            },{
                name : "Asha ",
                text : "lalalallalalalallallalallaallalalalalalal"

            },{
                name : "Asha ",
                text : "lalalallalalalallallalallaallalalalalalal"

            },{
                name : "Asha ",
                text : "lalalallalalalallallalallaallalalalalalal"

            }
        ]
    },
    {
        

            name : "Melroy salins",
            text : "lorem ipsum",

            reply :[]
            
        
    }
]


const CComment = ({data}) => {

    const {name , text, reply} = data;

   return (

    <div>
        <img src=''></img>
        <div className='bg-slate-400 mb-3'>
            <p>{name}</p>
            <p>{text}</p>
        </div>
    </div>
   )
}

const Commentlist = ({commentdata}) => {

        return (
            <div>
                 {

                        commentdata.map ((comment) => <CComment data={comment}/>)
                 }  

            </div>
        )

       
         
}

const CommentContainner = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='font-semibold text-2xl'>Comments : </h1>
        <Commentlist commentdata={commentsection }/>
    </div>
  )
}

export default CommentContainner