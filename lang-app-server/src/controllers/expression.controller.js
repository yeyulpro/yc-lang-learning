
export const getExpressions= async(req,res)=>{
    try{
       
        res.status(200).json({  
            success: true,
            message: 'Expressions fetched successfully',
            data: expressions
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: 'Error fetching expressions',
            error: error.message
        })
    }
}